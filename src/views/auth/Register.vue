<template>
    <form action="" class="d-grid gap-3 w-25">
        <div>
            <input class="form-control" type="text" name="name" placeholder="Name" v-model="name">
        </div>
      <div>
          <input class="form-control" type="email" name="email" placeholder="Email" v-model="email">
      </div>
      <div>
          <input class="form-control" type="password" name="password" placeholder="Password" v-model="password">
      </div>
      <div>
          <input class="form-control" type="password" name="password_confirmation" placeholder="Confirm password" v-model="password_confirmation">
      </div>
      <div>
          <button @click.prevent="register" type="submit" class="btn btn-primary">Register</button>
      </div>
    </form>
  </template>
  
  <script>
  export default {
      name: 'Login',
  
      data() {
          return {
              name: '',
              email: '',
              password: '',
              password_confirmation: ''
          }
      },
  
      methods: {
          register() {
            this.axios.get('/sanctum/csrf-cookie').then(response => {
              this.axios.post('/api/register', {
                  name: this.name,
                  email: this.email, 
                  password: this.password,
                  password_confirmation: this.password_confirmation
              })
              .then(res => {
                  console.log(res.data)
              })               
            });
          }
      }
  }
  </script>
  
  <style>
  
  </style>