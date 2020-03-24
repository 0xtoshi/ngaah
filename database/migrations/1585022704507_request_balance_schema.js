'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RequestBalanceSchema extends Schema {
  up () {
    this.create('request_balances', (table) => {
      table.increments()
      table.bigInteger('kode')
      table.integer('user_id').unsigned().references('id').inTable('members')
      table.bigInteger('quantity')
      table.string('method',50)
      table.enum('status',['Pending','Success'])
      table.date('last_update')
      table.timestamps()
    })
  }

  down () {
    this.drop('request_balances')
  }
}

module.exports = RequestBalanceSchema
