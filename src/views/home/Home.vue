
<script> 
    import PrimaryBanner from '../../components/PrimaryBanner.vue'
import Section1 from './Section1.vue'
import Section2 from './Section2.vue'
import Section3 from './Section3.vue'
import Section4 from './Section4.vue'
import Section5 from './Section5.vue'
import Section6 from './Section6.vue'
import Section7 from './Section7.vue'

export default{
    name:'Home',
    components:{
        PrimaryBanner,
        Section1,
        Section2,
        Section3,
        Section4,
        Section5,
        Section6,
        Section7
    }
}
</script>


<template>
<PrimaryBanner />
<div style="margin-top:550px;margin-bottom:100px;" class="w-full h-min   flex flex-col gap-30 " >

    <!-- section ategories man , woman, jewelery etc----- -->
<Section1 />  
<!-- ---------slider and rotating boxes-------- -->
<Section2 />
<!-- ---------man & woman trends section------ -->
<Section3 />
<Section4 />
<Section5 />
<Section6 />
<Section7 />

</div>

</template>