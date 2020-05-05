<template lang="pug">
div
	Header
	Login
	Navbar
	Slides
	News
	Footer
</template>

<script>
import Header from '~/components/Header.vue'
import Login from '~/components/Login.vue'
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'
import News from '~/components/News.vue'
import Slides from '~/components/Slides.vue'

export default {
  components: {
	Header,
	Navbar,
	Footer,
	News,
	Login,
	Slides
  }
}
</script>
