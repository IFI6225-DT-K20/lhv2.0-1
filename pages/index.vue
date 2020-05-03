<template lang="pug">
div
	Header
	Login
	Navbar
	Carousel
	News
	Footer
</template>

<script>
import Header from '~/components/Header.vue'
import Login from '~/components/Login.vue'
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'
import Carousel from '~/components/Carousel.vue'
import News from '~/components/News.vue'

export default {
  components: {
	Header,
	Navbar,
	Footer,
	Carousel,
	News,
	Login
  }
}
</script>
<style lang="stylus">
#wrapper
	min-height 100%
	position relative
	padding 0
	width inherit 
	overflow hidden
</style>