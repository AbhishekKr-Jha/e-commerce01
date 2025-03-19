<script>
export default{
    name:'Section6',
    data(){
        return{
            jeweleryData:[
            {
"id": 5,
"title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
"price": 695,
"description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
"category": "jewelery",
"image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
"rating": {
"rate": 4.6,
"count": 400
}
},{
"id": 6,
"title": "Solid Gold Petite Micropave ",
"price": 168,
"description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
"category": "jewelery",
"image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
"rating": {
"rate": 3.9,
"count": 70
}
},
            ]
        }
    }
}
</script>

<template>

<div style="max-width: 1500px;" class="w-full flex flex-wrap justify-center gap-30 mx-auto ">

    <div style=""  class="rounded-lg flex flex-col items-center gap-30 relative jewellery-container">

<div class="img-container w-full ">
    <img src="/jewellery3.png" width="100%" height="100%" class="object-fit-contain" />
</div>

<p class="absolute font-bold price-text"> <span>${{jeweleryData[0].price}} /- </span> only</p>

<div style="  font-family: 'Itim', cursive;" class="text-xl font-semibold description-container">
    <button  @click="$router.push({path:'/product-details',query:{id:jeweleryData[0].id}})" type="button" style=""  class="absolute text-lg pointer buy-button buy-button2">Buy Now<i style="margin-left: 5px;" class="ri-arrow-right-line text-xl"></i></button>
    <p>{{jeweleryData[0].title}}</p>
</div>
    </div>



    <div  class="rounded-lg flex flex-col items-center gap-30  overflow-hidden relative  jewellery-container">

<div class="img-container w-full ">
    <img src="/jewellery5.png" width="145%" height="100%" class=" object-fit-contain -left-40" style="transform:translateX(-30px) rotate(100deg);" />
</div>

<p class="absolute font-bold price-text"> <span>${{jeweleryData[1].price}} /- </span> only</p>

<div style="  font-family: 'Itim', cursive;" class="text-xl font-semibold description-container">
    <button @click="$router.push({path:'/product-details',query:{id:jeweleryData[1].id}})" type="button" style=""  class="absolute text-lg pointer buy-button buy-button2">Buy Now<i style="margin-left: 5px;" class="ri-arrow-right-line text-xl"></i></button>
    <p>{{jeweleryData[1].title}}</p>
</div>
    </div>


</div>

</template>


<style scoped>
.jewellery-container{
    width: 46%;
    min-width: 350px;
    padding: 30px;
    /* height: 600px; */
    /* height: max-content; */
    background: #a8d2f2;
}
.img-container{
    width: 100%;
max-width: 250px;
height: 400px;
/* max-height: 400px; */
}
.price-text{
  bottom: 180px;
  left:50px;
  font-size: 36px;
  font-family: "Itim", cursive;
color: rgb(67, 65, 65);
}


@media (max-width: 750px) {
  .jewellery-container {
    width: 95%;
min-width: auto;
}
}

@media (max-width: 500px) {
h2{
  font-size: 40px;
}
.jewellery-container{
    padding: 15px;
}
.buy-button2{
    bottom: 95px;
}
.description-container{
font-size: 18px;
}

.price-text{
    left: 20px;
    font-size: 32px;
    bottom: 150px;
}
}
</style>