<template>
  <h3 class="mt-5">{{ message }}</h3>
</template>

<script>
export default {
    name: 'Main',

    data() {
        return {
            message: '',
        }
    },

    mounted() {
        this.getMessage()
    },

    methods: {
        getMessage() {
            this.axios.get('/api/home')
                .then(res => {
                    this.message = res.data.message
                })
        }
    }
}
</script>

<style>

</style>