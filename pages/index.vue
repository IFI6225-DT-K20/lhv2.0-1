<template lang="pug">
.container
	Header
	Navbar
	Carousel
	News
	Footer
</template>

<script>
import Header from '~/components/Header.vue'
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
	News
  }
}
</script>