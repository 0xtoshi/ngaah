'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Service extends Model {

    static get table(){
        return 'services'
    }

    static get hidden () {
        return ['id']
    }

}

module.exports = Service
