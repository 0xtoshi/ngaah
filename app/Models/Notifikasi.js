'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Notifikasi extends Model {


    static get table(){
        return 'notifikasis'
    }

    static get hidden () {
        return ['id']
    }

}

module.exports = Notifikasi
