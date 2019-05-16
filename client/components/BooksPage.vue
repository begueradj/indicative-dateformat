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
          label="Book name"
        />
      </v-flex>
      <v-flex
        xs12
        sm5
      >
        <v-text-field
          label="Date time"
        />
      </v-flex>
      <v-flex
        xs12
        sm2
      >
        <v-btn>
          Ok
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'BooksPage'
}
</script>
