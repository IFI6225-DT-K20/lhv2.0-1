<template lang="pug">
.navbar.navbar-default.light-shadow.container-fluid.d-none.d-md-block.text-center
    ul.navbar-nav(role="navigation")
        li
            a.dropdown-toggle(aria-expanded="true" data-toggle="dropdown" v-for="(link, i) in importantLinks" :key="i") {{link.text}}
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
.dropdown-toggle::after
    display: none

.navbar-default
    padding-left 0
    padding-right 0
    margin-bottom 0
    background #f2f2f3
    border none 
    border-radius 0
    a
        padding-bottom 17px
        font-size 13px  
        line-height 37px
        padding-left 12px
        padding-right 12px
        font-weight 600


.light-shadow
    box-shadow 0 1px 2px rgba(0,0,0,0.1)
</style>