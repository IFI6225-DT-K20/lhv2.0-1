<template lang="pug">
#corp-nav.corp-nav.container-fluid
    .row
        .router-view
            .container
                .row
                    .col-xs-12-col-lg-10.col-lg-offset-1
                        a.logo.pull-left(href="#")
                            img(src="../assets/images/lhv-logo.svg" width="84" height="28" alt="LHV logo")
                        .pull-left
                            a.corp.active(:href="/#/") Pank
                            br
                            a.corp(href="https://fp.lhv.ee/?locale=et") Finantsportaal
                            br
                            a.corp(href="https://investor.lhv.ee/et/") Investor
                        .pull-right
                            a.hidden-xs.language(id="open-account" href="https://www.lhv.ee/registration/cob/index.cfm?l3=et") Ava Konto
                            a.language.hidden-xs(id="login-toggle" href="javascript:void(0)" aria-expanded="false" target="_blank") Sisene
                            a.hidden-xs.language.set-language(href="/en" data-language="en") en
                            a.hidden-xs.language.set-language(href="/ru" data-language="ru") ru
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
        color: #00000f
        text-decoration none
    a.active
        color #00000f
        font-weight 600
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
        white-space nowrap
.container-fluid
    padding-right 15px
    padding-left 15px
    margin-right auto
    margin-left auto
    .row
        display block
        margin-right -15px
        margin-left -15px
.pull-left
    float left 
.pull-right
    float: right
.btn-dark
    font-weight 600
    letter-spacing: -.2px
    padding: 8px 16px !important
.btn
    display: inline-block
    margin-bottom 0
    vertical-align middle
    
</style>