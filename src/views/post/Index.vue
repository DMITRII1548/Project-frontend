<template>
    <table class="table mt-3">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Title</th>
        <th scope="col">Description</th>
        <th scope="col">Body</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="post in posts">
        <th scope="row">{{ post['id'] }}</th>
        <td>{{ post['title'] }}</td>
        <td>{{ post['description'] }}</td>
        <td>{{ post['body'] }}</td>
      </tr>
    </tbody>
  </table>
  <div class="flex mt-4" v-if="isAdmin">
    <router-link to="/post/get-all" class="btn btn-primary">Get All</router-link>
  </div>
</template>

<script>
import API from './../../api'

export default {
    name: 'Index',

    mounted() {
        this.$store.dispatch('getPosts')
    },

    computed: {
      isAdmin() {
        return localStorage.getItem('admin')
      },

      posts() {
          return this.$store.getters.posts
      }
    }
}
</script>

<style>

</style>