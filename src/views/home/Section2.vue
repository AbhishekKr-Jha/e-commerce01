<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css"; // Core Swiper styles
import "swiper/css/navigation"; // Navigation styles
import "swiper/css/pagination"; // Pagination styles
import { Navigation, Pagination } from "swiper/modules";
import RotatingCrads from '../../components/RotationgCards.vue'

export default {
  components: {
    Swiper,
    SwiperSlide,
    RotatingCrads
  },
  data() {
    return {
      swiperOptions: {
        modules: [Navigation, Pagination],
        navigation: true,
        pagination: { clickable: true },
        loop: true,
        autoplay: { delay: 3000 },  
        arrows:false 
      },
    };
  },
};
</script>


<template>
   
   <div style="height: 250px;width:95%" class=" w-max-900 mx-auto rounded-lg border overflow-hidden">

    <Swiper v-bind="swiperOptions" class=" h-full w-full "> 
        <SwiperSlide class=" w-full h-full  ">
<div style="" class="relative w-full h-full flex  justify-center items-center slider1">
<div class="" >
  <img src="/slider_image1.png" width="98%" height="auto" class="object-fit-contain" />
  <img src="/sale1.png" width="30%" height="auto" style="max-width:150px"  class="absolute top-0 left-15 object-fit-contain" />
</div>
<!-- <img src="/discount1.png" width="70px" height="70px" style="top:10%;right:40%;" class="absolute "/> -->
<div class="">
  <button @click="$router.push({path:'/product-details',query:{id:14}})"  type="button" class="slider-button">Get it <i class="ri-arrow-right-line"></i></button>
</div>

<!-- <p style="top:25%;left:20%;font-size:40px;" class=" absolute  right-15 text-white">65% - <span class="text-2xl">OFF</span></p> -->
</div>   
 </SwiperSlide>
 <!-- <SwiperSlide class=" w-full h-full  ">
  <div style="" class="w-full h-full flex  justify-center items-center slider2">
<div style="max-width: 350px;" class="w-full relative h-full  " >
  <img src="/slider_image2.png" width="100%" height="100%" class="object-fit-contain " />
  <img src="/sale1.png" width="30%" height="auto"  class="absolute top-0 left-15 object-fit-contain" />

</div>
</div>     
 </SwiperSlide> -->

  </Swiper>

   </div>

   <!-- <div style=" " class="w-full bg-green flex jutsify-center items-center">

    <div class="rounded-lg bg-blue">

    </div>

   </div> -->

   <div class="w-full flex flex-col items-center">
    <h2  class="text-center">Explore Collections</h2>
<RotatingCrads />
<button        @click="$router.push({path:'/products',query:{category:'all'}})" style="margin-bottom: -60px;width: 150px;
    padding: 10px 0;" type="button"  class="rounded-lg pointer text-lg transition-animation buy-button" >Explore More</button>
   </div>
     
</template>


<style scoped>
.buy-button{
    width: 150px;
    padding: 10px 0;
    font-family: "Itim", cursive;
    outline: none;
    border:none;
    background-color: rgb(1,84,154);
    color:white;
}


.buy-button:hover{
  background: rgba(1,84,154,0.82);
  transform: scale(1.1);
  /* border-color: #01549A; */
}

</style>