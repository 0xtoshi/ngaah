'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TwoFaSchema extends Schema {
  up () {
    this.create('two_fas', (table) => {
      table.increments()
      table.text('secret_key').nullable()
      table.integer('user_id').unsigned().references('id').inTable('members')
      table.enum('enable',['true','false'])
      table.date('last_update')
      table.timestamps()
    })
  }

  down () {
    this.drop('two_fas')
  }
}

module.exports = TwoFaSchema
