

<template>
    <div style="background-color: #020202;" class="w-full max-w-800 mx-auto overflow-hidden flex flex-wrap justify-center items-center video-container">
        <video width="100%"  autoplay loop muted playsinline>
        <source src="https://static.vecteezy.com/system/resources/previews/046/759/943/mp4/3d-model-of-smartphone-rotates-on-black-background-design-stylish-3d-animation-for-new-smartphone-model-advertising-animation-with-motion-design-for-phone-free-video.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>

<div style="color: white;" class="flex flex-col gap-10 details-container">
<p style="font-size: 26px;" class="para1">Explore the latest iPhone19+</p>
<!-- <p style="font-size: 26px;" class="para2">Explore the latest iPhone19+</p> -->
<div  class="mt-10 text-xl">
    <li>without charger</li>
<li>without charger</li>
<li>without charger</li>
</div>

<button style="" type="button"  class="rounded-lg pointer text-lg mt-20" >Buy Now</button>

</div>


    </div>


</template>


<style scoped>
.video-container{
    height: 400px;
}
video {
  width:400px;
  height: auto;
  object-fit: contain; 
  display: block;
  transform: rotate(-90deg);
}

p,li{font-family: "Itim", cursive;}


@media (max-width: 750px) {
 
  .video-container {
    height: auto;  /* Auto height for small screens */
    padding: 10px 15px;
    padding-bottom: 40px;
  }
video{
    height: 400px;
}
  .details-container{
    /* video */
  }
}

</style>