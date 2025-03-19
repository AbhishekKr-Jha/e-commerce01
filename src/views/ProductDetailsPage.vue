<script>
import ProductCard from "@/components/ProductCard.vue";
import Loader from "@/components/Loader.vue";
import { useRoute } from "vue-router";
import apiHelper from "../utils/apiHelper";
import { EventBus } from "@/utils/eventBus";

export default {
  name: "ProductDetailsPage",
  data() {
    return {
      productData: {},
      isLoader: true,
      similarProducts: [],
      itemInCart: false,
      itemInWatchList: false,
    };
  },
  components: {
    ProductCard,
    Loader,
  },
  methods: {
    async getProductDetails(id) {
      this.isLoader = true;
      const response = await apiHelper.get(`products/${id}`);
      this.isLoader = false;
      console.log("the response is", response);
      if (response.status) {
        this.productData = response.result;
        this.$toast.success("Products fetched successfully");
        this.getAllProducts(id);
        // this.isItemInCart(id)
        // this.isItemInWatchList(id)
      } else {
        this.$toast.error(response.result);
      }
    },
    async getAllProducts(id) {
      const response = await apiHelper.get("products");
      console.log("the response is", response);
      if (response.status) {
        let data = response.result;
        let filterData = data.filter(
          (item) =>
            item.category == this.productData.category &&
            item.id !== this.productData.id
        );
        this.similarProducts = filterData;
      } else {
      }
    },
    async addToCart() {
      this.isLoader = true;
      const response = await apiHelper.post("carts", {
        id: 0,
        userId: 0,
        products: [{ ...this.productData }],
      });
      this.isLoader = false;
      if (response.status) {
        this.itemInCart = true;
        this.$toast.success("Item successfully added to cart");
        const getCartData = JSON.parse(localStorage.getItem("cartList")) || [];
        getCartData.push(this.productData);
        localStorage.setItem("cartList", JSON.stringify(getCartData));
        EventBus.emit("cart-check");
      } else {
        this.$toast.error(response.result || "Something went wrong");
      }
    },
    async removeFromCart() {
      this.isLoader = true;
      const response = await apiHelper.delete(`carts/${this.productData.id}`);
      console.log("the response of delete cart data is", response);
      this.isLoader = false;
      if (response.status) {
        this.itemInCart = false;

        this.$toast.success("Item successfully removed from cart");
        const getCartData = JSON.parse(localStorage.getItem("cartList")) || [];
        const productIndex = getCartData.findIndex(
          (item) => item.id === this.productData.id
        );
        getCartData.splice(productIndex, 1);
        localStorage.setItem("cartList", JSON.stringify(getCartData));
        EventBus.emit("cart-check");
      } else {
        this.$toast.error(response.result || "Something went wrong");
      }
    },
    isItemInCart(id) {
      console.log(this.productData.price, "this is the id");
      let getCartData = JSON.parse(localStorage.getItem("cartList")) || [];
      this.itemInCart = getCartData.some((item) => item.id === id);
    },
    toggleWatchListFunc() {
      // console.log("the i id",this.route.params.id)
      const getWatchListData =
        JSON.parse(localStorage.getItem("watchList")) || [];
      const productIndex = getWatchListData.findIndex(
        (item) => item.id === this.productData.id
      );
      if (productIndex !== -1) {
        this.$toast.success("Item successfully removed from WishList");
        getWatchListData.splice(productIndex, 1);
        this.itemInWatchList = false;
      } else {
        this.$toast.success("Item successfully added to WishList");
        getWatchListData.push(this.productData);
        this.itemInWatchList = true;
      }
      EventBus.emit("wishlist-check");
      localStorage.setItem("watchList", JSON.stringify(getWatchListData));
    },
    isItemInWatchList() {
      let getWatchList = JSON.parse(localStorage.getItem("watchList")) || [];
      this.itemInWatchList = getWatchList.some(
        (item) => item.id === this.productData.id
      );
    },
  },
  watch: {
    "$route.query.id": function (newId, oldId) {
      if (newId && newId !== oldId) {
        this.getProductDetails(newId);
      }
    },
  },
  created() {
    // console.log("ok rendered",this.$route.query.id)
    this.route = useRoute();
    this.getProductDetails(this.$route.query.id);
    this.isItemInWatchList(this.productData.id);
    this.isItemInCart(this.$route.query.id);
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
    class="w-full mt-40 mx-auto flex justify-center h-min main-container"
  >
    <div v-show="isLoader" class="m-auto">
      <Loader />
    </div>
    <div v-show="!isLoader" class="w-full">
      <div class="w-full flex gap-30 product-details-container">
        <div
          style="width: 40%; padding: 30px"
          class="relative overflow-hidden rounded-lg border flex justify-center items-center product-image-container"
        >
          <img
            :src="productData.image"
            width="98%"
            style="max-width: 350px"
            height="auto"
          />
          <!-- <i
            @click="addToCart"
            v-show="itemInCart"
            style="color: red"
            class="ri-shopping-cart-fill absolute top-10 right-10 text-3xl pointer"
          ></i> -->
          <!-- <i
            @click="removeFromCart"
            v-show="!itemInCart"
            style="color: gray"
            class="ri-shopping-cart-fill absolute top-10 right-10 text-3xl pointer"
          ></i> -->
        </div>

        <div
          style="width: 60%; font-family: 'Itim', cursive"
          class="flex flex-col items-start gap-20 product-info-container"
        >
          <p style="font-size: 30px" class="w-90 product-title">
            {{ productData.title }}
          </p>
          <div class="text-xl flex items-center product-rating">
            <img
              width="25px"
              style="padding-right: 3px"
              src="/rating_star.svg"
            />
            {{ productData.rating.rate || 0 }}
            <span style="margin-left: 10px"
              >({{ productData.rating.count }} reviews)</span
            >
          </div>
          <p style="color: rgb(1, 84, 154)" class="product-price text-3xl">
            ${{ productData.price }}
          </p>
          <p class="w-90 text-xl product-description">
            {{ productData.description }}
          </p>

          <div class="w-full flex items-center gap-20">
            <button
              @click="$toast.error('You can not order. It is a Fakeapi !')"
              type="button"
              class="rounded-lg pointer text-lg transition-animation buy-button"
            >
              Buy Now
            </button>
            <span
              @click="toggleWatchListFunc"
              :style="{ color: itemInWatchList ? 'red' : 'gray' }"
              class="flex justify-center items-center rounded-sm pointer watch-list"
              ><i class="ri-heart-3-line text-xl"></i
            ></span>
          </div>
        </div>
      </div>

      <div class="w-full">
        <hr class="mt-40" />
        <h5
          style="color: rgb(1, 84, 154); font-size: 40px"
          class="mt-10 font-semibold"
        >
          People also looked
        </h5>

        <div
          style="margin-bottom: 400px"
          class="mt-40 w-full flex flex-wrap justify-center gap-30"
        >
          <!-- <div v-for="(ele,index) in 7" :key="index" style="padding: 10px; border: 2px solid rgb(1,84,154);" class="border rounded-lg relative similar-products-items">
<div style="padding:10px 5px; margin-bottom: 10px;border: 2px solid rgb(1,84,154);" class="border rounded-lg relative ">  
    <span class="absolute top-10 right-10"><i class="ri-heart-3-line text-xl pointer"></i></span>                                                
    <img src="https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg" width="" height="280px" class="object-fit-conatin mx-auto block" />
</div>
<div style=" font-family: 'Itim', cursive;" class="w-full flex flex-col gap-10">
    <p class="title text-lg">Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket</p>
    <div class="text-2xl "><span style="padding-right:10px;" class="new-price">$29.5</span>  <span class="text-xl old-price">$69</span>
        </div>
    <div class="w-full flex flex-col gap-10">
        <button style="width: 100%;padding: 8px 0;" type="button" class="rounded-lg pointer text-lg transition-animation w-full buy-button " >Buy Now</button>
        <button style="width: 100%;padding: 8px 0;" type="button" class="rounded-lg pointer text-lg transition-animation  w-full buy-button " >Remove To Cart</button>
    </div>
</div>
</div> -->

          <template v-for="item in similarProducts" :key="item.id">
            <ProductCard
              :title="item.title"
              :image="item.image"
              :price="item.price"
              :productId="item.id"
              :productData="item"
            />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.watch-list {
  width: 38px;
  height: 38px;
  background-color: #eff8ff;
  /* color: red; */
}

.title {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.description {
}
.price {
}
.buy-button:hover {
  background: rgba(1, 84, 154, 0.82);
  transform: scale(1);
  /* border-color: #01549A; */
}
.new-price {
  color: red;
}
.old-price {
  color: rgb(1, 84, 154);
  text-decoration: line-through;
  color: rgb(1, 84, 154);
}

.similar-products-items {
  min-width: 280px;
  width: 25%;
}

@media (max-width: 1000px) {
  .product-image-container {
    width: 35% !important;
    padding: ;
  }
  .product-title {
    font-size: 25px !important;
    width: 98%;
  }
  .product-price {
    font-size: 27px;
  }
  .product-description {
    width: 98%;
    font-size: 18px;
  }
  .product-rating {
    font-size: 18px;
  }
}

@media (max-width: 800px) {
  .product-details-container {
    flex-direction: column;
  }
  .product-image-container {
    margin: 0 auto;
    width: 100% !important;
    max-width: 420px !important;
  }

  .product-info-container {
    width: 100% !important;
  }
}

@media (max-width: 620px) {
  .similar-products-items {
    width: 97%;
  }
}

@media (max-width: 500px) {
  .main-container {
    padding: 0 10px !important;
  }
  h5 {
    font-size: 30px !important;
  }
  /* .product-image-container{width: ;} */
  .product-image-container img {
    max-width: auto;
    width: auto;
    max-height: 300px;
    object-fit: contain;
  }
  .similar-products-items {
  }
}
</style>
