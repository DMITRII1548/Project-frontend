<template>
  <h4>Update category</h4>
  <form action="" class="d-grid gap-3 mt-3 w-25">
    <input type="text" class="form-control" v-model="name">
    <button @click.prevent="updateCategory" class="btn btn-primary">Update</button>
  </form>
  <div class="row mt-3">
    Status: {{ status }}
  </div>
</template>

<script>
export default {
    name: 'Edit',

    data() {
        return {
            name: '',
            status: '',
        }
    },

    mounted() {
        this.getCategory()
    },

    methods: {
        getCategory() {
            this.axios.get(`/api/category/${this.$route.params.id}`)
                .then(res => {
                    this.name = res.data.name
                })
        },

        updateCategory() {
            this.axios.put(`/api/category/update-Category/${this.$route.params.id}`, {
                name: this.name
            })
                .then(res => {
                    this.status = res.data
                })
        }
    }
}
</script>

<style>

</style>