<template>
    <h4>Get post by title</h4>
    <div>
      <p>Id: {{ post.id }}</p>
      <p>Title: {{ post.title }}</p>
      <p>Body: {{ post.body }}</p>
    </div>
  </template>
  
  <script>
  export default {
      name: 'GetByTitle',

  
      mounted() {
          this.$store.dispatch('getPostByTitle', this.$route.params.title)
      },
  
      computed: {
        post() {
            return this.$store.getters.post
        }
      }
  }
  </script>
  
  <style>
  
  </style>