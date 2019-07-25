<template>
    <div class="container">
        <div class="title">{{$t('waiting')}}</div>
        <div v-for="(value,key,index) in Waiting.waitTime" :key="index" class="list">
            {{value.hospName}}：{{value.topWait}}
        </div>
        <div class="update">更新時間：{{Waiting.updateTime}}&nbsp;({{$t('update')}})</div>
    </div>
</template>
<script lang="ts">
import { Vue,Component } from "nuxt-property-decorator";
import axios from 'axios';
import Vuei18n from 'vue-i18n'
Vue.use(Vuei18n);
const i18n=new Vuei18n();
@Component
export default class UsefulPage extends Vue{
    
    async asyncData(lang:string){
        const proxyurl='https://test.cors.workers.dev/?';
        let [tc,en]=await Promise.all([
            axios.get(proxyurl+'https://www.ha.org.hk/opendata/aed/aedwtdata-tc.json'),
            axios.get(proxyurl+'https://www.ha.org.hk/opendata/aed/aedwtdata-en.json')
        ])
        console.log(i18n.locale)
        switch(i18n.locale){
            case 'hk':
                return {Waiting:tc.data}
            case 'en':
                return {Waiting:en.data}
                default:
                    return {Waiting:tc.data}
        }
        
    }
}
</script>
<style>
.list{
    margin-bottom: 1%;
}
.update{
    margin-top: 1%;
    margin-bottom: 1%;
}
.title{
    font-weight: bold;
    font-size: 110%;
    margin-bottom: 1%;
    color:crimson;
}
</style>
