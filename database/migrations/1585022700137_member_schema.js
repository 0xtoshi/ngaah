'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MemberSchema extends Schema {
  up () {
    this.create('members', (table) => {
      table.increments()
      table.text('username')
      table.text('password')
      table.text('email')
      table.bigInteger('balance').nullable()
      table.enum('level',['Admin','Reseller','Member'])
      table.text('register')
      table.bigInteger('balance_used').nullable()
      table.text('kode').nullable()
      table.enum('status',['Aktif','Tidak Aktif'])
      table.text('last_login').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('members')
  }
}

module.exports = MemberSchema
