<template>
  <div>
    <h3>Your account</h3>
    <p>Name: {{ name }}</p>
    <p>Email: {{ email }}</p>
  </div>
</template>

<script>
export default {
    name: 'Me',

    data() {
        return {
            name: '',
            email: ''
        }
    },

    mounted() {
        this.getMe()
    },

    methods: {
        getMe() {
            this.axios.get('/api/user', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })    
                .then(res => {
                    console.log(res.data)
                })
        }
    }
}
</script>

<style>

</style>