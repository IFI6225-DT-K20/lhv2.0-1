<template lang="pug">
.text-center
    #main-menu.navbar.navbar-default.light-shadow.container-fluid.hidden-xs
            ul.nav.navbar-nav(role="navigation")
                li.dropdown
                    a.dropdown-toggle(aria-expanded="false" data-toggle="dropdown" v-for="(link, i) in importantLinks" :key="i" href="link.href") {{link.text}}
</template>
<script>
export default {
    name: 'Navbar',
    data() {
        return {
        importantLinks: [
            {
            text: 'IGAPÄEVAPANGANDUS',
            href: 'https://vuetifyjs.com',
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
#main-menu
    z-index: 101;
.navbar
    line-height: 12px;
.navbar-default
    padding-left 0
    padding-right 0
    margin-bottom 0
    background #f2f2f3
    border none 
    border-radius 0
.light-shadow
    box-shadow 0 1px 2px rgba(0,0,0,0.1)
</style>