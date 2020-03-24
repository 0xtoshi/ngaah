'use strict'

class UiController {

    async login({view}){

        return view.render('v1.login')

    }

}

module.exports = UiController
