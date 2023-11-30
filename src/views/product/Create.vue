<template>
  <h3>Create product</h3>
  <form action="" class="w-25 d-grid gap-3">
    <input type="text" class="form-control" placeholder="name" v-model="data.name">
    <input type="text" class="form-control" placeholder="quantity" v-model="data.quantity">
    <input type="number" class="form-control" placeholder="Category_id" v-model="data.category_id">
    <input type="number" class="form-control" placeholder="Price" v-model="data.price">
    <button @click.prevent="$store.dispatch('storeProduct', data)" type="submit" class="btn btn-primary">Store</button>
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
}
</script>

<style>

</style>