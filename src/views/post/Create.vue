<template>
  <h3>Create post</h3>
  <form action="" class="w-25 d-grid gap-3">
    <input type="text" class="form-control" placeholder="Title" v-model="data.title">
    <input type="text" class="form-control" placeholder="body" v-model="data.body">
    <input type="number" class="form-control" placeholder="Reactions" v-model="data.reactions">
    <button @click.prevent="$store.dispatch('storePost', data)" type="submit" class="btn btn-primary">Store</button>
  </form>
</template>

<script>
import API from './../../api'

export default {
    name: 'Create',

    data() {
        return {
            data: {}
        }
    },

    mounted() {
        this.$store.dispatch('getMe')
        this.data.user = this.user
    },

    computed: {
      user() {
          return this.$store.getters.user
      }
    }
}
</script>

<style>

</style>