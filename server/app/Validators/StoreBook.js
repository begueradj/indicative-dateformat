'use strict'

class StoreBook {
  get rules () {
    return {
      name: 'required',
      effective_datetime: 'required|date|dateFormat:YYYY-MM-DD HH:mm:ss'
    }
  }

  get messages() {
    return {
      'name.required': 'Fill the book name',
      'effective_datetime': 'Fill the effective datetime'
    }
  }

  async fails(errorMessages) {
    return this
      .ctx
      .response
      .status(403)
      .send(errorMessages)
  }
}

module.exports = StoreBook
