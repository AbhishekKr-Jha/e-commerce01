<script>
import apiHelper from "../utils/apiHelper";
import { EventBus } from "@/utils/eventBus";
import Loader from "@/components/Loader.vue";

export default {
  name: "WishlistPage",
  data() {
    return {
      isLoader: false,
      cartPageData: JSON.parse(localStorage.getItem("cartList")) || [],
      totalPrice:
        JSON.parse(localStorage.getItem("cartList"))?.reduce(
          (acc, cur) => acc + cur.price,
          0
        ) || 0,
    };
  },
  components: {
    Loader,
  },
  methods: {
    async removeFromCart(id) {
      this.isLoader = true;
      const response = await apiHelper.delete(`carts/${id}`);
      console.log("the response of delete cart data is", response);
      this.isLoader = false;
      if (response.status) {
        this.$toast.success("Item successfully removed from cart");
        const getCartData = JSON.parse(localStorage.getItem("cartList")) || [];
        const productIndex = getCartData.findIndex((item) => item.id === id);
        getCartData.splice(productIndex, 1);
        localStorage.setItem("cartList", JSON.stringify(getCartData));
        this.refetchCartData();
        EventBus.emit("cart-check");
      } else {
        // this.isLoader=false
        this.$toast.error(response.result || "Something went wrong");
      }
    },
    refetchCartData() {
      // this.isLoader=false
      (this.cartPageData = JSON.parse(localStorage.getItem("cartList")) || []),
        (this.totalPrice =
          JSON.parse(localStorage.getItem("cartList"))?.reduce(
            (acc, cur) => acc + cur.price,
            0
          ) || 0);
    },
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
    class="w-full mt-40 mx-auto flex flex-row gap-20 justify-center h-min main-container"
  >
    <div v-show="isLoader" class="w-full flex justify-center items-center">
      <Loader />
    </div>

    <p
      v-show="!isLoader && cartPageData.length == 0"
      class="text-2xl text-center"
    >
      Cart has no products yet
    </p>

    <div
      v-show="!isLoader && cartPageData.length > 0"
      style="flex: 1"
      class="w-full flex flex-col items-end gap-20 item-list-container"
    >
      <div
      @click="$router.push({path:'/product-details',query:{id:item.id}})"
        v-for="(item, index) in cartPageData"
        :key="index"
        style="padding: 10px"
        class="w-full relative pointer flex gap-20 border-primary rounded-lg cart-items"
      >
      <!-- <i
          @click.stop="removeFromCart(item.id)"
          style="width: 35px; height: 35px; background: red; color: white"
          class="rri-close-large-line absolute right-10 top-10 text-2xl flex items-center justify-center rounded-full delete-icon"
        ></i> -->
        <i
          @click.stop="removeFromCart(item.id)"
          style="width: 35px; height: 35px; background: red; color: white"
          class="ri-delete-bin-line absolute right-10 bottom-10 text-2xl flex items-center justify-center rounded-full delete-icon"
        ></i>

        <div
          style="padding: 5px"
          class="img-box flex justify-center items-center rounded-lg border-primary"
        >
          <img
            :src="item.image"
            width="auto"
            height="auto"
            style="max-width: 100%; max-height: 100%"
            class="object-fit-contain"
          />
        </div>

        <div
          style="flex: 1"
          class="w-full flex flex-col gap-10 font-style-iris product-details-container"
        >
          <p style="color: rgb(1, 84, 154)" class="text-xl font-medium title">
            {{ item.title }}
          </p>

          <p class="text-lg category clothes-category">
            Category: <span class="text-primary">{{ item.category }}</span>
          </p>

          <div class="flex flex-col gap-10 price-container">
            <p class="text-lg category">
              Price:<span
                style="font-size: 25px"
                class="text-primary price-text"
              >
                ${{ item.price }}</span
              >
            </p>

            <!-- <div style="gap: 5px;" class="flex items-center  text-primary "> 
<div class="quantity-btn ">-</div>
<span class="text-2xl quantity-text">6</span>
<span class="quantity-btn">+</span>
</div> -->
          </div>
        </div>
      </div>
    </div>

    <hr
      v-show="!isLoader && cartPageData.length > 0"
      class="hidden between-line"
    />

    <div
      v-show="!isLoader && cartPageData.length > 0"
      style="padding: 10px"
      class="flex flex-col gap-20 rounded-lg amount-container"
    >
      <div
        style="padding: 10px"
        class="w-full text-primary text-xl text-center border-primary rounded-lg"
      >
        Order Summary
      </div>
      <p class="text-lg text-center">
        By Placing Order! You agree to
        <span class="text-primary fomt-medium">delivery terms</span>.
      </p>
      <div style="margin-top: -5px" class="border-primary rounded-lg">
        <div
          style="padding: 15px 10px"
          class="text-xl border-bottom text-primary"
        >
          {{ cartPageData.length }} Product
        </div>
        <div style="padding: 15px 10px" class="summary-text border-bottom">
          Order Price: <span class="text-primary">${{ totalPrice }}</span>
        </div>
        <div style="padding: 15px 10px" class="summary-text border-bottom">
          Delivery: <span class="text-primary">Free</span>
        </div>
        <div style="padding: 15px 10px" class="summary-text">
          Total Price: <span class="text-primary">${{ totalPrice }}</span>
        </div>
      </div>
      <button
        @click="$toast.error('You can not order. It is a Fakeapi !')"
        type="button"
        style="margin-bottom: 10px"
        class="mx-auto rounded-lg text-lg transition-animation pointer buy-button"
      >
        Order
      </button>
    </div>
  </div>
</template>

<style scoped>
.amount-container {
  width: 300px;
  height: max-content;
  border: 2px solid rgb(1, 84, 154);
}
.text-primary {
  color: rgb(1, 84, 154);
}
.cart-items {
  max-width: 900px;
}
.img-box {
  width: 180px;
  height: 180px;
}
.title {
  width: 95%;
  max-width: 650px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.summary-text {
  font-size: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.quantity-btn {
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  cursor: pointer;
}
.quantity-text {
  width: 35px;
  height: 35px;
  border-radius: 100%;
  background-color: #eff8ff;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 1000px) {
  .amount-container {
    width: 250px;
  }
  .title {
    width: 100%;
  }
}

@media (max-width: 900px) {
  .main-container {
    flex-direction: column;
  }
  .between-line {
    display: block;
  }
  .item-list-container {
    align-items: center;
  }
  .cart-items {
    max-width: 800px;
  }
  .amount-container {
    margin: 0 auto;
    width: 100%;
    max-width: 600px;
  }
}

@media (max-width: 650px) {
  .img-box {
    width: 130px;
    height: 130px;
  }
  .title {
    font-size: 18px;
  }
  .category,
  .price {
    font-size: 16px;
  }
  .price-container {
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
  }
  .price-text {
    font-size: 18px !important;
  }
  .quantity-text {
    font-size: 20px;
  }
  .quantity-btn {
    font-size: 20px;
  }
}

@media (max-width: 450px) {
.delete-icon{
font-size: 18px;
width: 30px !important;
height: 30px !important;
  }
  .cart-items {
    gap: 10px;
    padding: 5px !important;
  }

  .title {
    font-size: 16px;
    -webkit-line-clamp: 1;
  }
  .img-box {
    width: 100px;
    height: 100px;
    border: none;
  }
  .product-details-container {
    gap: 5px;
  }
  .quantity-text {
    width: 25px;
    height: 25px;
  }
  .quantity-btn {
    width: 20px;
    height: 20px;
  }
  .price-container {
    gap: 15px;
  }
}

@media (max-width: 340px) {
  .clothes-category {
    display: none;
  }
}
</style>
