


<script>
import ProductCard from '@/components/ProductCard.vue';
import Loader from '@/components/Loader.vue';
import { useRoute } from 'vue-router';
import apiHelper from '../utils/apiHelper'

 

export default {
    name:'ProductListingPage',
    data(){
        return{
isLoader:true,
productList:[]
        }
    },
    components:{
        ProductCard,  
        Loader
    },
    methods:{
        async getAllProducts(){
        this.isLoader=true
        const response=await apiHelper.get('products')
        this.isLoader=false
        console.log("the response is",response)
        if(response.status){
            // this.productList=response.result  
            this.filterProducts(response.result)
            this.$toast.success("Products fetched successfully")
        }else{
            this.$toast.error(response.result)   
        }    
    },
    filterProducts(data){
        const category=this.$route.query.category
        if(category=="all") {
            this.productList=data
        }
        else if(category=='jewelery'){
const filterData=data.filter(item=>item.category=='jewelery')
this.productList=filterData
        }
        else if(category=='electronics'){
const filterData=data.filter(item=>item.category=='electronics')
this.productList=filterData
        }
        else if(category=='women'){
const filterData=data.filter(item=>item.category.includes('women'))
this.productList=filterData
        }
        else if(category=='men'){
const filterData=data.filter(item=>item.category=="men's clothing")
this.productList=filterData
        }
        else{
            this.productList=data  
        }
    }
    },
    created(){
        this.route = useRoute();
        console.log("the query is",this.$route.query)
        this.getAllProducts()

    }
}
</script>

<template>
    <div style="margin-top: 100px;padding:0 20px;max-width: 1500px;font-family:'Itim', cursive;" class="w-full flex justify-center mx-auto h-min">
       
        <div v-show="isLoader" class="m-auto ">
    <Loader  />
</div>

        <div v-show="!isLoader" class="w-full flex flex-wrap justify-center gap-30">

            <template v-for="(item,index) in productList" :key="index">
                <ProductCard :title="item.title"  :image="item.image" :price="item.price" :productId="item.id" :productData="item"  />
            </template>
        </div>

    </div>
</template>