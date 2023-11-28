<template>
  <h3>Create product</h3>
  <form action="" class="w-25 d-grid gap-3">
    <input type="text" class="form-control" placeholder="name" v-model="name">
    <input type="text" class="form-control" placeholder="quantity" v-model="quantity">
    <input type="number" class="form-control" placeholder="Category_id" v-model="category_id">
    <input type="number" class="form-control" placeholder="Price" v-model="price">
    <button @click.prevent="storeProduct" type="submit" class="btn btn-primary">Store</button>
  </form>
</template>

<script>
export default {
    name: 'Create',

    data() {
        return {
            name: '',
            quantity: null,
            price: null,
            category_id: null,
        }
    },

    methods: {
        storeProduct() {
            this.axios.post('/api/products', {
                name: this.name, 
                quantity: this.quantity,
                price: this.price,
                category_id: this.category_id
            })
                .then(res => {
                    this.$router.push({name: 'product.index'})
                })
        }
    }
}
</script>

<style>

</style>