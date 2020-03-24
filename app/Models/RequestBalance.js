'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class RequestBalance extends Model {

    static get table(){
        return 'request_balances'
    }

    static get hidden () {
        return ['id']
    }

}

module.exports = RequestBalance
