<template>
  <div class="carousel">
    <component
      :is="slickComp"
      ref="slick" 
      :options="slickOptions"
    >
      <a href="img(:src="require('../assets/images/headers/ariklient-bg.svg')")">
        <img src="require('../assets/images/headers/ariklient-bg.svg')" alt="">
      </a>
        ...
      <a href="http://placehold.it/420x220">
        <img src="http://placehold.it/420x220" alt="">
      </a>
    </component>
  </div>
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