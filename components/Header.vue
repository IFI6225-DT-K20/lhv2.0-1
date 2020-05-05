<template lang="pug">
.corp-nav.container-fluid
    .row
        .container
            .row
                .col-12.col-xl-10.offset-xl-1
                    a.logo.float-left(href="#")
                        img(src="../assets/images/lhv-logo.svg" width="84" height="28" alt="LHV logo")
                    .float-left.d-none.d-md-block
                        a.corp.active(:href="/#/") Pank
                        br
                        a.corp(href="https://fp.lhv.ee/?locale=et") Finantsportaal
                        br
                        a.corp(href="https://investor.lhv.ee/et/") Investor
                    .float-right.d-none.d-md-block
                        a.language(id="open-account" href="https://www.lhv.ee/registration/cob/index.cfm?l3=et") Ava Konto
                        a.language.active(id="login-toggle" href="javascript:void(0)" aria-expanded="false" target="_blank") Sisene
                        a.language.set-language(href="/en" data-language="en") en
                        a.language.set-language(href="/ru" data-language="ru") ru
                    a.btn.btn-dark.float-right.d-md-none(href="/#/") Sisene
</template> 
<style lang="stylus" scoped>
.corp-nav
    position relative
    z-index 1
    padding-top 20px
    padding-bottom 20px
    background: #fff
    height 100px
    text-transform uppercase
    font-size 11px
    line-height 20px
    a
        color: #000
        text-decoration none
        font-weight 400
        &:hover
            color #73737b
    a.active
        color #000
        font-weight 700
    a.logo
        padding-left 0
        padding-right 40px
        line-height 60px
    a.btn
        font-size 12px
        line-height 18px
        color: #fff
        background #3b3b47
    a.language
        margin-left 20px
        line-height 60px
        white-space nowrap
.container-fluid
    padding-right 15px
    padding-left 15px
    margin-right auto
    margin-left auto

.row
    margin-right -15px
    margin-left -15px
.btn-dark
    font-weight 600
    letter-spacing: -.2px
    padding: 8px 16px !important
    margin-top 14px
.btn
    display: inline-block
    margin-bottom 0
    vertical-align middle
    
</style>