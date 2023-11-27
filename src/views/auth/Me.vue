<template>
  <div>
    <h3>Your account</h3>
    <p>Name: {{ name }}</p>
    <p>Email: {{ email }}</p>
  </div>
</template>

<script>
import API from './../../api.js'

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
            API.post('/api/auth/me', {}, {
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('access_token')}`
                }
            })
                .then(res => {
                    this.name = res.data.name
                    this.email = res.data.email
                })
        }
    }
}
</script>

<style>

</style>