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
        <th>Buy</th>
        <th v-if="isAdmin">Edit</th>
        <th v-if="isAdmin">Delete</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in products">
        <th scope="row">{{ product['id'] }}</th>
        <td>{{ product['name'] }}</td>
        <td>{{ product['quantity'] }}</td>
        <td>{{ product['price'] }}</td>
        <td><router-link :to="`/order/create/${product.id}`" class="btn btn-primary">Purchase</router-link></td>
        <td v-if="isAdmin"><router-link :to="`/product/update/${product.id}`" class="btn btn-primary">Edit</router-link></td>
        <td v-if="isAdmin"><button @click.prevent="$store.dispatch('deleteProduct', product.id)" class="btn btn-danger">Delete</button></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import API from './../../api'

export default {
    name: 'Index',

    data() {
        return {
            products: []
        }
    },

    mounted() {
        this.$store.dispatch('getProducts')
    },

    computed: {
        isAdmin() {
          return localStorage.getItem('admin')
        },

        products() {
          return this.$store.getters.products
        }
      }
}
</script>

<style>

</style>