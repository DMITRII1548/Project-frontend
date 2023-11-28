<template>
    <h4>Create category</h4>
    <form action="" class="d-grid gap-3 mt-3 w-25">
      <input type="text" class="form-control" v-model="name">
      <button @click.prevent="storeCategory" class="btn btn-primary">Store</button>
    </form>
    <div class="row mt-3">
      Status: {{ status }}
    </div>
  </template>
  
  <script>
  export default {
      name: 'Edit',
  
      data() {
          return {
              name: '',
              status: '',
          }
      },
  
      methods: {
          storeCategory() {
              this.axios.post(`/api/category/store-Category`, {
                  name: this.name
              })
                  .then(res => {
                      this.status = res.data
                  })
          }
      }
  }
  </script>
  
  <style>
  
  </style>