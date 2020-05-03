<template lang="pug">
#main-menu.navbar.navbar-default.light-shadow.container-fluid.d-none.d-md-block
    .text-center
        ul.nav.navbar-nav(role="navigation")
            li.dropdown
                a.dropdown-toggle(aria-expanded="true" data-toggle="dropdown" v-for="(link, i) in importantLinks" :key="i") {{link.text}}
                .dropdown-menu
                    .container
                        .menu-table.col-md-10.col-md-offset-1
                            table
                                tbody
                                    tr
                                        td(style="width:25%")
                                            h3 Tule kliendiks




</template>
<script>
export default {
    name: 'Navbar',
    data() {
        return {
        importantLinks: [
            {
            text: 'IGAPÄEVAPANGANDUS',
            href: 'et/igapäevapangandus',
            },
            {
            text: 'RAHA KASVATAMINE',
            href: 'https://community.vuetifyjs.com',
            },
            {
            text: 'LAEN JA LIISING',
            href: 'https://madewithvuejs.com/vuetify',
            },
            {
            text: 'PENSION',
            href: 'https://twitter.com/vuetifyjs',
            },
            {
            text: 'VAJAD ABI?',
            href: 'https://medium.com/vuetify',
            }
      ]
        }
    },
}
</script>
<style lang="stylus">
.navbar .navbar-nav
        line-height 14px
        float none
.navbar-nav
    li
        a
            line-height 20px
.navbar-default
    padding-left 0
    padding-right 0
    margin-bottom 0
    background #f2f2f3
    border none 
    border-radius 0
    .dropdown
        position static
        .dropdown-menu
            margin-top 15px
            padding-top 20px
            left 0
            right 0
            background none 
            border 0
            box-shadow none
.light-shadow
    box-shadow 0 1px 2px rgba(0,0,0,0.1)
#main-menu .navbar-nav
    display inline-block
</style>