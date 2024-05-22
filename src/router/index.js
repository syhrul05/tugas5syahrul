import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from 'layouts/MainLayout.vue'
import HomePage from 'pages/HomePage.vue'
import ProductPage from 'pages/ProductPage.vue'
import ContactPage from 'pages/ContactPage.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', component: HomePage },
      { path: 'produk', component: ProductPage },
      { path: 'kontak', component: ContactPage }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
