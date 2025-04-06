<script>
import { EventBus } from "@/utils/eventBus";
import LogoutBtn from "./LogoutBtn.vue";

export default {
  name: "Header",
  data() {
    return {
      isHamBurgerOpen: false,
      isUserLoggedIn: localStorage.getItem("token") ? true : false,
     totalItemsInCart:JSON.parse(localStorage.getItem("cartList"))?.length || 0,
     totalItemsInWishlist:JSON.parse(localStorage.getItem("watchList"))?.length || 0,
      hamburgerList: [
        // {
        //   text: 'Home',
        //   navigateTo: '/'
        // },
        {
          text: "Products",
          navigateTo: "/products",
        },
        {
          text: "Cart",
          navigateTo: "/cart",
        },
        {
          text: "Wishlist",
          navigateTo: "/wishlist",
        },
        {
          text: "Profile",
          navigateTo: "/profile",
        },
        {
          text: "About",
          navigateTo: "/about",
        },
        {
          text: "Conatct",
          navigateTo: "/contact",
        },
      ],
    };
  },
  components: {
    LogoutBtn,
  },
  methods: {
    updateHeader() {
      console.log("User updated, re-rendering header!");
      this.isUserLoggedIn = localStorage.getItem("token") ? true : false;
      this.totalItemsInCart=JSON.parse(localStorage.getItem("cartList"))?.length || 0,
      this.totalItemsInWishlist=JSON.parse(localStorage.getItem("watchList"))?.length || 0
      this.$forceUpdate();
    },
    logoutHandler() {
      localStorage.removeItem("token");
      localStorage.removeItem("cartList");
      localStorage.removeItem("watchList");
      this.isUserLoggedIn = false;
      this.$router.push("/login");
      this.isHamBurgerOpen = false;
    },
  },
  created() {
    EventBus.on("login-check", this.updateHeader);
    EventBus.on("cart-check", this.updateHeader);
    EventBus.on("wishlist-check", this.updateHeader);
  },
  beforeDestroy() {
    EventBus.off("login-check", this.updateHeader);
    EventBus.off("cart-check", this.updateHeader);
    EventBus.off("wishlist-check", this.updateHeader);

  },
};
</script>

