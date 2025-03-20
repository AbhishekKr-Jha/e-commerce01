<script>
import ProductCard from "@/components/ProductCard.vue";
import Loader from "@/components/Loader.vue";
import { EventBus } from "@/utils/eventBus";

export default {
  name: "WishlistPage",
  data() {
    return {
      wishListData: JSON.parse(localStorage.getItem("watchList")) || [],
    };
  },
  components: {
    ProductCard,
  },
  methods: {
    fetchData() {
      this.wishListData = JSON.parse(localStorage.getItem("watchList"));
    },
    updateProductStorage() {
      // this.isLoader=true
      console.log("product updated, re-rendering profile page!");
      this.fetchData();
    //   this.$forceUpdate();
    },
  },
  created() {
    this.fetchData();
    EventBus.on("wishlist-check", this.updateProductStorage);
  },
  beforeDestroy() {
    EventBus.off("wishlist-check", this.updateProductStorage);
  },
};
</script>

<template>
  <div
    style="
      margin-top: 100px;
      padding: 0 20px;
      max-width: 1500px;
      font-family: 'Itim', cursive;
    "
    class="w-full mt-40 mx-auto flex gap-30 justify-center h-min main-container"
  >
    <div v-show="!isLoader" class="w-full flex flex-wrap justify-center gap-30">
      <template v-for="(item, index) in wishListData" :key="index">
        <ProductCard
          :title="item.title"
          :image="item.image"
          :price="item.price"
          :productId="item.id"
          :productData="item"
        />
      </template>
      <p v-show="wishListData.length == 0" class="text-xl mx-auto">
        No products added to wishlist 
      </p>
    </div>
  </div>
</template>
