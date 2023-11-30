import { createStore } from 'vuex';
import category from './modules/category'
import order from './modules/order'
import post from './modules/post'
import product from './modules/product'
import role from './modules/role'
export default createStore({
    modules: {
        order,
        category,
        post,
        product,
        role
    }
})

