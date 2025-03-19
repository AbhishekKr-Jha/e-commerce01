<template>
  <div
    style="max-width: 1500px"
    class="w-full mt-20 bg-red-900  flex flex-col items-center justify-center mx-auto relative"
  >
    <div
      style="height: 550px; z-index: -10; padding-left: 0px"
      class="w-full absolute top-0 left-0 header-inner-container  flex items-center gradient"
    >
      <div style="padding: 0 20px" class="heading-box text-primary">
        <h4 class="text-primary">Elevate Your Experience</h4>
        <h1>
          <span style="padding-left: 20px">By Seamless Shopping </span><br />
          <div style="font-size: 38px" class="text-center">&</div>
          Speedy Delivery
        </h1>
      </div>

      <div
        style="flex: 1"
        class=" pt-20 w-full h-full flex relative overflow-hidden image-box"
      >
        <div class="box1  absolute left-25 bottom-0">
          <img src="/headerImage1.png" width="100%" height="100%" style="" />

          <div
            style="z-index: 40;background-color:#01549A;"
            class="absolute flex justify-center items-center rounded-full bg-gray inner-box-1"
          >
            <img
              src="/headerImage2.png"
              width="170px"
              height="auto"
              class="object-fit-contain"
            />
          </div>

          <div
            style="z-index: 40;background-color:#EFF8FF;"
            class="absolute flex justify-center items-center rounded-full bg-gray inner-box-2"
          >
            <img
              src="/headerImage3.png"
              width="100px"
              height="auto"
              class="object-fit-contain"
            />
          </div>

          <div
            style="z-index: 40;background-color:#F0F8FF;"
            class="absolute flex justify-center items-center rounded-full bg-gray inner-box-3"
          >
            <img
              src="/headerImage5.png"
              width="100px"
              height="auto"
              class="object-fit-contain"
            />
          </div>

          <div
            style="z-index: 40;background-color:#C0D6E9;"
            class="absolute flex justify-center items-center rounded-full bg-gray inner-box-4"
          >
            <img
              src="/headerImage7.png"
              width="110px"
              height="auto"
              class="object-fit-contain"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
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

.header-inner-container {
}

.box1 {
  padding-top: 1px;
  width: 460px;
  height: auto;
  max-height: 97%;
  /* background: blue; */
    background: linear-gradient(to top left,rgba(1, 84, 154, 0.3), #EFF8FF, white,rgba(1, 84, 154, 0.3));


  left: 15%;
  bottom: -10px;
  border-radius: 51% 48% 25% 25% / 57% 59% 0% 0%;
}
.inner-box-1 {
  width: 110px;
  height: 110px;
  left: -10%;
  bottom: 50px;
}

.inner-box-2 {
  width: 70px;
  height: 70px;
  left: 30;
  top: 60px;
}

.inner-box-3 {
  width: 70px;
  height: 70px;
  left: -10%;
  top: 180px;
}

.inner-box-4 {
  width: 90px;
  height: 90px;
  left: 30%;
  top: -20px;
}

/* .inner-box-3{
width: 70px ;
height: 70px;
left:30;
top: 60px; 
} */

@media (max-width: 1000px) {
  h4 {
    font-size: 30px;
  }
  h1 {
    font-size: 36px;
  }
}

@media (max-width: 900px) {
  .header-inner-container {
    flex-direction: column;
  }

  .image-box {
    order: 1;
  }

  .image-box .box1 {
    /* left: 30%; */
  }
  .heading-box {
    order: 2;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 300;
    bottom: 50px;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
  }
  h4 {
    font-size: 30px;
  }
  h1 {
    font-size: 48px;
  }
}

@media (max-width: 520px) {
  .heading-box {
    padding: 0 0px;
  }
  .image-box {
    overflow-y: hidden;
    overflow-x: auto;
  }
  .box1 {
    width: 400px;
    left: 2%;
  }
  .image-box {
    width: 100%;
  }
  h4 {
    font-size: 22px;
  }
  h1 {
    font-size: 34px;
  }
}
</style>
