<template>
    <q-layout view="hHh lpR fFf">
      <!-- Navbar -->
      <Navbar />
  
      <!-- Page Container -->
      <q-page-container>
        <router-view />
      </q-page-container>
  
      <!-- Footer -->
      <Footer />
    </q-layout>
  </template>
  
  <script>
  import Navbar from 'components/Navbar.vue'
  import Footer from 'components/Footer.vue'
  
  export default {
    name: 'MainLayout',
    components: {
      Navbar,
      Footer
    }
  }
  </script>
  