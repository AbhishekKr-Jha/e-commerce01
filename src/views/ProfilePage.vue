

<script >
import ProductCard from '@/components/ProductCard.vue';
import apiHelper from "../utils/apiHelper";
import Loader from "../components/Loader.vue";
import NoDataSection from "../components/NoDataSection.vue";
import { EventBus } from "@/utils/eventBus";


  
export default{
    name:'ProfilePage',
    data(){
        return{
            userList:[
                {
                    text:'Orders',
                    navigateTo:'/orders'
                },
                {
                    text:'Cart',
                    navigateTo:'/cart'
                },
                {
                    text:'Wishlist',
                    navigateTo:'/wishlist'
                },
            ],
            userList2:[
                {
                    name:'profile',
                    text: 'Profile',
                    icon: ''
                },{
                    name:'address',
                    text: 'My Address',
                    icon: ''
                }, {
                    name:'order',
                    text: 'Orders',
                    icon: ''
                }, {
                    name:'cart',
                    text: 'Cart',
                    icon: ''
                }, {
                    name:'wishlist',
                    text: 'Wishlist',
                    icon: ''
                }
            ],
            userData: {
      firstname: '',
      lastname: '',
      city: '',
      phone: '',
      username: '',
      email:'',
      zipcode: '',
      street: '',
      number: '',
      password:''
    },
            isLoader:false,
            isPersonalInfo:true,
            dataToShow:'profile',
            cartData:JSON.parse(localStorage.getItem('cartList')) || [],
            wishListData:JSON.parse(localStorage.getItem('watchList')) || []
        }
    },
    components:{
        ProductCard,
        Loader,
        NoDataSection
    },
    methods:{
        async getUserData(id){
        this.isLoader=true
        const response=await apiHelper.get(`users/${id}`)
        this.isLoader=false
        console.log("the response is",response)
        if(response.status){
            this.userData={
  firstname: response.result.name.firstname,
  lastname: response.result.name.lastname,
  city: response.result.address.city,
  phone: response.result.phone,
  username: response.result.username,
  email: response.result.email,
  zipcode: response.result.address.zipcode,
  street: response.result.address.street,
  number: response.result.address.number,
  password:response.result.password
}
            console.log("the response od get user is",response.result)
            this.$toast.success("Products fetched successfully")
        }else{
            this.$toast.error(response.result)   
        }
        
    },
    async updateUserData(id){
        // console.log("the id is",id)
        this.isLoader=true
        const response=await apiHelper.update(`users/1`,{
            id:1,
            username:this.userData.username,
            email:this.userData.email,
            password:this.userData.password,
        })
        this.isLoader=false
        console.log("the response is",response.result)
        if(response.status){
            console.log("the response of upadate user is",response.result)
            this.$toast.success("user upadted successfully")
            this.userData.username=response.result.username
            this.userData.email=response.result.email                         
        }else{
            this.$toast.error(response.result)   
        }
        
    },
    updateProductStorage(){
        // this.isLoader=true
        console.log("product updated, re-rendering profile page!");
        this.wishListData = JSON.parse(localStorage.getItem("watchList"));
        this.cartData = JSON.parse(localStorage.getItem("cartList")) ;
      this.$forceUpdate();
    },
    },
    created(){
        this.getUserData(1) 
        this.isLoader=true
        EventBus.on("wishlist-check", this.updateProductStorage);
        EventBus.on("cart-check", this.updateProductStorage); 
    },
    beforeDestroy() {
        EventBus.off("wishlist-check", this.updateProductStorage); 
    EventBus.off("cart-check", this.updateProductStorage); 
  },

}


</script>

<template>
     
     <div v-show="isLoader" class="m-auto h-screen w-full flex justify-center items-center ">
    <Loader  />
</div>
    <div  v-show="!isLoader" style="margin-top: 100px;padding:0 10px;max-width: 1500px;font-family:'Itim', cursive;" class="w-full  mt-40 mx-auto main-container ">

        <div style="margin: 40px 0;padding-left:130px;padding-right:30px"  class="home-section1-container mx-auto pt-20  flex  justify-center items-center overflow-x-auto gap-30 hide-scrollbar small-screen-menu">
  <div @click="$router.push(ele.navigateTo)" v-for="ele in userList" :key="ele.text" style="flex-shrink: 0;" class="inner-items text-xl flex justify-center items-center pointer">
    <p>{{ ele.text }}</p> 
  </div>
</div>


<div class=" w-full flex gap-30 justify-center "> 


<div class=" menu-list flex flex-col  gap-20  rounded-lg">

    <div class="profile-circle text-3xl" >{{ userData.firstname[0].toUpperCase() }}.{{ userData.lastname[0].toUpperCase() }}</div> 

    <div @click="dataToShow=item.name;updateProductStorage()" v-for="(item,index) in userList2" :key="index" style="padding-left: 20px;" :style="dataToShow === item.name ? { backgroundColor: '#EFF8FF', color: 'rgb(1,84,154)' } : {}" class="w-full text-left pointer rounded-lg  menu-list-item ">
        <i class="ri-user-line"></i> {{ item.text }} 
    </div>
    <div  style="padding-left: 20px;" class="w-full text-left pointer rounded-lg  menu-list-item logout-btn  ">
        <i class="ri-logout-circle-r-line"></i> Logout
    </div>
</div>


<div v-show="isLoader" style="flex: 1; " class=" w-full flex justify-center items-center  "><Loader /></div>

