<template>
  <table class="table">
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
</template>

<script>
export default {
    name: 'Index',

    data() {
        return {
            posts: []
        }
    },

    mounted() {
        this.getPosts()
    },

    methods: {
        getPosts() {
            this.axios.get('/api/posts')
                .then(res => {
                    this.posts = res.data.posts
                })
        }
    }
}
</script>

<style>

</style>