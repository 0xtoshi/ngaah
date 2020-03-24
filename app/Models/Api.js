'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Api extends Model {

    static get table(){
        return 'apis'
    }

    static get hidden () {
        return ['id']
    }
    
    static get visible () {
        return ['apiKey', 'nama', 'ip_whitelist','user_id']
      }

}

module.exports = Api
