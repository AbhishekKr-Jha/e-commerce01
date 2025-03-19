<script>
export default {
  name: "Section1",
  data() {
    return {
      servicesList: [
        {
          pathTo: "/products",
          query: "men",
          text: "Men  ",
        },
        {
          pathTo: "/products",
          query: "women",
          text: " Women",
        },
        {
          pathTo: "/products",
          query: "electronics",
          text: "Electronics ",
        },
        {
          pathTo: "/products",
          query: "jewelery",
          text: "Jewelery ",
        },
        {
          pathTo: "/productsl",
          query: "all",
          text: " More",
        },
      ],
    };
  },
};
</script>

<template>
  <div
    style="padding-left: 400px; padding-right: 50px"
    class="home-section1-container mx-auto pt-20 flex justify-center items-center overflow-x-auto gap-60 hide-scrollbar"
  >
    <!-- <div v-for="ele in servicesList" :key="ele.text" class="">
<img :src="ele.img" width="100px" />
<p>{{ ele.text }}</p>
          </div> -->

    <div
      v-for="ele in servicesList"
      :key="ele.text"
      style="flex-shrink: 0"
      class="inner-items text-xl flex justify-center items-center pointer"
      @click="$router.push({path:'/products',query:{category:ele.query}})"
    >
      <p>{{ ele.text }}</p>
    </div>
  </div>
</template>

<style scoped>
.home-section1-container {
  width: 90%;
  max-width: 800px;
}

.inner-items {
  background: #f3f3f3;
  width: 140px;
  height: 50px;
  border-radius: 25px;
  background: rgb(1, 84, 154);
  font-family: "Itim", cursive;
  color: white;
}
</style>
