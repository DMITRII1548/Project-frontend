<template>
    <div class="d-flex">
        <router-link to="/product/create" class="btn btn-primary">Add</router-link>
    </div>
    <table class="table mt-3">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">name</th>
        <th scope="col">Quantity</th>
        <th scope="col">Price</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in products">
        <th scope="row">{{ product['id'] }}</th>
        <td>{{ product['name'] }}</td>
        <td>{{ product['quantity'] }}</td>
        <td>{{ product['price'] }}</td>
        <td><router-link :to="`/product/update/${product.id}`" class="btn btn-primary">Edit</router-link></td>
        <td><button @click.prevent="deleteProduct(product.id)" class="btn btn-danger">Delete</button></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
    name: 'Index',

    data() {
        return {
            products: []
        }
    },

    mounted() {
        this.getProducts()
    },

    methods: {
        getProducts() {
            this.axios.get('/api/products')
                .then(res => {
                    this.products = res.data
                })
        },

        deleteProduct(id) {
            this.axios.delete(`/api/products/${id}`)
                .then(res => {
                    this.getProducts()
                })
        }
    }
}
</script>

<style>

</style>