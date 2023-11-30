<template>
    <div v-if="isAdmin" class="flex">
        <router-link to="/post/create" class="btn btn-primary">Add post</router-link>
    </div>
    <table class="table mt-3">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Title</th>
        <th scope="col">Body</th>
        <th v-if="isAdmin">Update</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="post in posts">
        <th scope="row"><router-link :to="`/post/get-by-id/${post.id}`">{{ post['id'] }}</router-link></th>
        <td><router-link :to="`/post/get-by-title/${post.title}`">{{ post['title'] }}</router-link></td>
        <td>{{ post['body'] }}</td>
        <td v-if="isAdmin"><router-link :to="`/post/update/${post.id}`">Update</router-link></td>
      </tr>
    </tbody>
  </table>
  <div class="flex" v-if="isAdmin">
    <button @click="$store.dispatch('createPost')" class="btn btn-primary">Create Post</button>
  </div>
</template>

<script>
import API from './../../api'

export default {
    name: 'GetAll',

    mounted() {
        this.$store.dispatch('getAll')
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