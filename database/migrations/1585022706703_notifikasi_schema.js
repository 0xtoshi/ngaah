'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class NotifikasiSchema extends Schema {
  up () {
    this.create('notifikasis', (table) => {
      table.increments()
      table.text('text')
      table.enum('level',['High','Medium','Low'])
      table.integer('active')
      table.timestamps()
    })
  }

  down () {
    this.drop('notifikasis')
  }
}

module.exports = NotifikasiSchema
