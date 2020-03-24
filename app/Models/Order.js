'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Order extends Model {

    static get table(){
        return 'order_histories'
    }

    static get hidden () {
        return ['id']
    }

}

module.exports = Order
