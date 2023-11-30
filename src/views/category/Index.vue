<template>
  <div class="d-flex gap-3" v-if="isAdmin">
    <router-link class="btn btn-primary" to="/category/create">Add</router-link>
    <button @click.prevent="$store.dispatch('restoreCategory')" class="btn btn-success">Restore</button>
  </div>
    <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th>Name</th>
        <th v-if="isAdmin">Edit</th>
        <th v-if="isAdmin">Delete</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="category in categories">
        <th scope="row">{{ category.id }}</th>
        <th><router-link :to="`/product/ByCategory/${category.id}`">{{ category.name }}</router-link></th>
        <th v-if="isAdmin"><router-link class="btn btn-primary" :to="`/category/update/${category.id}`">Edit</router-link></th>
        <th v-if="isAdmin"><button  @click.prevent="$store.dispatch('deleteCategory', category.id)" class="btn btn-danger">Delete</button></th>
      </tr>
    </tbody>
  </table>
  </template>
  
  <script>
  import API from './../../api'
  export default {
      name: 'Index',
  
      mounted() {
          this.$store.dispatch('getCategories')
      },
  
      computed: {
        isAdmin() {
          return localStorage.getItem('admin')
        },

        categories() {
            return this.$store.getters.categories
        }
      }
  }
  </script>
  
  <style>
  
  </style>