<template>
  <form action="" class="w-25 d-grid gap-3">
    <div>
        <input class="form-control" type="eamil" name="email" placeholder="Email" v-model="email">
    </div>
    <div>
        <input class="form-control" type="password" name="password" placeholder="Passwor" v-model="password">
    </div>
    <div>
        <button @click.prevent="login" type="submit" class="btn btn-primary">Log in</button>
    </div>
  </form>
</template>

<script>
export default {
    name: 'Login',

    data() {
        return {
            email: '',
            password: '',
        }
    },

    methods: {
        login() {
            this.axios.post('/api/auth/login', {
                email: this.email, 
                password: this.password,
            })
            .then(res => {
                localStorage.setItem('access_token', res.data.access_token)

                if (res.data.id === 1) {
                    localStorage.setItem('admin', 'true')
                } else {
                    localStorage.setItem('admin', '')
                }

                window.location.reload()
                this.$router.push('me')
            })
        }
    }
}
</script>

<style>

</style>