<template>
    <table class="table mt-3">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">name</th>
        <th scope="col">Quantity</th>
        <th scope="col">Price</th>
        <th>Buy</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in products">
        <th scope="row">{{ product['id'] }}</th>
        <td>{{ product['name'] }}</td>
        <td>{{ product['quantity'] }}</td>
        <td>{{ product['price'] }}</td>
        <td><router-link :to="`/order/create/${product.id}`" class="btn btn-primary">Purchase</router-link></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
    name: 'Index',

    mounted() {
        this.$store.dispatch('getProductsByCategory', this.$route.params.id)
    },


    computed: {
      products() {
          return this.$store.getters.products
      }
    }
}
</script>

<style>

</style>