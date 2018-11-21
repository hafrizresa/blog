<template>
    <div id="wraper">
        <div id="layer">
            <div id="app">
                <div style="background: #eee; height:30px" class="d-flex justify-content-end">
                </div>
                <side-nav v-bind:isLogin="isLogin" @logOut="logOut" style="position: fixed" />
                <div id="nav">
                    <h1>INI LOGO WEBNYA</h1>
                </div>
                <router-view @isLogin='isLogin = true' @emitedArticle="emitedArticle" :detailArticle="detailArticle" />
            </div>
        </div>

        <chatbox/>
    </div>
</template>

<script>
    import navbar from '@/components/navbar'
    import sideNav from '@/components/sideNav.vue'
    import chatbox from '@/views/chatBox'
    import { functions } from 'firebase'
    import db from './assets/config.js'

    export default {
        data() {
            return {
                isLogin: false,
                detailArticle: '',
                userLogedIn: localStorage.getItem('user')
            }
        },
        components: {
            navbar,
            sideNav,
            chatbox
        },
        methods: {
            logOut() {
                this.isLogin = false
            },
            emitedArticle(data) {
                this.detailArticle = data
            }
        },
        mounted() {
            if (localStorage.getItem('token') != undefined) {
                this.isLogin = true
            }


        }
    }
</script>

<style>
    #layer {
        background-color: rgba(0, 0, 0, 0.436);
        min-height: 750px
    }

    #wraper {
        background-image: url('./assets/2.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        min-height: 750px
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #f0f0f0;
    }

    #nav {
        padding: 30px;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    }
</style>