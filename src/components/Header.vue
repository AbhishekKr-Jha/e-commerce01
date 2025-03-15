

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

<div style="height: 550px;z-index: -10;padding-left: 20px " class="w-full absolute top-0 left-0 header-inner-container bg-red flex   items-center ">

<div class="heading-box ">
<h4 >   Elevate Your Experience </h4> <h1><span style="padding-left: 20px;">By  Seamless Shopping </span><br> <div style="font-size: 38px;" class="text-center">&</div>  Speedy Delivery </h1>
</div>

<div style="flex: 1;" class="bg-green pt-20 w-full h-full flex relative overflow-hidden image-box">
<div class="box1 absolute left-25 bottom-0 ">
<img src="/headerImage1.png"  width="100%" height="100%" style=""/>

<div style="z-index: 40;"  class="absolute  flex justify-center items-center rounded-full bg-gray inner-box-1">
<img src="/headerImage2.png" width="170px" height="auto" class="object-fit-contain " />
</div>

<div style="z-index: 40;"  class="absolute  flex justify-center items-center rounded-full bg-gray inner-box-2">
<img src="/headerImage3.png" width="100px" height="auto" class="object-fit-contain " />
</div>

<div style="z-index: 40;"  class="absolute  flex justify-center items-center rounded-full bg-gray inner-box-3">
<img src="/headerImage5.png" width="100px" height="auto" class="object-fit-contain " />
</div>

<div style="z-index: 40;"  class="absolute  flex justify-center items-center rounded-full bg-gray inner-box-4">
<img src="/headerImage7.png" width="110px" height="auto" class="object-fit-contain " />
</div>


</div>

</div>

</div>


<!-- <div style="padding: 20px;z-index: 20;" class="w-full flex justify-between mx-auto relative ">
    <div class="">E-COM</div>

<div class=""><i :class="!isHamBurgerOpen? 'ri-menu-line':'ri-close-large-line'"></i></div>

    <div class="flex gap-30 text-xl menu-options">
      <div class="pointer" v-for="(ele,index) in 4" :key="index">About</div>
    </div>
</div> -->
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
    width: 460px; 
    height: auto;
    max-height: 97%;
    background: blue;
    left: 15%;
    bottom: -10px;
    border-radius: 51% 48% 25% 25% / 57% 59% 0% 0%;
}
.inner-box-1{
width: 110px ;
height: 110px;
left:-10%;
bottom: 50px; 
}

.inner-box-2{
width: 70px ;
height: 70px;
left:30;
top: 60px; 
}

.inner-box-3{
width: 70px ;
height: 70px;
left:-10%;
top: 180px; 
}

.inner-box-4{
width: 90px ;
height: 90px;
left:30%;
top: -20px; 
}

/* .inner-box-3{
width: 70px ;
height: 70px;
left:30;
top: 60px; 
} */

@media (max-width: 1000px) {
  h4{
    font-size: 30px;
  }
  h1{
    font-size: 36px;
  }
  }


  @media (max-width: 900px) {
    .header-inner-container{
 flex-direction: column;

}

.image-box{
    order: 1;
}

.image-box .box1{
/* left: 30%; */
}
  .heading-box{
order: 2;
width: 100%;
height: 100%;
position: absolute;
z-index: 300;
bottom: 50px;
left:0;
display: flex;flex-direction: column; justify-content: end;align-items: center;
  }
  h4{
    font-size: 30px;
  }
  h1{
    font-size: 48px;
  }
  }

  @media (max-width: 520px) {
    .image-box{overflow-y: hidden;overflow-x: auto;}
.box1{
    width: 400px; 
    left: 0;
}
.image-box{width: 100%;}
h4{font-size: 22px;}
h1{
    font-size: 34px;
}
  }


</style>