<template>
  <header
    style="z-index: 250; position: fixed; top: 0; left: 0"
    class="w-full relative header-container"
  >
    <!-- <video style="z-index: -10;width: 100%;" autoplay loop muted playsinline class="absolute top-0 left-0  object-cover ">
    <source src="/video_asset.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video> -->

    <div
      style="height: 65px; padding: 20px; z-index: 20; max-width: 1500px"
      class="w-full mx-auto flex justify-between items-center"
    >
      <div style="" class="logo-container pointer" @click="$router.push('/')">
        <img src="/logo.png" width="130px" class="" />
      </div>

      <div
        v-show="!isUserLoggedIn"
        class="flex text-xl gap-30 menu-display-style"
      >
        <div
          class="pointer"
          :class="{ 'active-nav': $route.path.startsWith('/products') }"
          @click="
            $router.push({ path: '/products', query: { category: 'all' } })
          "
        >
          Products
        </div>
        <div
          class="pointer"
          :class="{ 'active-nav': $route.path === '/about' }"
          @click="$router.push('/about')"
        >
          About
        </div>
        <div
          class="pointer"
          :class="{ 'active-nav': $route.path === '/contact' }"
          @click="$router.push('/contact')"
        >
          Contact
        </div>
      </div>

      <div
        v-show="isUserLoggedIn"
        style="font-size: 32px"
        class="flex gap-30 menu-display-style"
      >
        <div
          class="pointer relative "
          :class="{ 'active-nav': $route.path === '/wishlist' }"
          @click="$router.push('/wishlist')"
        >
        <span v-show="totalItemsInWishlist>0" class="superScript-icon-text" >{{ totalItemsInWishlist }}</span>

          <i class="ri-heart-3-line"></i>
        </div>
        <div
          class="pointer"
          :class="{ 'active-nav': $route.path === '/profile' }"
          @click="$router.push('/profile')"
        >
        
          <i class="ri-user-line"></i>
        </div>
        <div
          class="pointer relative"
          :class="{ 'active-nav': $route.path === '/cart' }"
          @click="$router.push('/cart')"
        >
        
        <span v-show="totalItemsInCart>0" style="" class="superScript-icon-text" >{{ totalItemsInCart }}</span>
          <i class="ri-shopping-cart-line"></i>
        </div>
      </div>

      <div
        v-show="isUserLoggedIn"
        class="flex items-center gap-30 text-xl menu-options menu-display-style"
      >
        <div
          class="pointer"
          :class="{ 'active-nav': $route.path === '/products' }"
          @click="
            $router.push({ path: '/products', query: { category: 'all' } })
          "
        >
          Products
        </div>
        <div
          class="pointer"
          :class="{ 'active-nav': $route.path === '/about' }"
          @click="$router.push('/about')"
        >
          About
        </div>
        <div
          class="pointer"
          :class="{ 'active-nav': $route.path === '/contact' }"
          @click="$router.push('/contact')"
        >
          Contact
        </div>

        <!-- <div class="pointer" @click="logoutHandler" >Logout</div> -->
        <div class="pointer" @click="logoutHandler"><LogoutBtn /></div>
      </div>
      <div
        v-show="!isUserLoggedIn"
        class="flex items-center gap-10 menu-display-style"
      >
        <button
          type="button"
          class="auth-button"
          @click="$router.push('/register')"
        >
          SignUp
        </button>
        <button
          type="button"
          class="auth-button"
          @click="$router.push('/login')"
        >
          SignIn
        </button>
      </div>

      <div
        class="font-medium hamburger-display-style"
        style="font-size: 30px; color: white"
        @click="isHamBurgerOpen = true"
      >
        <i class="ri-menu-3-line"></i>
      </div>
    </div>

    <div
      class="side-nav flex flex-col items-center gap-20"
      :class="{ open: isHamBurgerOpen }"
    >
      <!-- <div class="close-btn" @click="isHamBurgerOpen = false">&times;</div> -->
      <div
        @click="
          $router.push('/');
          isHamBurgerOpen = false;
        "
        style="margin-top: 40px; margin-bottom: 10px"
        class="logo-container"
      >
        <img src="/logo.png" width="170px" class="mx-auto block" />
      </div>
      <div
        style="height: 90vh"
        class="w-full flex flex-col gap-20 overflow-hidden overflow-y-scroll"
      >
        <div
          @click="
            $router.push(item.navigateTo);
            isHamBurgerOpen = false;
          "
          v-for="(item, index) in hamburgerList"
          :key="index"
          class="bg-blue text-2xl rounded-lg w-full hamburger-menu-list"
           :class="{ 'active-nav-hamburger': $route.path === item.navigateTo }"
        >
          <!-- <i style="padding-right: 10px;font-size: 25px;" class="ri-home-4-line "></i> -->
          {{ item.text }}
        </div>

        <div
          class="bg-blue text-2xl rounded-lg w-full hamburger-menu-list"
          :style="{ backgroundColor: isUserLoggedIn ? 'red' : 'blue' }"
          @click="logoutHandler"
        >
          {{ isUserLoggedIn ? "Logout" : "Login" }}
        </div>
      </div>

      <div
        style="color: rgb(1, 84, 154); font-size: 30px"
        @click="isHamBurgerOpen = false"
        class="absolute top-10 right-10 text-2xl font-bold"
      >
        <i class="ri-close-large-line"></i>
      </div>
    </div>

    <div
      v-if="isHamBurgerOpen"
      class="overlay"
      @click="isHamBurgerOpen = false"
    ></div>
  </header>
</template>

<style scoped>
.active-nav {
  color: red;
  font-weight: 500;
}
.active-nav-hamburger{
    background-color: #EFF8FF;
    color: #01549A;
}

.header-container {
  font-family: "Itim", cursive;
  background-color: rgba(1, 85, 154, 0.116);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
}
.logo-container {
  /* background-color:rgba(1, 85, 154, 0.152);
  -webkit-backdrop-filter: blur(40px);
  backdrop-filter: blur(40px); */
  /* box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2); 
  border-radius: 10px;  */
}
.auth-button {
  width: 100px;
  height: 35px;
  transform: skew(-25deg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  border-radius: 8px;
  cursor: pointer;
  background-color: rgb(1, 84, 154);
  color: white;
}

.hamburger-menu-list {
  padding: 12px 10px;
  padding-left: 20px;
}

.side-nav {
  position: fixed;
  top: 0;
  left: -86%; /* Initially hidden */
  width: 85%;
  max-width: 400px;

  min-height: 100vh;
  /* background: rgba(1, 85, 154, 0.9); */
  background: white;
  color: white;
  padding: 20px;
  transition: left 0.3s ease-in-out;
  z-index: 300;
  padding-bottom: 30px;
}

.side-nav.open {
  left: 0; /* Slide in when open */
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 200;
}

.hamburger-display-style {
  display: none;
}

@media (max-width: 900px) {
  .hamburger-display-style {
    display: block;
  }

  .menu-display-style {
    display: none;
  }
}
</style>
