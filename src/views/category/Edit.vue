<template>
  <h4>Update category</h4>
  <form action="" class="d-grid gap-3 mt-3 w-25">
    <input type="text" class="form-control" v-model="category.name">
    <button @click.prevent="$store.dispatch('updateCategory', { id: $route.params.id, name: category.name })" class="btn btn-primary">Update</button>
  </form>
</template>

<script>
import API from './../../api'

export default {
    name: 'Edit',

    data() {
        return {
            status: '',
        }
    },

    mounted() {
        this.$store.dispatch('getCategory', this.$route.params.id)
    },

    computed: {
        category() {
            return this.$store.getters.category
        }
      }
}
</script>

<style>

</style>