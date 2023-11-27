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
  <div class="flex mt-4">
    <router-link v-if="user['id'] == 1" to="/post/get-all" class="btn btn-primary">Get All</router-link>
  </div>
</template>

<script>
import API from './../../api'

export default {
    name: 'Index',

    data() {
        return {
            posts: [],
            user: []
        }
    },

    mounted() {
        this.getPosts()

        if (localStorage.getItem('access_token')) {
            this.getMe()
        }
    },

    methods: {
        getPosts() {
            this.axios.get('/api/post/posts-controller')
                .then(res => {
                    this.posts = res.data
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