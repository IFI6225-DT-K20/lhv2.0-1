<template lang="pug">
#login.collapse.collapse.in.d-none.d-md-block
	.form-inline
		.form-group
			.nav.login-pills(@click="makeRed" id="mybutton")
				li
					a(href="#") ID-kaart
					a(href="#") Mobiil-ID
				li.active
					a(href="#") Smart-ID
				li
					a(href="#") PIN-kalkulaator
					a(href="#") Salasõna
		.form-group
			form(id="login-form" method="POST" action="/auth/login.cfm" autocomplete="off")
				input.form-control(id="login-nickname" type="text" name="nickname" placeholder="Kasutajanimi" autofocus="")
				button.btn.btn-dark(id="login-submit" disabled="disabled") Sisene
				input.form-control(id="login-type" type="hidden" name="login_type" value="SID")
				input.form-control(type="hidden" name="l3" value="et")
</div>
</template>
<script>
/*eslint-env jquery*/
export default {
	name: 'Login',
	data() {
		return {
		}
	},
	methods: {
		makeRed() {
			$("mybutton").addClass(".red")
		}
	},
}
</script>
<style lang="stylus">
#login
	background #f4f4f4
	border-bottom 1px solid rgba(255,255,255,0.9)
	display flex!important
	justify-content center
	.login-pills
		position relative
		margin-top 20px
		margin-bottom 20px
		z-index 1

		li:first-child
			border-left 1px solid #c2c2c5;
			border-top-left-radius 4px;
			border-bottom-left-radius 4px;
		li:last-child
			border-right 1px solid #c2c2c5;
			border-top-right-radius 4px;
			border-bottom-right-radius 4px;
		li
			display inline-block
			padding 2px
			float none 
			border-top 1px solid #c2c2c5
			border-bottom 1px solid #c2c2c5
			.active
				padding 0
				z-index 2
				background-color: red
				a
					background-color: #c2c2c5
					font-size 50px
			a
				padding 0 12px
				font-size 12px
				line-height 30px
				text-decoration none
				font-weight 600
				background-color inherit
				border none 
				border-radius 0
				color #000000
	form
		position relative
		input
			margin-right 8px
			margin-left 12px
			padding-left 12px
			width 180px
			height 36px
			font-size 12px
			font-weight 500
			line-height 1.2
			background-repeat no-repeat
			background-position 7px center
			border 1px solid #c2c2c5
			box-shadow none
		button
			padding-top 6px !important
			padding-bottom 6px !important
			color #fff
			background-color #3b3b47
			font-size 14px
			font-weight 500
			text-decoration none


	@media (min-width 768px)
		.form-inline.form-group{
			display inline-block
			margin-bottom 0
			//vertical-align middle
		}
.nav
	padding-left 0
	list-style none
.btn-dark
	letter-spacing -.2px
	padding 8px 16px !important
.btn-dark[disabled]
	background #d0d2d5
.btn[disabled]
	cursor not-allowed
	box-shadow none 
	opacity .65
a
	color #000
	font-family 5
.form-inline
	text-align center
.red
	border 1px solid red
</style>
