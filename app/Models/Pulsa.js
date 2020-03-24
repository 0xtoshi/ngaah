'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Pulsa extends Model {


    static get table(){
        return 'pulsas'
    }

    static get hidden () {
        return ['id']
    }

}

module.exports = Pulsa
