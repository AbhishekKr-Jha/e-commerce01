


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

    <div style="padding-left: 5px;" class="home-section1-container mx-auto pt-20  flex  justify-center items-center overflow-x-auto gap-60 hide-scrollbar">

        <!-- <div v-for="ele in servicesList" :key="ele.text" class="">
<img :src="ele.img" width="100px" />
<p>{{ ele.text }}</p>
          </div> -->


          <div v-for="ele in servicesList" :key="ele.text" style="flex-shrink: 0;" class="inner-items flex justify-center items-center">
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
    width: 130px;
   height: 50px;

   }


</style>

