<template>
	<carousel :autoplay="true">
		<img src="../assets/elements/app-store-et.svg" alt="">
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