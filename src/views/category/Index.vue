<template>
  <div class="d-flex gap-3">
    <router-link class="btn btn-primary" to="/category/create">Add</router-link>
    <button @click.prevent="restoreCategory" class="btn btn-success">Restore</button>
  </div>
    <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th>Name</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="category in categories">
        <th scope="row">{{ category.id }}</th>
        <th>{{ category.name }}</th>
        <th><router-link class="btn btn-primary" :to="`/category/update/${category.id}`">Edit</router-link></th>
        <th><button  @click.prevent="deleteCategory(category.id)" class="btn btn-danger">Delete</button></th>
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
                    this.categories = res.data
                  })
          },

          deleteCategory(id) {
            this.axios.delete(`/api/category/delete-Category/${id}`)
              .then(res => {
                if (res.data === 'successfully deleted') {
                  this.getCategories()
                }
              })
          },

          restoreCategory() {
            this.axios.post('/api/category/restore-Category')
              .then(res => {
                this.getCategories()
              })
          }
      }
  }
  </script>
  
  <style>
  
  </style>