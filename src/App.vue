<template>
  <div class="container mt-5">
    <header class="d-flex gap-3">
      <RouterLink to="/" class="btn btn-primary">Home</RouterLink>
      <RouterLink to="/posts" class="btn btn-primary">Posts</RouterLink>
      <RouterLink to="/categories" class="btn btn-primary">Categories</RouterLink>
      <RouterLink to="/login" class="btn btn-primary">Sing in</RouterLink>
      <RouterLink to="/register" class="btn btn-primary">Sing up</RouterLink>
    </header>
    <main class="mt-5">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<style></style>
