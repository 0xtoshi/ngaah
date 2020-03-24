'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ApiSchema extends Schema {
  up () {
    this.create('apis', (table) => {
      table.increments()
      table.text('apiKey')
      table.string('nama', 40)
      table.string('ip_whitelist', 40).nullable() 
      table.integer('user_id').unsigned().references('id').inTable('members')
      table.timestamps()
    })
  }

  down () {
    this.drop('apis')
  }
}

module.exports = ApiSchema
