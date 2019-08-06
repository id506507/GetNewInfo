<template>
    <div class="container">
        <div v-for="(item,index) in Data.body.message" :key="index">
            <div class="Tcard">
                <div v-if="lang =='tc'">{{item.ChinText}}</div>
                <div v-else-if="lang=='en'">{{item.EngText}}</div>
                <div>{{item.ReferenceDate}}</div>
            </div>
            
        </div>
        
    </div>
</template>
<script lang="ts">
import { Vue,Component,Watch } from "nuxt-property-decorator";
import axios from 'axios';
import moment from 'moment';
import x2js from 'x2js';
const X2js=new x2js();
@Component
export default class WeatherDetail extends Vue{
    lang=this.$store.state.locale
    async asyncData(){
        let proxyUrl='http://alloworigin.com/get?url='
        let data=await axios.get('http://resource.data.one.gov.hk/td/tc/specialtrafficnews.xml');
        return {
            Data:X2js.xml2js(data.data),
        }
        
    }
}
</script>
<style>
.Tcard{
    width: 100%;
    border:none;
    margin-bottom: 1%;
    box-shadow: 0 1px 3px 0;
    border-radius:6px;
}
</style>