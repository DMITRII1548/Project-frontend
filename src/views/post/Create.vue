<template>
  <h3>Create post</h3>
  <form action="" class="w-25 d-grid gap-3">
    <input type="text" class="form-control" placeholder="Title" v-model="title">
    <input type="text" class="form-control" placeholder="body" v-model="body">
    <input type="number" class="form-control" placeholder="Reactions" v-model="reactions">
    <button @click.prevent="storePost" type="submit" class="btn btn-primary">Store</button>
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
    },

    methods: {
        storePost() {
            this.axios.post('/api/post/post-store', {
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