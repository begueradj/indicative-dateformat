'use strict'

const Book = use('App/Models/Book')

class BookController {
  index() {
    return 'Book'
  }

  store({ request, response }) {
    const data = request.post()
    console.log(data)
  }
}

module.exports = BookController
