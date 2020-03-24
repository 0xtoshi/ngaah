'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class TwoFA extends Model {

    static get table(){
        return 'two_fas'
    }

    static get hidden () {
        return ['id']
    }

}

module.exports = TwoFA
