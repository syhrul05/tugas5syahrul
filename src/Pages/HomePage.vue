<template>
    <q-page class="q-pa-md">
      <!-- Carousel -->
      <Carousel />
  
      <!-- Produk Cards -->
      <div class="row q-col-gutter-md q-mt-lg">
        <ProductCard 
          v-for="produk in produkList" 
          :key="produk.id" 
          :produk="produk"
          class="col-12 col-sm-6 col-md-4" 
        />
      </div>
    </q-page>
  </template>
  
  <script>
  import Carousel from 'components/Carousel.vue'
  import ProductCard from 'components/ProductCard.vue'
  
  export default {
    name: 'HomePage',
    components: {
      Carousel,
      ProductCard
    },
    data () {
      return {
        produkList: [
          { id: 1, name: 'Tembakau A', description: 'Deskripsi Tembakau A', price: 'Rp 50.000', img: 'https://placeimg.com/640/480/nature/1' },
          { id: 2, name: 'Tembakau B', description: 'Deskripsi Tembakau B', price: 'Rp 60.000', img: 'https://placeimg.com/640/480/nature/2' },
          { id: 3, name: 'Tembakau C', description: 'Deskripsi Tembakau C', price: 'Rp 70.000', img: 'https://placeimg.com/640/480/nature/3' },
        ]
      }
    }
  }
  </script>
  