<div v-show="!isLoader" style="flex: 1; width: calc(100% - 280px);" class="w-full  ">
  
<!-- ------------profile details-------- -->
<div v-show=" dataToShow==='profile' || dataToShow==='address' " class="w-full flex flex-col gap-30 items-center justify-center ">

    <p class="text-center mt-20 wishing-text">Good to see you! {{ userData.firstname }}</p>

<!-- ----------- info tabs ----- -->
<div class="tabs mx-auto rounded-lg">
        <button
          :class="{ active: isPersonalInfo }"
          class=" bg-white  rounded-lg  pointer text-lg tab-button"
          @click="isPersonalInfo = true,dataToShow='profile'" >
           Personal Info
        </button>
        <button
          :class="{ active: !isPersonalInfo }"
          class=" bg-white button-border rounded-lg  pointer text-lg tab-button "
          @click="isPersonalInfo = false,dataToShow='address'"
        >
          Address Info
        </button>
      </div>


    <div v-show=" dataToShow==='profile' " style="" class="w-full flex flex-wrap justify-center mx-auto gap-20  rounded-lg profile-input-container">
        <input type="text" name="username" v-model="userData.username" class="input font-style-itim text-lg profile-input " placeholder="Username"  />
<input type="text" name="email" v-model="userData.email" class="input font-style-itim text-lg profile-input" placeholder="Email" />
<input type="text" name="firstname" v-model="userData.firstname" class="input font-style-itim text-lg profile-input input-disabled" placeholder="First Name" disabled />
<input type="text" name="lastname" v-model="userData.lastname" class="input font-style-itim text-lg profile-input input-disabled" placeholder="Last Name" disabled />
<input type="text" name="phone" v-model="userData.phone" class="input font-style-itim text-lg profile-input input-disabled" placeholder="Phone" disabled />
    </div>

    <div v-show=" dataToShow==='address' " style="" class="w-full flex flex-wrap justify-center mx-auto gap-20  rounded-lg profile-input-container">
        <input type="text" name="city" v-model="userData.city" class="input font-style-itim text-lg profile-input input-disabled" placeholder="City" disabled />
<input type="text" name="street" v-model="userData.street" class="input font-style-itim text-lg profile-input input-disabled" placeholder="Street" disabled />
<input type="text" name="zipcode" v-model="userData.zipcode" class="input font-style-itim text-lg profile-input input-disabled" placeholder="Zipcode" disabled />
<input type="text" name="number" v-model="userData.number" class="input font-style-itim text-lg profile-input input-disabled" placeholder="Number" disabled />    </div>


    <button style="margin-top: 20px" class="rounded-lg pointer text-lg transition-animation buy-button" @click="updateUserData">
          Save
        </button>
   
    </div>

    <!-- ------order details---------- -->
    <div v-show=" dataToShow==='order' "  class="w-full flex flex-wrap justify-center gap-20">
<!-- <template  v-for="item in cartData" :key="item.id">
    <ProductCard :title="item.title"  :image="item.image" :price="item.price" :productId="item.id" :productData="item" />
</template> -->
<div > <NoDataSection message="No orders yet" /> </div>
</div>

<!-- -----------cart details-------------- -->
<div v-show=" dataToShow==='cart' "  class="w-full flex flex-wrap justify-center gap-20">
<template  v-for="item in cartData" :key="item.id">
    <ProductCard :title="item.title"  :image="item.image" :price="item.price" :productId="item.id" :productData="item" />
</template>
<div v-show="cartData.length==0"> <NoDataSection message="Cart is empty" /> </div>
</div>

<!-- ---------wishlist details-------------- -->
<div v-show=" dataToShow==='wishlist' "  class="w-full flex flex-wrap justify-center gap-20">
<template v-for="item in wishListData" :key="item.id">
    <ProductCard :title="item.title"  :image="item.image" :price="item.price" :productId="item.id" :productData="item" />
</template>
<div v-show="wishListData.length==0"> <NoDataSection message="Wishlist is empty" /> </div>

</div>


</div>

</div>

    </div>


</template>

<style scoped>


.menu-list{
    width:280px;
    position: sticky;
    top: 70px;
    height: max-content;
    padding:15px;
    background:rgb(1,84,154) ;
    color: white;
   }
   .menu-list-item{
    width: 100%;
  font-size: 20px;
    padding: 15px 0;
    font-family: "Itim", cursive;
    outline: none;
    border:none;
    background-color: rgb(1,84,154);
    color:white;
    border: 1px solid white;
   }

   .profile-circle{
    width: 100px;height: 100px;
    border-radius: 100%;
    background-color: rgb(1,84,154)  ;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 5px double #EFF8FF;
   }
 .inner-items{
    background: #F3F3F3;
    width: 140px;
   height: 45px;
   border-radius: 20px;
   background: rgb(1,84,154);
   font-family: "Itim", cursive;
color:white ;
   }


.logout-btn{
    background: red !important;
    border: none;
}

.tabs{margin-top: 0;}

.wishing-text{font-size: 42px;}
.profile-input-container{
  /* padding:30px 15px; */
  /* width: 90%; */
}
.profile-input{
  width: 45% !important;
  min-width: 280px;
}
  @media (max-width: 950px) {
.menu-list{
  display: none;

}
  }


@media (min-width: 900px) {
    .small-screen-menu{display: none;}
    .tabs{display: none;}
}

@media (max-width: 600px) {
   
   .profile-input{
     width: 95% !important;
     max-width:auto;
     min-width: auto;
   }
   
     }
 

</style>