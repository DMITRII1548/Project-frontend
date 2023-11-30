<template>
  <h4>Get post by id</h4>
  <div>
    <p>Id: {{ post.id }}</p>
    <p>Title: {{ post.title }}</p>
    <p>Body: {{ post.body }}</p>
  </div>
</template>

<script>
export default {
    name: 'GetById',

    mounted() {
        this.$store.dispatch('getPostById', this.$route.params.id)
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