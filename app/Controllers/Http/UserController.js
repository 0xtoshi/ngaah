'use strict'

const { validate } = use('Validator')
const Hash = use('Hash')
const uuidv4 = require("uuid/v4");


const Member = use('App/Models/Member')
const Notifikasi = use('App/Models/Notifikasi')
const Service = use('App/Models/Service')
const Pulsa = use('App/Models/Pulsa')
const Bantuan = use('App/Models/Bantuan')
const TwoFA = use('App/Models/TwoFA')
const Order = use('App/Models/Order')
const Balance = use('App/Models/Balance')
const Api = use('App/Models/Api')

class UserController {

    async login({request, session, response})
    {
        const rules = {
            username: 'required|min:5|max:100',
            password: 'required|min:5|max:100'
          }
      
          const validation = await validate(request.all(), rules)
      
          if (validation.fails()) {
            return response.status(400).send(validation.messages())
          }

          var req = await request.all();

          var check_username = await Member.findBy('username',req.username)

          if(check_username){

          var ORM = await Member.query().where('username',req.username).first()
          const isSame = await Hash.verify(req.password, ORM.password)

          if (isSame) {
            
            await session.put('level', ORM.level)
            await session.put('username', ORM.username)
            await session.put('isLogin', true);

             return await response.status(200).send([{
                'error' : false,
                'message' : 'Sucessfully Login! You will redirected!'
            }])

          }else{

            return await response.status(401).send([{
                'error' : true,
                'message' : 'Login failed! Please check username or password!'
            }])

          }

        }else{

            return await response.status(401).send([{
                'error' : true,
                'message' : 'Login failed! Please check username or password!'
            }])

        }
        

          

    }

    async register({ request, session, response }){

        const rules = {

            username : 'required|min:5|max:8|unique:members',
            email : 'required|email|min:5|max:30|unique:members',
            password : 'required'

        }

        const validation = await validate(request.all(), rules)

        if (validation.fails()) {
            return await response.status(400).send(validation.messages())
        }

        var req = await request.all();

        const member = new Member()

        member.username     = req.username
        member.email        = req.email
        member.password     = await Hash.make(req.password)
        member.balance      = 0
        member.level        = 'Member'
        member.register     = await new Date().toISOString().slice(0,10);
        member.balance_used = 0
        member.kode         = await uuidv4()
        member.status       = 'Tidak Aktif'
        member.last_login   = request.ip()

        await member.save()

        return await response.status(200).send([{
            'error' : false,
            'message' : 'Sucessfully Register! You will receive email to verify!'
        }])


    }

    async whoami({ request, session, response }){

        var session_level = session.get('level')
        var session_isLogin = session.get('isLogin')
        var session_username = session.get('username')

        if(session_isLogin){

            if(session_level == 'Admin'){

                return response.redirect('/admin/dashboard')

            }else if(session_level == 'Reseller'){

                return response.redirect('/reseller/dashboard')

            }else if(session_level == 'Member'){

                return response.redirect('/member/dashboard')

            }else{

                return await [{
                    'error' : true,
                    'message' : 'Session not found!'
                }]

            }

        }else{

            return await [{
                'error' : true,
                'message' : 'Session not found!'
            }]

        }

    }

}

module.exports = UserController
