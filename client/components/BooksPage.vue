<template>
  <v-container
    grid-list-md
    text-xs-center
    fill-height
  >
    <v-layout
      row
      wrap
      align-center
    >
      <v-flex
        xs12
        sm5
      >
        <v-text-field
          v-model="name"
          label="Book name"
          box
        />
      </v-flex>
      <v-flex
        xs12
        sm5
      >
        <v-text-field
          v-model="effective_datetime"
          label="Effective datetime"
          box
        />
      </v-flex>
      <v-flex
        xs12
        sm2
      >
        <v-btn
          @click="submit"
        >
          Ok
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'BooksPage',
  data() {
    return {
      name: '',
      effective_datetime: null
    }
  },
  methods: {
    async submit() {
      const data = new FormData()
      data.set('name', this.name)
      data.set('effective_datetime', this.effective_datetime)
      const config = {
        headers: {
          'accept': 'application/json'
        }
      }
      try {
        await this.$axios.$post('/books', data, config)
      } catch (e) {
        console.log(e.response.data[0].message)
      }
    }
  }
}
</script>
