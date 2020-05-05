<template>
<div class="p-0">
	<b-carousel
	id="carousel"
	v-model="slide"
	:interval="3500"
	controls
	fade
	indicators
	@sliding-start="onSlideStart"
	@sliding-end="onSlindeEnd">
	<div class="slides" v-for="slide in slides" :key="slide.id">
		<b-carousel-slide class="test" :img-src="slide.url" :text="slide.text" :caption="slide.heading">
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
					url: 'https://www.lhv.ee/assets/images/headers/LK-bg.svg',
					heading: 'Investeeri koduturule',
					text: 'Siia'
				},
				{
					id: 1,
					url: 'https://www.lhv.ee/assets/images/headers/ariklient-bg.svg',
					heading: 'Võida topeltpalk',
					text: 'Siia ka'
				},
				{
					id: 2,
					url: 'https://www.lhv.ee/assets/images/headers/palkyle-bg.svg',
					heading: 'Ava lapsele konto äpis',
					text: 'Ja siia ka'
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
<style lang="stylus">	
.test
	max-height 500px
	transform: translate(-50%, -50%)
	position relative
	img
		height auto
		width 100%
</style>