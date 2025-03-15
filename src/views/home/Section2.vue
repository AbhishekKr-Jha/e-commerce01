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
      },
    };
  },
};
</script>


<template>
   
   <div style="height: 250px;width:95%" class=" w-max-900 mx-auto rounded-lg bg-red overflow-hidden">

    <Swiper v-bind="swiperOptions" class=" h-full w-full "> 
        <SwiperSlide class=" slide ">
      Slide 1 
    </SwiperSlide>
    <SwiperSlide class="slide">
 slide 2
    </SwiperSlide>
    <SwiperSlide class="slide">
      Slide 3
    </SwiperSlide>
  </Swiper>

   </div>

   <!-- <div style=" " class="w-full bg-green flex jutsify-center items-center">

    <div class="rounded-lg bg-blue">

    </div>

   </div> -->

   <div class="w-full flex flex-col items-center">
    <h2  class="text-center">Explore Collections</h2>
<RotatingCrads />
<button style="margin-bottom: -60px;width: 150px;
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