<template>
<div class="container">
	<b-carousel
	id="carousel"
	v-model="slide"
	:interval="3500"
	controls
	indicators
	@sliding-start="onSlideStart"
	@sliding-end="onSlindeEnd">
	<div v-for="slide in slides" :key="slide.id">
		<b-carousel-slide :img-src="slide.url">
		</b-carousel-slide>
	</div>
	</b-carousel>
</div>
</template>
<script>
export default {
	data() {
		return {
			slide: 0,
			sliding: 0,
			slides: [
				{
					id: 0,
					url: 'https://www.lhv.ee/assets/images/headers/ariklient-bg.svg'
				},
				{
					id: 1,
					url: 'https://www.lhv.ee/assets/images/headers/LK-bg.svg'
				},
				{
					id: 2,
					url: 'https://www.lhv.ee/assets/images/headers/palkyle-bg.svg',
					
				}
			]
		}
	},
	methods: {
		onSlideStart(slide) {
			this.sliding = true
		},
		onSlindeEnd(slide) {
			this.sliding = false
		}
	}
}
</script>
<style scoped>
.container {
	margin: 0 auto;
}

</style>