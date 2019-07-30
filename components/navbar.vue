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
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <button class="btn btn-outline-light" @click="changeLanguage('hk')">中文</button>&nbsp;      
                <button class="btn btn-outline-light" @click="changeLanguage('en')">ENGLISH</button>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    
        <!-- <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <nuxt-link to="/" class="nav-link">{{$t('index')}}</nuxt-link>
                    </li>
                    <li class="nav-item active">
                        <nuxt-link to="/aedwtdata" class="nav-link">{{$t('waiting')}}</nuxt-link>
                    </li>
                    <li class="nav-item active">
                        <nuxt-link to="/sop" class="nav-link">{{$t('sop')}}</nuxt-link>
                    </li>
                    <li class="nav-item active">
                        <nuxt-link to="/weather" class="nav-link">{{$t('weather')}}</nuxt-link>
                    </li>
                    <li class="nav-item active">
                        <nuxt-link to="/weather_detail" class="nav-link">{{$t('weather_detail')}}</nuxt-link>
                    </li>
                </ul>
            </div>
        </nav> -->
    </div>
</template>
<script lang="ts">
import { Vue } from "nuxt-property-decorator";
import Vuei18n from 'vue-i18n'
export default class NavBar extends Vue{
    changeLanguage(lang){
        this.$i18n.locale=lang;
    }
}
</script>
<style>
 .btn{
     font-size: 70%;
 }
 /* .nav{
     margin-bottom: 8%;
 } */
</style>

