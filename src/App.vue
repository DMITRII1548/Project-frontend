<template>
  <div class="container mt-5">
    <header class="d-flex gap-3">
      <RouterLink to="/" class="btn btn-primary">Home</RouterLink>
      <RouterLink to="/posts" class="btn btn-primary">Posts</RouterLink>
      <RouterLink to="/post/posts-controller" class="btn btn-primary">Post</RouterLink>
      <RouterLink to="/categories" class="btn btn-primary">Categories</RouterLink>
      <RouterLink v-if="!token" to="/login" class="btn btn-primary">Sing in</RouterLink>
      <RouterLink v-if="!token" to="/register" class="btn btn-primary">Sing up</RouterLink>
      <RouterLink v-if="token" to="/me" class="btn btn-primary">Me</RouterLink>
      <button v-if="token" @click="logout" class="btn btn-primary">Logout</button>
    </header>
    <main class="mt-5">
      <RouterView />
    </main>
  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import API from './api.js'

export default {
  name: 'App', 

  data() {
    return {
      token: ''
    }
  },

  mounted() {
    this.getAccessToken()
  },

  updated() {
    this.getAccessToken()
  },
  
  methods: {
    logout() {
      API.post('/api/auth/logout')
        .then(res => {
          localStorage.setItem('access_token', '')
          this.token = ''
          this.$router.push('login')
        })
    },

    getAccessToken() {
      this.token = localStorage.getItem('access_token')
    }
  },
}
</script>

<style></style>
