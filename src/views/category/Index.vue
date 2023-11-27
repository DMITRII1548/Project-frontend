<template>
    <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Title</th>
        <th scope="col">Description</th>
        <th scope="col">Body</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="catorory in categories">
        <th scope="row">{{ category['id'] }}</th>
      </tr>
    </tbody>
  </table>
  </template>
  
  <script>
  export default {
      name: 'Index',
  
      data() {
          return {
              categories: []
          }
      },
  
      mounted() {
          this.getCategories()
      },
  
      methods: {
          getCategories() {
              this.axios.get('/api/category/categories')
                  .then(res => {
                    this.categories = res
                    console.log(this.categories)
                  })
          }
      }
  }
  </script>
  
  <style>
  
  </style>