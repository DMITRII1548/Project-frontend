<template>
    <table class="table mt-3">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Product name</th>
        <th>Product price</th>
        <th scope="col">Client first name </th>
        <th scope="col">Client last name</th>
        <th>Date buy</th>
        <th>Address</th>
        <th v-if="isAdmin">Delete</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="order in orders">
        <th scope="row">{{ order['id'] }}</th>
        <th scope="row">{{ order.product.name }}</th>
        <th scope="row">{{ order.product.price }}</th>
        <th scope="row">{{ order.client.first_name_doc }}</th>
        <th scope="row">{{ order.client.last_name_doc }}</th>
        <th scope="row">{{ order.dateBuy}}</th>
        <th scope="row">{{ order.client.address }}</th>
        <td v-if="isAdmin"><button @click.prevent="$store.dispatch('deleteOrder', order.id)" class="btn btn-danger">Delete</button></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import API from './../../api';

export default {
    name: 'Index',

    mounted() {
      this.$store.dispatch('getOrders')
    },

    computed: {
        isAdmin() {
          return localStorage.getItem('admin')
        },

        orders() {
            return this.$store.getters.orders
        }
    }
}
</script>

<style>

</style>