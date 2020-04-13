<template lang="pug">
.container
	.row
		.col-xs-12.col-md-10.col-md-offset1
			ul(v-for="item in newsList" :key="item.id")
				h3 {{item.heading}}
					p {{item.text}}
						a(href="item.href") {{item.link}}
</template>
<script>
export default {
	name: 'News',
	data() {
		return {
			newsList: [
				{
					id: '1',
					heading: 'LHV tööajad ülestõusmispühade ajal',
					text: 'Seoses ülestõusmispühadega on LHV tööajad ja maksete liikumine tavalisest erinevad. Palume klientidel muudatustega arvestada.',
					link: 'Loe edasi',
					href: 'https://www.lhv.ee/et/uudised/2020/16'
				},
				{
					id: '2',
					heading: 'LHV Pank lihtsustas maksepuhkuste andmist',
					text: 'Majandusseisaku tingimustes on suur hulk laenuklientidest küsimas pankadelt maksepuhkusi. LHV Pank võimaldab klientidele maksepuhkusi lihtsustatud korras, teisi tingimusi muutmata ja tasuta.',
					link: 'Loe edasi',
					href: 'https://www.lhv.ee/et/uudised/2020/15'
				}
			]
		}
	},

}
</script>
