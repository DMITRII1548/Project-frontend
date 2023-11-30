<template>
    <h3>Update post</h3>
    <form action="" class="w-25 d-grid gap-3">
      <input type="text" class="form-control" placeholder="Title" v-model="data.title">
      <input type="text" class="form-control" placeholder="body" v-model="data.body">
      <input type="number" class="form-control" placeholder="Reactions" v-model="data.reactions">
      <button @click.prevent="$store.dispatch('updatePost', data)" type="submit" class="btn btn-primary">Update</button>
    </form>
  </template>
  
  <script>
  import API from './../../api'
  
  export default {
    name: 'Update',

    mounted() {
        this.$store.dispatch('getMe')

        this.$store.dispatch('getPost', this.$route.params.id)
    },

    computed: {
      user() {
          return this.$store.getters.user
      },

      data() {
        return this.$store.getters.post
      }
    }
  }
  </script>
  
  <style>
  
  </style>