<template>
    <div class="d-flex">
        <router-link to="/role/create" class="btn btn-primary">Add</router-link>
    </div>
    <table class="table mt-3">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">name</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="role in roles">
        <th scope="row">{{ role['id'] }}</th>
        <td><router-link :to="`/role/show/${role['name']}`">{{ role['name'] }}</router-link></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import API from './../../api'

export default {
    name: 'Index',

    mounted() {
        this.$store.dispatch('getRoles')
    },

    computed: {
      roles() {
          return this.$store.getters.roles
      }      
    }

}
</script>

<style>

</style>