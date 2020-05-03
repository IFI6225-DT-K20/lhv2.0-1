<template lang="pug">
.footer
	.container
		.row
			.col-12.col-lg-3.footer-mobile-accordion(v-for="link in menuLinks")
				.row
				h3(v-text="link.label")
				ul.list-unstyled
					li(v-for="sublink in link.submenu")
						a(v-bind:href="sublink.link") {{ sublink.label }}
			.col-12.footer-social
					a.social(href="https://www.instagram.com/lhvpank" target="_blank")
						include ../assets/icons/insta.svg
					a.social(href="https://www.facebook.com/LHVPank" target="_blank")
						include ../assets/icons/fb.svg
					a.social(href="https://youtube.com/lhvpank" target="_blank")
						include ../assets/icons/youtube.svg
					a.social(href="https://soundcloud.com/lhvpodcast" target="_blank")
						include ../assets/icons/soundcloud.svg
					.footer-app
						p
							a(href="https://apps.apple.com/app/apple-store/id728359509" class="footer-m-badge" target="_blank")
								include ../assets/elements/app-store-et.svg
							a(href="https://play.google.com/store/apps/details?id=ee.lhv.lhv&referrer=utm_source%3Dcorp%2520web%26utm_term%3Dmobilepage%26utm_campaign%3DMobilePage" class="footer-m-badge" target="_blank")
								include ../assets/elements/google-play-et.svg
		.row
			.col-12.col-lg-10
				#disclaimer
					.disclaimer
						p(v-html="disclaimer")

</template>
<script>
export default {
  name: 'Links',
  data() {
    return {
      menuLinks: [
        {
          label: 'Tule kliendiks',
          submenu: [
            {
              label: 'Eraklient',
              slug: 'eraklient',
              link: 'https://lhv.ee'
            },
            {
              label: 'Äriklient',
              slug: 'ariklient'
            },
            {
              label: 'Noortepank',
              slug: 'noortepank'
            },
            {
              label: 'Lapsekonto',
              slug: 'lapsekonto'
            },
            {
              label: 'Au-klient'
            },
            {
              label: 'Privaatpangandus'
            },
            {
              label: 'Ava konto'
            }
          ]
        },
        {
          label: 'Leia kiirelt',
          submenu: [
            {
              label: 'Hinnakiri ja tingimused',
              slug: 'eraklient',
              link: 'https://lhv.ee'
            },
            {
              label: 'Ettepanekud ja kaebused',
              slug: 'ariklient'
            },
            {
              label: 'Turvalisus',
              slug: 'noortepank'
            },
            {
              label: 'Teata petulehest',
              slug: 'lapsekonto'
            },
            {
              label: 'KKK'
            },
            {
              label: 'Privaatpangandus'
            }
          ]
        },
        {
          label: 'Lhv',
          submenu: [
            {
              label: 'Ettevõttest',
              slug: 'eraklient',
              link: 'https://lhv.ee'
            },
            {
              label: 'Tööpakkumised',
              slug: 'ariklient'
            },
            {
              label: 'Uudised',
              slug: 'noortepank'
            },
            {
              label: 'Investor',
              slug: 'lapsekonto'
            },
            {
              label: 'Finantsportaal'
            }
          ]
        },
        {
          label: 'Kontakt',
          submenu: [
            {
              label: 'Kontaktid',
              slug: 'eraklient',
              link: 'https://lhv.ee'
            },
            {
              label: 'Kontorid',
              slug: 'ariklient'
            },
            {
              label: 'Broneeri kohtumisaeg',
              slug: 'noortepank'
            },
            {
              label: 'Sularahaautomaadid',
              slug: 'lapsekonto'
            }
          ]
        }
      ],
      disclaimer : "© 2001–2020 AS LHV Group, Tartu mnt 2, 10145, Tallinn. Oled finantsteenuseid pakkuvate ettevõtete AS LHV Pank, AS LHV Finance ja AS LHV Varahaldus veebilehel. Ettevõtetel AS LHV Pank, AS LHV Finance ja AS LHV Varahaldus on õigus salvestada kõiki neile sidevahendite teel antud korraldusi ja muud suhtlust ning kasutada vastavaid salvestisi antud korralduste või muude toimingute tõendamiseks. Enne finantsteenuse lepingu sõlmimist tutvu <a href='https://lhv.ee/et/tingimused-ja-hinnakiri'>teenuse tingimustega</a> või küsi lisainfot. Veebilehte ja sellel sisalduvat informatsiooni kasutades nõustud eeltoodud tingimuste ja veebilehe <a href='https://lhv.ee/et/veebilehe-kasutajatingimused'>kasutustingimustega</a>.<a href='https://lhv.ee/et/vaartpaberite-hinnainfo'>Noteeringud on viivitusega</a>."
    }
  }
}
</script>
<style lang="stylus">
.footer
	position absolute
	background #f8f8f8
	font-size 12px
	padding-top 40px
	padding-bottom 30px
	line-height 18px
	right 0
	left 0
	bottom 0
	li
		a
			margin-top 0
			margin-bottom 0
			font-size 14px
			line-height 26px
			text-decoration none
	h3
		margin-top 0
		margin-bottom 0
		font-size 13px
		line-height 26px
		text-transform uppercase
		color #909097
		font-weight 500
	a
		color #000
		font-weight 400
		&:hover
			cursor pointer
			text-decoration none
	p
		font-size 12px
	.social
		padding 1px
		opacity 1
		margin-right 18px
		margin-top 8px
		display inline-block
	.footer-app
		display inline-block
		float right
	.footer-m-badge
		margin 0 4px
	.col-xs-12
		width 100%
	.disclaimer
		color #000
		margin-top 10px
		a
			text-decoration underline
		p
			color #000
			line-height 18px
			opacity .5
</style>