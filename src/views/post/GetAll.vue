<template>
    <div class="flex">
        <router-link to="/post/create" class="btn btn-primary">Add post</router-link>
    </div>
    <table class="table mt-3">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Title</th>
        <th scope="col">Body</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="post in posts">
        <th scope="row"><router-link :to="`/post/get-by-id/${post.id}`">{{ post['id'] }}</router-link></th>
        <td><router-link :to="`/post/get-by-title/${post.title}`">{{ post['title'] }}</router-link></td>
        <td>{{ post['body'] }}</td>
      </tr>
    </tbody>
  </table>
  <div class="flex">
    <button @click="createPost" class="btn btn-primary">Create Post</button>
    <p>Result: {{ statusOfCreatedPost }}</p>
  </div>
</template>

<script>
import API from './../../api'

export default {
    name: 'GetAll',

    data() {
        return {
            posts: '',
            statusOfCreatedPost: ''
        }
    },

    mounted() {
        this.getAll()
    },

    methods: {
        getAll() {
            API.get('/api/post/post-all')
                .then(res => {
                    this.posts = res.data
                })
        },

        createPost() {
            this.axios.post('/api/post/post-create')
                .then(res => {
                    this.statusOfCreatedPost = res.data
                })
        }
    }
}
</script>

<style>

</style>