<template>
    <h4>Create category</h4>
    <form action="" class="d-grid gap-3 mt-3 w-25">
      <input type="text" class="form-control" v-model="name">
      <button @click.prevent="$store.dispatch('storeCategory', { name: name })" class="btn btn-primary">Store</button>
    </form>
  </template>
  
  <script>
  import API from './../../api'
  export default {
      name: 'Edit',
  
      data() {
          return {
              name: '',
          }
      },
  }
  </script>
  
  <style>
  
  </style>