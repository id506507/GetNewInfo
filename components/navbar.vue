<template>
    <div class="nav">
        <b-navbar toggleable="lg" type="dark" variant="dark" class="fixed-top">
            <b-navbar-brand to="/">
                <img src="~/static/Self_Icon.png"/>
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <!-- <b-nav-item to="/aedwtdata">{{$t('waiting')}}</b-nav-item>
                <b-nav-item to="/sop">{{$t('sop')}}</b-nav-item> -->
                <b-nav-item to="/weather">{{$t('weather')}}</b-nav-item>
                <b-nav-item to="/weather_detail">{{$t('weather_detail')}}</b-nav-item>
                <b-nav-item to="/weather_forecast">{{$t('weather_forecast')}}</b-nav-item>
                <!-- <b-nav-item to="/traffic">{{$t('traffic')}}</b-nav-item> -->
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <button class="btn btn-outline-light" @click="changeLanguage('tc')">中文</button>&nbsp;      
                <button class="btn btn-outline-light" @click="changeLanguage('en')">ENGLISH</button>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>
<script lang="ts">
import { Vue } from "nuxt-property-decorator";
import Vuei18n from 'vue-i18n'
export default class NavBar extends Vue{
    changeLanguage(lang){
        this.$i18n.locale=lang;
        this.$store.commit('set_Lang',lang);
        document.cookie='locale='+lang;
        // location.reload();//因為每次設定完就強制reload，所以一定可以換language
    }
}
</script>
<style>
 .btn{
     font-size: 70%;
 }
 /* .nav{
     color: black;
 } */
</style>

