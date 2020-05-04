<template>
	<carousel class="owl-carousel" :autoplay="true" :items="3" :loop="true">
		<img src="../assets/images/headers/ariklient-bg.svg" alt="">
    <img src="../assets/images/headers/tasuta-bg.svg" alt="">
	</carousel>
</template>
<script> 
  export default {
    data: () => ({
        'slickComp': '',
    }),
    components: {
        Slick: () => import('vue-slick')
    },
    mounted: function () {
        this.$nextTick(function () {
           this.slickComp = 'Slick'
        })
    },
  }
</script>