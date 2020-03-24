'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BalanceHistorySchema extends Schema {
  up () {
    this.create('balance_histories', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('members')
      table.enum('action',['Cut Balance','Refund Balance'])
      table.bigInteger('quantity')
      table.text('msg')
      table.timestamps()
    })
  }

  down () {
    this.drop('balance_histories')
  }
}

module.exports = BalanceHistorySchema
