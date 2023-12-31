import * as VueRouter from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import('../views/Main.vue')
  },
  {
    path: '/categories',
    name: 'category.index',
    component: () => import('../views/category/Index.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/auth/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/auth/Register.vue')
  },
  {
    path: '/me',
    name: 'me',
    component: () => import('../views/auth/Me.vue')
  }, 
  {
    path: '/post/posts-controller',
    name: 'post.index',
    component: () => import('../views/post/Index.vue')
  },
  {
    path: '/post/get-all',
    name: 'post.get-all',
    component: () => import('../views/post/GetAll.vue')
  },
  {
    path: '/post/get-by-title/:title',
    name: 'post.get-by-title',
    component: () => import('../views/post/GetByTitle.vue')
  },
  {
    path: '/post/get-by-id/:id',
    name: 'post.get-by-id',
    component: () => import('../views/post/GetById.vue')
  },
  {
    path: '/post/create',
    name: 'post.create',
    component: () => import('../views/post/Create.vue')
  },
  {
    path: '/post/update/:id',
    name: 'post.update',
    component: () => import('../views/post/Update.vue')
  },
  {
    path: '/category/update/:id',
    name: 'category.update',
    component: () => import('../views/category/Edit.vue')
  },
  {
    path: '/category/create',
    name: 'category.create',
    component: () => import('../views/category/Create.vue')
  },
  {
    path: '/product',
    name: 'product.index',
    component: () => import('../views/product/Index.vue')
  },
  {
    path: '/product/create',
    name: 'product.create',
    component: () => import('../views/product/Create.vue')
  },
  {
    path: '/product/update/:id',
    name: 'product.update',
    component: () => import('../views/product/Update.vue')
  },
  {
    path: '/product/ByCategory/:id',
    name: 'product.category',
    component: () => import('../views/product/ByCategory.vue')
  },
  {
    path: '/order/create/:id',
    name: 'order.create',
    component: () => import('../views/order/Create.vue')
  },
  {
    path: '/order/',
    name: 'order.index',
    component: () => import('../views/order/Index.vue')
  },
  {
    path: '/roles',
    name: 'role.index',
    component: () => import('../views/roles/Index.vue')
  },
  {
    path: '/role/create',
    name: 'role.create',
    component: () => import('../views/roles/Create.vue')
  },
  {
    path: '/role/show/:name',
    name: 'role.show',
    component: () => import('../views/roles/Show.vue')
  },
];

const route =  VueRouter.createRouter({
    mode: 'history',
    history: VueRouter.createWebHistory('/'),
    routes,
})


route.beforeEach((to, from, next) => {
    const accessToken = localStorage.getItem('access_token')

    if (!accessToken) {
        if (to.name === 'login' || to.name === 'register') {
            return next()
        } else {
            return next({
                name: 'login'
            })
        }
    }

    if (to.name === 'login' || to.name === 'register' && accessToken) {
        return next({
            name: 'me'
        })
    }

    next()
})

export default route