<template>
    <h3>Edit product</h3>
    <form action="" class="w-25 d-grid gap-3">
      <input type="text" class="form-control" placeholder="name" v-model="name">
      <input type="text" class="form-control" placeholder="quantity" v-model="quantity">
      <input type="number" class="form-control" placeholder="Category_id" v-model="category_id">
      <input type="number" class="form-control" placeholder="Price" v-model="price">
      <button @click.prevent="updateProduct" type="submit" class="btn btn-primary">Update</button>
    </form>
  </template>
  
  <script>
  export default {
      name: 'Update',
  
      data() {
          return {
              name: '',
              quantity: null,
              price: null,
              category_id: null,
          }
      },

      mounted() {
        this.getProduct()
      },

      methods: {
          updateProduct() {
              this.axios.patch(`/api/products/${this.$route.params.id}`, {
                  name: this.name, 
                  quantity: this.quantity,
                  price: this.price,
                  category_id: this.category_id
              })
                  .then(res => {
                      this.$router.push({name: 'product.index'})
                  })
          },

          getProduct() {
            this.axios.get(`/api/products/${this.$route.params.id}`)
                .then(res => {
                    this.name = res.data.name
                    this.quantity = res.data.quantity
                    this.price = res.data.price
                    this.category_id = res.data.category_id
                })
          }
      }
  }
  </script>
  
  <style>
  
  </style>