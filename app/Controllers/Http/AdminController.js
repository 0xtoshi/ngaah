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

class AdminController {

    async Dashboard({view}){

        return view.render('v1.dashboard')

    }

    async getTopUser({request, session, response}){

        var ORM = Member.query().select('username','balance').orderBy('balance','DESC').limit(10).fetch()

        return ORM

    }
    

}

module.exports = AdminController
