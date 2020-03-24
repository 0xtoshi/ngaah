'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PulsaSchema extends Schema {
  up () {
    this.create('pulsas', (table) => {
      table.increments()
      table.string('category',30)
      table.text('service')
      table.bigInteger('rate')
      table.string('provider',30)
      table.integer('provider_id')
      table.enum('status',['Tersedia','Tidak Tersedia'])
      table.date('last_update')
      table.timestamps()
    })
  }

  down () {
    this.drop('pulsas')
  }
}

module.exports = PulsaSchema
