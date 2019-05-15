'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BooksSchema extends Schema {
  up () {
    this.create('books', (table) => {
      table.increments()
      table
        .string('name', 30)
        .notNullable()
      table
        .datetime('effective_datetime')
        .notNullable()
    })
  }

  down () {
    this.drop('books')
  }
}

module.exports = BooksSchema
