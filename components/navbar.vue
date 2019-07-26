<template>
    <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
        <!-- <nuxt-link to="/" class="navbar-brand">Navbar</nuxt-link> -->
        <div class="collapse navbar-collapse">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <nuxt-link to="/" class="nav-link">{{$t('index')}}</nuxt-link>
                </li>
                <!-- <li class="nav-item active">
                    <nuxt-link to="/aedwtdata" class="nav-link">{{$t('waiting')}}</nuxt-link>
                </li>
                <li class="nav-item active">
                    <nuxt-link to="/sop" class="nav-link">{{$t('sop')}}</nuxt-link>
                </li> -->
                <li class="nav-item active">
                    <nuxt-link to="/weather" class="nav-link">{{$t('weather')}}</nuxt-link>
                </li>
            </ul>
            <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                    <button class="btn btn-outline-light" @click="changeLanguage('hk')">中文</button>       
                    <button class="btn btn-outline-light" @click="changeLanguage('en')">ENGLISH</button>
                </li>
            </ul>
        </div>
    </nav>
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
</style>

