

<script>  
export default{
    name:'Section7',
    data(){
        return{
            servicesList:[
            {
                    image: './services1.png',
                    text: 'Free & Fast <br> Delivery'
                },
                {
                    image: './services2.png',
                    text: '24/7 <br> Support'
                },
                {
                    image: './services3.png',
                    text: 'Secure <br> Payment'
                }
            ]
        }
    }
}

</script>


<template>  

<div style="padding: 20px;"  class="w-full flex flex-col justify-center items-center gap-60 mx-auto">

    <h2>Our Customers get</h2>
    <div class="w-full flex flex-wrap justify-center items-center gap-30 ">
        
<div style="border-radius: 68% 32% 57% 32% / 67% 75% 25% 25%;border: 1px solid gray;" v-for="(item,index) in servicesList" :key="index" class="services-item flex flex-col gap-10 items-center justify-center " >
    <img :src="item.image"   />

    <p v-html="item.text" class="text-center text-xl font-medium"></p>

</div>
    </div>



</div>

</template>


<style scoped>
.services-item{
    width: 200px;
    height:200px;
    min-width: 300px;
}
p{
    font-family: "Itim", cursive;
}
@media (max-width: 380px) {
  .services-item{
    width: 96% !important;
    min-width: auto;
    height: 180px;
    padding: 10px 0;
  }
  }
</style>