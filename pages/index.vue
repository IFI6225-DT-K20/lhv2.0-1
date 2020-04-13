<template lang="pug">
.container
	Header
	Navbar
	OwlCarousel
	News
	Footer
</template>

<script>
import Header from '~/components/Header.vue'
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'
import OwlCarousel from '~/components/OwlCarousel.vue'
import News from '~/components/News.vue'

export default {
  components: {
	Header,
	Navbar,
	Footer,
	OwlCarousel,
	News
  }
}
</script>