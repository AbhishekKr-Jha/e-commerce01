
<script> 
import apiHelper from '../utils/apiHelper'
import { EventBus } from "@/utils/eventBus";

export default{
name:'ProductCard',
data(){
    return{
        itemInCart:false,
        itemInWatchList:false,
        isLoader:false
    }
},
props:{
    title:String,
    price:Number,
    image:String,
    productId:Number,
    productData:{
        type:Object,
        default:() => ({})
    }
},
methods:{
//     toggleToCartFunc(){
//         console.log("the i id",this.route.params.id)
// const getCartData=JSON.parse(localStorage.getItem('cartList')) || []
// const productIndex = getCartData.findIndex(item => item.id ===this.productId)
//     if (productIndex !== -1) {
//         getCartData.splice(productIndex, 1)
//         this.itemInCart=false
//     } else {
//         getCartData.push(this.product)
//         this.itemInCart=true
//     }
//     localStorage.setItem('cartList', JSON.stringify(getCartData))


//     },
    async addToCart(){ 
    this.isLoader=true 
    const response=await apiHelper.post('carts',{
        id:0,
        userId:0,
        products:[this.product]
    })
    this.isLoader=false
   if(response.status){
    this.itemInCart=true
    this.$toast.success("Item successfully added to cart")
    const getCartData=JSON.parse(localStorage.getItem('cartList')) || []
    getCartData.push(this.productData)
    localStorage.setItem('cartList', JSON.stringify(getCartData))
    EventBus.emit("cart-check");
   }else{
    this.$toast.error(response.result || "Something went wrong") 
   }
},
async removeFromCart(){
    this.isLoader=true
    const response=await apiHelper.delete(`carts/${this.productId}`)
   console.log("the response of delete cart data is",response)
   this.isLoader=false
   if(response.status){
    this.itemInCart=false
    
    this.$toast.success("Item successfully removed from cart")
    const getCartData=JSON.parse(localStorage.getItem('cartList')) || []
const productIndex = getCartData.findIndex(item => item.id ===this.productId)
getCartData.splice(productIndex, 1)
localStorage.setItem('cartList', JSON.stringify(getCartData)) 
EventBus.emit("cart-check");
}else{
    this.$toast.error(response.result || "Something went wrong") 
}
},
isItemInCart(id){
        let getCartData = JSON.parse(localStorage.getItem('cartList')) || []
        this.itemInCart= getCartData.some(item => item.id ===  id )
    },
    toggleWatchListFunc(){
        // console.log("the i id",this.route.params.id)
const getWatchListData=JSON.parse(localStorage.getItem('watchList')) || []
const productIndex = getWatchListData.findIndex(item => item.id === this.productId)
    if (productIndex !== -1) {
        this.$toast.success("Item successfully removed from Wishlist")
        getWatchListData.splice(productIndex, 1)
        this.itemInWatchList=false
    } else {
        this.$toast.success("Item successfully added to Wishlist")
        getWatchListData.push(this.productData)
        this.itemInWatchList=true
    }
    localStorage.setItem('watchList', JSON.stringify(getWatchListData))
    EventBus.emit("wishlist-check");  
    },
    isItemInWatchList(id){
        let getWatchList = JSON.parse(localStorage.getItem('watchList')) || []
        this.itemInWatchList= getWatchList.some(item => item.id === id)
    },
},
created(){
    this.isItemInCart(this.productId)
    this.isItemInWatchList(this.productId)
}
}


</script>


<template>
    <div  style="padding: 10px; border: 2px solid rgb(1,84,154);" class="border rounded-lg relative similar-products-items">
<div  style="padding:10px 5px; margin-bottom: 10px;border: 2px solid rgb(1,84,154);height: 250px;" class="border rounded-lg relative flex items-center ">  
    <span @click="toggleWatchListFunc" :style="{ color: itemInWatchList ? 'red' : 'gray' }" class="absolute top-10 right-10"><i style="" class="ri-heart-3-line text-xl pointer"></i></span>                                                
    <img :src="image" width="auto" height="auto" style="max-width: 100%;max-height: 100%;" class="object-fit-conatin mx-auto block" />
</div>
<div style=" font-family: 'Itim', cursive;" class="w-full flex flex-col gap-10">
    <p class="title text-lg">{{ title }}</p>
    <div class="text-2xl "><span style="padding-right:10px;" class="new-price">${{ price }}</span>  <span class="text-xl old-price">${{ price+200 }}</span>
         <!-- <span style="margin-left: 20px;font-size: 18px;"><img src="/rating_star.svg" />&nbsp;5.7</span> -->
        </div>
    <div class="w-full flex flex-col gap-10">
        <button @click="$router.push({path:'/product-details',query:{id:productId}})" style="width: 100%;padding: 8px 0;" type="button" class="rounded-lg pointer text-lg transition-animation w-full buy-button " >Buy Now</button>
        <button v-show="!itemInCart" @click="addToCart" style="width: 100%;padding: 8px 0;" type="button" class="rounded-lg pointer text-lg transition-animation  w-full buy-button " >{{ isLoader?"•••":"Add To Cart" }}</button>
        <button v-show="itemInCart" @click="removeFromCart" style="width: 100%;padding: 8px 0;" type="button" class="rounded-lg pointer text-lg transition-animation  w-full buy-button " >{{ isLoader?"•••":"Remove From Cart" }}</button>
    </div>
</div>
</div>
</template>


<style scoped> 
.watch-list{
    width: 38px;
    height: 38px;
    background-color: #EFF8FF;
    color: red;
}


.title{
width: 100%;
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;

}
.description{

}
.price{

}
.buy-button:hover{
  background: rgba(1,84,154,0.82);
  transform: scale(1);
  /* border-color: #01549A; */
}
.new-price{
    color: red;
}
.old-price{
color: rgb(1,84,154);
text-decoration: line-through;
color: rgb(1,84,154);
}

.similar-products-items{
    min-width: 280px; width: 25% ;
}

@media (max-width: 1000px) {
    .product-image-container{
        width: 35% !important;
        padding: ;
    }
.product-title{
    font-size: 25px !important; 
    width: 98%;
}
.product-price{
    font-size: 27px;
}
.product-description{
    width: 98%;
    font-size:18px ;
}
.product-rating{
    font-size: 18px;
}
}


@media (max-width: 800px) {
.product-details-container{
    flex-direction: column;
}
.product-image-container{
   margin: 0 auto;
   width: 100% !important;
   max-width: 420px !important;
}

.product-info-container{
    width: 100% !important;
}

}

@media (max-width: 620px) {
.similar-products-items{
    width: 97%;
    max-width: 500px !important;
    margin: 0 auto;
}
}

@media (max-width: 500px) {
.main-container{
    padding:0 10px !important;
}
h5{font-size: 30px !important;}
/* .product-image-container{width: ;} */
.product-image-container img{
    max-width: auto;
    width: auto;
    max-height: 300px;
    object-fit: contain;
}
.similar-products-items{

}




}
</style>