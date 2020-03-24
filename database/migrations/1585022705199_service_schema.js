'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ServiceSchema extends Schema {
  up () {
    this.create('services', (table) => {
      table.increments()
      table.enum('category',['IF','IL','IV','IAL','IAV','IO','TF','TL','TR','FP','FL','FO','YV','YLD','YS','SC','WEB','VN','GP','PT','PS','LK'])
      table.text('service')
      table.bigInteger('rate')
      table.bigInteger('min')
      table.bigInteger('max')
      table.text('provider')
      table.bigInteger('provider_id')
      table.enum('status',['Tersedia','Tidak Tersedia'])
      table.text('description')
      table.timestamps()
    })
  }

  down () {
    this.drop('services')
  }
}

module.exports = ServiceSchema
