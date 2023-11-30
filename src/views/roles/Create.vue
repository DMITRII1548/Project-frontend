<template>
  <h3>Create role</h3>
  <form action="" class="w-25 d-grid gap-3">
    <input type="text" class="form-control" placeholder="name" v-model="name">
    <button @click.prevent="$store.dispatch('storeRole', name)" type="submit" class="btn btn-primary">Store</button>
  </form>
</template>

<script>
import API from './../../api'
export default {
    name: 'Create',

    data() {
        return {
            name: ''
        }
    },
}
</script>

<style>

</style>