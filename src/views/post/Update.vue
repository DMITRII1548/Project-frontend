<template>
    <h3>Update post</h3>
    <form action="" class="w-25 d-grid gap-3">
      <input type="text" class="form-control" placeholder="Title" v-model="title">
      <input type="text" class="form-control" placeholder="body" v-model="body">
      <input type="number" class="form-control" placeholder="Reactions" v-model="reactions">
      <button @click.prevent="updatePost" type="submit" class="btn btn-primary">Update</button>
    </form>
    <p>Status: {{ status }}</p>
  </template>
  
  <script>
  import API from './../../api'
  
  export default {
      name: 'Create',
  
      data() {
          return {
              title: '',
              user_id: null,
              body: '',
              reactions: null,
              tags: '',
              user: [],
              status: ''
          }
      },
  
      mounted() {
          this.getMe()
          this.getPost()
      },
  
      methods: {
          updatePost() {
              this.axios.put(`/api/post/post-update/${this.$route.params.id}`, {
                  title: this.title,
                  userId: this.user.id,
                  body: this.body,
                  reactions: this.reactions,
                  tags: ["Nurkhan", "Abylai", "Islambek"]
              })
                  .then(res => {
                      this.status = res.data
                  })
          },

          getPost() {
            this.axios.get(`/api/post/post/${this.$route.params.id}`)
                .then(res => {
                    let post = res.data

                    this.title = post.title
                    this.body = post.body
                    this.reactions = post.reactions
                })
          },
  
          getMe() {
              API.post('/api/auth/me')
                  .then(res => {
                      this.user = res.data
                  })
          }
      }
  }
  </script>
  
  <style>
  
  </style>