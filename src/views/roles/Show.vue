<template>
    <p>Id: {{ role.id }}</p>
    <p>Name: {{ role.name }}</p>
    <p>Guard name: {{ role.guard_name }}</p>
</template>

<script>
import API from './../../api'
export default {
    name: 'Show',

    mounted() {
        this.$store.dispatch('getRole', this.$route.params.name)
    },

    computed: {
        role() {
            return this.$store.getters.role
        }    
    }
}
</script>

<style>

</style>