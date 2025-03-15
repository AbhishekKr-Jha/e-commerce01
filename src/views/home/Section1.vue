


<script> 
export default{
    name:'Section1',
    data(){
        return{
            servicesList:[
                {
                    img: '/fashion1.png',
                    text:"Men  "
                },
                 {
                    img: '/electronics.png',
                    text:" Electronics"
                },
                 {
                    img: '/fashion1.png',
                    text:"Appliances "
                },
                 {
                    img:'/mobile.png' ,
                    text:" Mobiles"
                },
                 {
                    img:'/more.png' ,
                    text:"More "
                },
                {
                    img: '/electronics.png',
                    text:" Women"
                },
            ]
        }
    }

}


</script>

<template>

    <div  class="home-section1-container mx-auto pt-20  flex  justify-center items-center overflow-x-auto gap-60 hide-scrollbar">

        <!-- <div v-for="ele in servicesList" :key="ele.text" class="">
<img :src="ele.img" width="100px" />
<p>{{ ele.text }}</p>
          </div> -->


          <div v-for="ele in servicesList" :key="ele.text" style="flex-shrink: 0;" class="inner-items text-xl flex justify-center items-center pointer">
            <p>{{ ele.text }}</p> 
          </div>



    </div>

</template>


<style scoped>


.home-section1-container{
    width: 90%;
    max-width: 800px;

   }

   .inner-items{
    background: #F3F3F3;
    width: 140px;
   height: 50px;
   border-radius: 25px;
   background: rgb(1,84,154);
   font-family: "Itim", cursive;
color:white ;
   }


</style>

