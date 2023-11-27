<template>
  <h4>Get post by id</h4>
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
            this.axios.get(`/api/post/post/${this.$route.params.id}`)
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