'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Bantuan extends Model {

    static get table(){
        return 'bantuans'
    }

    static get hidden () {
        return ['id']
    }


}

module.exports = Bantuan
