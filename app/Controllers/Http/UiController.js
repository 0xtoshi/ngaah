'use strict'

class UiController {

    async login({view}){

        return view.render('v1.login')

    }

    async register({view}){

        return view.render('v1.register')

    }



}

module.exports = UiController
