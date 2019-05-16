'use strict'

const Book = use('App/Models/Book')

class BookController {
  index() {
    return 'Book'
  }

  async store({ request, response }) {
    const data = request.post()
    const book = new Book()
    book.name = data.name
    book.effective_datetime = data.effective_datetime
    await book.save()
    
  }
}

module.exports = BookController
