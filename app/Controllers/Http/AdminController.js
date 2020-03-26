'use strict'
const Member = use('App/Models/Member')
const Notifikasi = use('App/Models/Notifikasi')
const Service = use('App/Models/Service')
const Pulsa = use('App/Models/Pulsa')
const Bantuan = use('App/Models/Bantuan')
const TwoFA = use('App/Models/TwoFA')
const Order = use('App/Models/Order')
const Balance = use('App/Models/Balance')
const Api = use('App/Models/Api')


const Database = use('Database')


class AdminController {

    async Dashboard({view}){

        /*
        * Get UI Dashboard and render
        * Created By Ngaah.id
        */

        return view.render('v1.dashboard',{

            title : 'Ngaah Dashboard'

        })

    }

    async getTopUser({request, session, response}){

        /*
        * Get Top User Used Balance
        * Created By Ngaah.id
        */

        var ORM = await Member.query().select('username','balance_used').orderBy('balance_used','DESC').limit(10).fetch()
        return response.status(200).json(ORM)

    }

    async getUserBalance({request, session, response}){

        /*
        *  Get Top User Balance
        * Created By Ngaah.id
        */

        var ORM = await Member.query().select('username','balance').orderBy('balance','DESC').limit(10).fetch()
        return response.status(200).json(ORM)

    }

    async getOrderHistory({request, session, response})
    {
        /*
        *  Get Count order history in 7 days
        * Created By Ngaah.id
        */

        var ORM = await Order.query().groupBy('datetime').select('datetime', Database.raw('count(*) as count')).limit(7).fetch()
        return response.status(200).json(ORM)
    }

    async getWalletBalance({ request, session, response })
    {
        /*
        *  Get Wallet Balance Used and Current Balance
        * Created By Ngaah.id
        */

        var session_username = await session.get('username')
        var data = await Member.query().select('balance','balance_used').where('username',session_username).first()
        return response.status(200).json(data)
    }

    async getService({ request, session, response})
    {

        /*
        *  Get Service List LIMIT(4) 
        * Created By Ngaah.id
        */

        var data = await Service.query().select('service').limit(4).orderBy('id','DESC').fetch()
        return response.status(200).json(data)

    }

    async getUser({ request, session, response })
    {

        /*
        *  Get COUNT() Active and Inactive User
        * Created By Ngaah.id
        */

        var active = await Member.query().where('status','Aktif').select(Database.raw('count(*) as count')).first()
        var inactive = await Member.query().where('status','Tidak Aktif').select(Database.raw('count(*) as count')).first()
        return response.status(200).json({

            active :  active.count,
            inactive : inactive.count

        })

    }

    async getNotification({ request, session, response })
    {

        var notification = await Notifikasi.query().select('text','level').where('active',1).fetch()
        return response.status(200).json(notification)

    }
    

}

module.exports = AdminController
