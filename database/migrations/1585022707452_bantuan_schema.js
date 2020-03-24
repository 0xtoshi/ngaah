'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BantuanSchema extends Schema {
  up () {
    this.create('bantuans', (table) => {
      table.increments()
      table.text('kontak')
      table.text('value')
      table.timestamps()
    })
  }

  down () {
    this.drop('bantuans')
  }
}

module.exports = BantuanSchema
