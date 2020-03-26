'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrderHistorySchema extends Schema {
  up () {
    this.create('order_histories', (table) => {
      table.increments()
      table.string('order_id',80)
      table.text('sp_order')
      table.string('provider',100)
      table.integer('buyer_id').unsigned().references('id').inTable('members')
      table.text('service')
      table.text('link')
      table.bigInteger('quantity')
      table.bigInteger('price')
      table.bigInteger('start_count').nullable()
      table.bigInteger('end').nullable()
      table.enum('status',['Pending','Processing','In Progress','Partial','Completed','Cancelled'])
      table.integer('refund').nullable()
      table.string('datetime', 30)
      table.timestamps()
    })
  }

  down () {
    this.drop('order_histories')
  }
}

module.exports = OrderHistorySchema
