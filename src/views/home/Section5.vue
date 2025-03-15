
<script> 
export default{
    name:'Section5',
    data(){
        return{
            electricalList:[
            {
"id": 9,
"title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
"price": 64,
"description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
"category": "electronics",
"image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
"rating": {
"rate": 3.3,
"count": 203
}
},
{
"id": 10,
"title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
"price": 109,
"description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
"category": "electronics",
"image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
"rating": {
"rate": 2.9,
"count": 470
}
},
{
"id": 11,
"title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
"price": 109,
"description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
"category": "electronics",
"image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
"rating": {
"rate": 4.8,
"count": 319
}
},
{
"id": 12,
"title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
"price": 114,
"description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
"category": "electronics",
"image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
"rating": {
"rate": 4.8,
"count": 400
}
},
{
"id": 13,
"title": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
"price": 599,
"description": "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
"category": "electronics",
"image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
"rating": {
"rate": 2.9,
"count": 250
}
}
            ]
        }
    }
}


</script>



<template>

<div  class="w-full flex flex-col items-center">

<h2>The latest technology</h2>
<div style="padding: 10px 10px;" class="w-full flex justify-center flex-nowrap gap-10 overflow-x-auto hide-scrollbar">
    <div style="flex-shrink: 0" v-for="(item,index) in electricalList" :key="index" class="boxes rounded-lg flex flex-col justify-center  items-center">
<div style="flex-shrink: 0;padding: 15px 15px 0px 15px;"  class="w-full  flex justify-center items-end relative item-box">
<img :src="item.image" width="100%" height="90%" style="object-fit: contain;" class="absolute bottom-0" />
</div>
<p  class="text-lg font-semibold mt-20">{{ item.title }}</p>
</div>
</div>

<button style="" type="button"  class="rounded-lg pointer text-lg mt-20" >See More</button>


</div>


</template>


<style scoped>
.boxes{
width: 400px;
overflow: hidden;
padding: 20px;
}
.item-box{
    height: 250px;
}

p{
    margin: 10px auto;
    text-align: center;
    width: 250px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
}

@media (max-width: 450px) {
.boxes{
    width: 110%;
}
.item-box{
    /* height: 100px; */
}
p{display: none;}
}

</style>