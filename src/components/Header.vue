

<script>
export default{
    name:'Header',
    default(){
        return{
            isHamBurgerOpen:false
        }
    }
}



</script>


<template>
    
    <header style="max-width: 1500px;" class="w-full bg-red-900 flex flex-col items-center justify-center mx-auto relative">
        <!-- <video style="z-index: -10;width: 100%;" autoplay loop muted playsinline class="absolute top-0 left-0  object-cover ">
    <source src="/video_asset.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video> -->

<div style="height: 500px;z-index: -10;padding-left: 20px " class="w-full absolute top-0 left-0 header-inner-container bg-red flex  items-center ">

<div class="">
<h4>   Elevate Your Experience </h4> <h1><span style="padding-left: 20px;">By  Seamless Shopping &</span> <br> Speedy Delivery </h1>
</div>

<div style="flex: 1;" class="bg-green w-full h-full flex relative overflow-hidden">
<div class="box1 absolute left-25 bottom-0 ">
<img src="/headerImage1.png"  width="100%" height="100%" style=""/>

<!-- <div style="z-index: 40;"  class="absolute top-25 right-0  flex justify-center items-center inner-box-1">
<img src="/headerImage2.png" class="object-fit-contain h-full w-full" />
</div> -->
</div>

</div>

</div>


<div style="padding: 20px;z-index: 20;" class="w-full flex justify-between mx-auto relative ">
    <div class="">E-COM</div>

<!-- <div class=""><i :class="!isHamBurgerOpen? 'ri-menu-line':'ri-close-large-line'"></i></div> -->

    <!-- <div class="flex gap-30 text-xl menu-options">
      <div class="pointer" v-for="(ele,index) in 4" :key="index">About</div>
    </div> -->
</div>
</header>
    
</template>

 

<style scoped> 
video {
  width: 100%;
  height: 500px; 
  object-fit: cover; 
  position: absolute;
  top: 0;
  left: 0;
  z-index: -10;
}

.header-inner-container{

}

.box1{
    padding-top:1px;
    width: 450px; 
    height: auto;
    max-height: 97%;
    background: blue;
    left: 15%;
    bottom: -10px;
    border-radius: 51% 48% 25% 25% / 57% 59% 0% 0%;
}
.inner-box-1{
width: 200px ;
height: 200px;
}

.box1 img{

}

</style>


