<template>
    <h4>Get post by title</h4>
    <div>
      <p>Id: {{ id }}</p>
      <p>Title: {{ title }}</p>
      <p>Body: {{ body }}</p>
    </div>
  </template>
  
  <script>
  export default {
      name: 'GetById',
  
      data() {
          return {
              id: null,
              title: '',
              body: ''
          }
      },
  
      mounted() {
          this.getPost()
      },
  
      methods: {
          getPost() {
              this.axios.get(`/api/post/post-by-title/${this.$route.params.title}`)
                  .then(res => {
                      this.id = res.data.id
                      this.title = res.data.title
                      this.body = res.data.body
                  })
          }
      }
  }
  </script>
  
  <style>
  
  </style>