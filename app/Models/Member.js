'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Member extends Model {

    static get table(){
        return 'members'
    }

    static get hidden () {
        
    }

}

module.exports = Member
