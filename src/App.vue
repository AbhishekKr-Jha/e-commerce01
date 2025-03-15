
<script> 
import Header from './components/Header.vue'
import Home from './views/home/Home.vue'

export default{
  name:'App',
components:{
  Header,
  Home
}
}

</script>


<template>
  <Header />
  <div class="w-full ">
    <!-- <div style="background-color: red;" class="w-full">bg</div> -->
   <Home/>
    <!-- <router-view /> -->
  </div>
</template>
