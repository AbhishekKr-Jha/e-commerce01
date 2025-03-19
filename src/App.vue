
<script> 
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Home from './views/home/Home.vue'
import Login from './views/Login.vue';
import ProductDetailsPage from './views/ProductDetailsPage.vue';
import ProductListingPage from './views/ProductListingPage.vue';
import ProfilePage from './views/ProfilePage.vue';

export default{
  name:'App',
components:{
  Header,
  Footer,
  Home,
  Login,
  ProductListingPage,
  ProductListingPage,
  ProfilePage,
}
}

</script>


<template>
  <Header />
  <div class="w-full mx-auto">
    <router-view />
  </div>
 <Footer />
</template>
