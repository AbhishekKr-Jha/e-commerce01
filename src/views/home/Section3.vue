<script>
export default {
  name: "Section3",
  data() {
    return {
      mensWear: [
        {
          id: 2,
          title: "Mens Casual Premium Slim Fit T-Shirts ",
          price: 22.3,
          category:"men's clothin",
          image: "/man_clothes1.png",
          rating: {
            rate: 4.1,
            count: 259,
          },
          width:'55%',
        //   top: "68%",
        //   left: " 50%",
        //   transform: "translate(-50%, -50%) rotate(2deg)",
          responsiveClass: "men_box1",
        },
        {
          id: 3,
          title: "Mens Cotton Jacket",
          price: 55.99,
          category:"men's clothin",
          image: "/man_clothes2.png",
          rating: {
            rate: 4.7,
            count: 500,
          },
          width:'68%',
          responsiveClass: "men_box2",
        },
      ],
      womensWear:[
      {
"id": 16,
"title": "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
"price": 29.95,
"description": "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
"category": "women's clothing",
"image": "/women_clothes1.png",
"rating": {
"rate": 2.9,
"count": 340
}
},
{
"id": 17,
"title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
"price": 39.99,
"description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
"category": "women's clothing",
"image": "/women_clothes2.png",
"rating": {
"rate": 3.8,
"count": 679
}
},
      ]
    };
  },
};
</script>

<template>
  <div class="w-full flex flex-col gap-30 mt-40">
    <h2 class="mt-40">Be in Trends</h2>
    <div class="w-full flex justify-center flex-wrap gap-20" >
      <div
        v-for="(ele, index) in mensWear"
        :key="index"
        class="rounded-lg overflow-hidden relative  box "
      >
      <!-- <i style="color: red; z-index: 110;" class="ri-heart-3-line absolute top-10 right-10 text-2xl pointer" ></i> -->
        <img
          :src="ele.image"
          class="absolute men-clothes-image"
          :style="{ width: ele.width }"
          :class="[ele.responsiveClass]"
        />

        <div style="z-index: 110;" type="button" class="absolute rounded-full  text-2xl pointer button" @click="$router.push({path:'/product-details',query:{id:ele.id}})"><i class="ri-arrow-right-down-line arrow-icon"></i> </div>
        <div  class="title-text text-center flex justify-center items-end text-xl">{{ ele.title }}</div>
      </div>
    </div>
  </div>







  <!-- womens -->
  <div class="w-full flex flex-col gap-30">
    <h2 class="mt-40">Find your Glamour</h2>
    <div class="w-full flex justify-center flex-wrap gap-20" >
      <div
        v-for="(ele, index) in womensWear"
        :key="index"
        class="woman-box rounded-lg overflow-hidden relative"
      >
      <!-- <i style="color: red; z-index: 110;" class="ri-heart-3-line absolute top-10 right-10 text-2xl pointer" ></i> -->

        <img
          :src="ele.image"
          class="absolute women-clothes-image"
          
        />
        <div style="z-index: 110;" type="button" class="absolute rounded-full  text-2xl pointer button" @click="$router.push({path:'/product-details',query:{id:ele.id}})"><i class="ri-arrow-right-down-line arrow-icon"></i> </div>
        <!-- <div  padding="20px 10px width
        90%" class=" title-text text-center flex justify-center items-end text-xl">{{ ele.title }}</div>
       -->
      </div>
    </div>
  </div>
</template>


<style scoped>
.box {
  width: 46%; /* 50% width with spacing adjustment */
  background-color: lightgray;
  padding: 20px;
  text-align: center;
  border-radius: 8px;
  max-width: 500px;
  height: 300px;
}
.woman-box{
  width: 46%; /* 50% width with spacing adjustment */
  background-color: lightgray;
  padding: 20px;
  text-align: center;
  border-radius: 8px;
  max-width: 500px;
  height: 300px;
}

.box img {
  /* width: 55%; */
  /* width: 65%; */
  height: auto;
  z-index: 50;
  object-fit: contain;
  top: 68%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(2deg);
  transition: all linear 0.5s;
}


.woman-box img{
  width: 55%;
  height: auto;
  z-index: 50;
  object-fit: contain;
  top: 68%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(2deg);
  transition: all linear 0.5s;
}
.women-clothes-image{
    top: 82% !important;
    width: 55%;
}

.box:hover .men-clothes-image{
    top: 50% !important;
    left: 50%;
    /* width: 40% !important; */
    width: 40% !important;
    transform:translate(-50%, -50%) rotate(2deg) scale();
}

.woman-box:hover .women-clothes-image{
    top: 50% !important;
    left: 50%;
    width: 35%;
    transform:translate(-50%, -50%) rotate(2deg) scale();
}


@media (max-width: 750px) {
  .box {
    width: 95%; /* Full width on smaller screens */
  }
  .woman-box{
    width: 95%;
  }
  .woman-box img{
    top: 90% !important;
    width: 62%;
  }
}

@media (max-width: 380px) {
  ::v-deep(.men_box1) {
    top: 53% !important;
    width: 85% !important;
    max-width: 200px;
  }

  ::v-deep(.men_box2) {
    top: 53% !important;
        width: 97% !important;
        max-width: 232px;
  }

  
  .woman-box img{
    top: 60% !important;
    width: 62%;
  }
  .woman-box:hover .women-clothes-image{
    top: 50% !important;
    left: 50%;
    width: 45%;
    transform:translate(-50%, -50%) rotate(2deg) scale();
}
}
</style>
