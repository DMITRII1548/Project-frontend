<template>
  <h3>Create order</h3>
  <form action="" class="w-25 d-grid gap-3">
    <input type="text" class="form-control" placeholder="Your first name" v-model="data.first_name_doc">
    <input type="text" class="form-control" placeholder="Your last name" v-model="data.last_name_doc">
    <input type="tel" class="form-control" placeholder="Phone number" v-model="data.phone_number">
    <input type="text" class="form-control" placeholder="Address" v-model="data.address">
    <input type="datetime-local" class="form-control" placeholder="Date buy" v-model="data.dateBuy">
    <button @click.prevent="$store.dispatch('storeClient', data)" type="submit" class="btn btn-primary">Purchase</button>
  </form>
</template>

<script>
export default {
    name: 'Create',

    data() {
        return {
            data: {}
        }
    },

    mounted() {
        this.data.product_id = this.$route.params.id
    }


}
</script>

<style>

</style>