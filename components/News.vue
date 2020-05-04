<template lang="pug">
#content(style="padding-bottom: 433px;")
	.container
		.row
			.col-12.col-lg-10.offset-lg-1
				.row
					ul.col-md-4(v-for="item in newsList" :key="item.id")
						h3 {{item.heading}}
						p {{item.text}}
						a.arrow(href="item.href") {{item.link}}
</template>
<script>
export default {
	name: 'News',
	data() {
		return {
			newsList: [
				{
					id: '1',
					heading: 'Nüüd saab lapsele konto avada mugavalt LHV mobiiliäpis',
					text: 'Aasta alguses teatas LHV võimalusest avada lapsele konto kodust lahkumata internetipangas. Nüüd on see lapsevanemale veelgi mugavam – lapsele saab konto avada ka meie mobiiliäpis.',
					link: 'Loe lisa',
					href: 'https://www.lhv.ee/et/uudised/2020/16'
				},
				{
					id: '2',
					heading: 'LHV tööajad 1. mail',
					text: 'Reedel, 1. mail on LHV kliendikontorid ja -tugi suletud. Palume klientidel muudatustega arvestada. Pangasisesed- ja pankade vahelised välkmaksed toimivad tavapäraselt ööpäev läbi, kuid Euroopa- ja välismakseid sel päeval teha ei saa. Kui soovid, et sinu makse laekuks kindlasti kevadpühaks, sisesta see hiljemalt neljapäeval enne kella 16.30.',
					link: 'Loe lisa',
					href: 'https://www.lhv.ee/et/uudised/2020/15'
				},
				{
					id: '3',
					heading: 'Kuula LHV Podcasti',
					text: 'Siia tuleb uus list loopida',
					text2: 'Siia tuleb uus list loopida',
					link: 'Kuula kõiki',
					href: 'https://www.lhv.ee/et/uudised/2020/15'
				}
			]
		}
	},

}
</script>
<style lang="stylus">
#content
	background-color #fff

h3
	margin-top 50px
	margin-bottom 20px
	font-size 22px
	line-height 32px
	font-weight 600
	color #000
	cursor pointer
p
	font-size 16px
	line-height 26px
	color #000
	font-weight 300
	cursor pointer
a
	cursor pointer
	&:hover
		text-decoration none
		color #73737b
a.arrow
	&:after
		content ' →'
		font-family 'Minion Pro', 'Arial, Helvetica, sans-serif'

</style>
