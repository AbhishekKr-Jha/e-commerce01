
<script>

export default{
    name:'RotatingCards',
    data(){
        return{
           imageList:[
            {
                 image:'/jewellery1.png'
            },
           
           
            {
                 image:'/headerImage4.png'
            },
            {
                 image:'/jewellery2.png'
            },
            {
                 image:'/device1.png'
            },
            {
                 image:'/device2.png'
            },

            {
                 image:'/headerImage3.png'
            },
           
            {
                 image:'/clothes3.png'
            },
            
            {
                 image:'/headerImage6.png'
            },
            {
                 image:'/headerImage8.png'
            },
            {
                 image:'/clothes7.png'
            },
           
           ]
        }
    }
}



</script>
<!-- :style="`--index: ${index}; border-color: rgb(${index * 25}, ${255 - index * 20}, ${index * 30});`" -->

<template>
    <div class="wrapper">
  <div class="inner" style="--quantity: 10;">
    <div v-for="(ele,index) in imageList" :key="index" class="card"      :style="`--index: ${index}; --color-card: ${142 + index * 10}, ${249 - index * 15}, ${252 - index * 10};`">
        
      <div style="display:flex;justify-content:center;align-items:center;" class="img">
      <img :src="ele.image" 
  width="100%" style="object-fit:contain;"  >
      </div>
    </div>
    <!-- <div class="card" style="--index: 1;--color-card: 142, 252, 204;">
      <div class="img"></div>
    </div>
    <div class="card" style="--index: 2;--color-card: 142, 252, 157;">
      <div class="img"></div>
    </div>
    <div class="card" style="--index: 3;--color-card: 215, 252, 142;">
      <div class="img"></div>
    </div>
    <div class="card" style="--index: 4;--color-card: 252, 252, 142;">
      <div class="img"></div>
    </div>
    <div class="card" style="--index: 5;--color-card: 252, 208, 142;">
      <div class="img"></div>
    </div>
    <div class="card" style="--index: 6;--color-card: 252, 142, 142;">
      <div class="img"></div>
    </div>
    <div class="card" style="--index: 7;--color-card: 252, 142, 239;">
      <div class="img"></div>
    </div>
    <div class="card" style="--index: 8;--color-card: 204, 142, 252;">
      <div class="img"></div>
    </div>
    <div class="card" style="--index: 9;--color-card: 142, 202, 252;">
      <div class="img"></div>
    </div> -->
  </div>
  <!-- <div class="card" style="--index: 9;--color-card: 142, 202, 252;">
      <div class="img"></div>
    </div> -->
    <div style="font-family: 'Itim', cursive;" class="">
    <p  style="color: red;" class="text-3xl font-semibold">FakeBazar</p>
</div>
</div>

</template>



<style scoped>


.wrapper {
  width: 100%;
  height: 700px;
  margin: 0 auto;
  margin-top: -80px;
  position: relative;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.inner {
  --w: 100px;
  --h:180px;
  --translateZ: calc((var(--w) + var(--h)) + 0px);
  --rotateX: -15deg;
  /* --rotateX: -15deg; */
  --perspective: 500px;
  position: absolute;
  width: var(--w);
  height: var(--h);
  top: 25%;
  left: calc(50% - (var(--w) / 2) - 2.5px);
  z-index: 2;
  transform-style: preserve-3d;
  transform: perspective(var(--perspective));
  animation: rotating 20s linear infinite; /* */
}
@keyframes rotating {
  from {
    transform: perspective(var(--perspective)) rotateX(var(--rotateX))
      rotateY(0);
  }
  to {
    transform: perspective(var(--perspective)) rotateX(var(--rotateX))
      rotateY(1turn);
  }
}

.card {
  position: absolute;
  border: 2px solid rgba(var(--color-card));
  border-radius: 12px;
  overflow: hidden;
  inset: 0;
  transform: rotateY(calc((360deg / var(--quantity)) * var(--index)))
    translateZ(var(--translateZ));
}

.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: white
    radial-gradient(
      circle,
      rgba(var(--color-card), 0.2) 0%,
      rgba(var(--color-card), 0.6) 80%,
      rgba(var(--color-card), 0.9) 100%
    );
}

</style>