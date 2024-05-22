<template>
  <q-layout view="hHh lpR fFf">
    <q-drawer show-if-above bordered class="bg-grey-2" width="250">
      <!-- Profile Section -->
      <q-card flat bordered class="q-mb-md">
        <q-card-section class="text-center">
          <q-avatar size="100px">
            <img src="https://cdn.pixabay.com/photo/2020/10/18/17/19/man-5665527_1280.png">
          </q-avatar>
          <div class="text-h6 q-mt-sm">Syahrul Ramadhan</div>
          <div class="text-subtitle2">Mahasiswa</div>
          <div class="text-caption">
            Project halaman landing page sebuah Toko Online, didalamnya terdapat (Navbar, Carousel, Card, dan Footer). Adalah tugas yang akan saya tampilkan disini
          </div>
        </q-card-section>
        <q-separator />
        <q-card-actions>
          <q-btn flat label="PROFIL" class="full-width" />
          <q-btn flat label="PENGATURAN" class="full-width" />
        </q-card-actions>
      </q-card>
    </q-drawer>

    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn flat dense round icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title>
          Toko Tembakau Texas
        </q-toolbar-title>
        <q-btn dense round flat icon="search" />
        <q-btn dense round flat icon="notifications" />
        <q-btn dense round flat icon="account_circle" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <!-- Carousel -->
      <q-carousel
        v-model="slide"
        animated
        infinite
        control-color="white"
        arrows
        swipeable
        class="q-mt-md"
      >
        <q-carousel-slide
          v-for="(image, index) in carouselImages"
          :key="index"
          :name="index"
          :img-src="image.src"
        >
          <div class="absolute-bottom text-h6 text-white q-mb-lg q-ml-lg">
            {{ image.caption }}
          </div>
        </q-carousel-slide>
      </q-carousel>

      <!-- Product Cards -->
      <div class="row q-col-gutter-md q-mt-lg q-pa-md">
        <q-card
          v-for="product in products"
          :key="product.id"
          class="col-12 col-sm-6 col-md-4"
        >
          <q-img :src="product.img" ratio="16/9" />
          <q-card-section>
            <div class="text-h6 q-mt-sm">{{ product.name }}</div>
            <div>{{ product.description }}</div>
            <div class="text-subtitle1 text-bold">{{ product.price }}</div>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn flat label="Beli" color="primary" />
          </q-card-actions>
        </q-card>
      </div>
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          <div>Temukan Kenyamanan mu disini</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      slide: 1,
      carouselImages: [
        {
          src: 'https://bolehmerokok.com/wp-content/uploads/2017/01/Penyelamatan-dan-Pelestariaan-Kretek-Indonesia.jpg',
          caption: 'Cigarettes'
        },
        {
          src: 'https://phinemo.com/wp-content/uploads/2018/03/18096526_862710827213228_791911911192002560_n.jpg',
          caption: 'Chill'
        },
        {
          src: 'https://tse1.mm.bing.net/th?id=OIP.hnQEAnaCZGo-ykdXC9Z6tQHaDt&pid=Api&P=0&h=220',
          caption: 'Space'
        }
      ],
      products: [
        {
          id: 1,
          name: 'Tembakau Gayo Hijau',
          description: 'Tembakau ini berasal dari daerah Nanggroe Aceh Darusalam. Jika melihat dari fisik, tembakau ini berwarna hijau sesuai dengan namanya. Cita rasa tembakau ditentukan oleh rajangan. Tapi di jenis tembakau ini memiliki rajangan yang halus dan membuat rasanya pun menjadi ringan.',
          price: 'Rp. 48.000,00',
          img: 'https://via.placeholder.com/300?text=Tembakau+Gayo+Hijau'
        },
        {
          id: 2,
          name: 'Tembakau Temanggung',
          description: 'Tembakau ini berasal dari Temanggung yang terletak di kaki gunung Sumbing. Banyak jenis dari tembakau temanggung ini, namun sangat rentan dengan penyakit seperti jamuran. Dari jenis tersebut masih dibagi dengan beberapa kelas. Semakin tinggi kelasnya semakin keras juga aromanya',
          price: 'Rp. 40.000,00',
          img: 'https://via.placeholder.com/300?text=Tembakau+Temanggung'
        },
        {
          id: 3,
          name: 'Tembakau Darmawangi',
          description: 'Tembakau ini berasal dari Kabupaten Sumedang. Tembakau ini mempunyai aroma yang berbeda setelah diolah dan tekstur dari daunnya yang tidak begitu keras ketika dipotong.',
          price: 'Rp. 25.000,00',
          img: 'https://via.placeholder.com/300?text=Tembakau+Darmawangi'
        }
      ]
    };
  },
  methods: {
    toggleLeftDrawer() {
      this.$q.drawer.toggle();
    }
  }
};
</script>

<style scoped>
.q-carousel-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 2em;
}
</style>
