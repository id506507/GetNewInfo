<template>
    <div class="container">
        {{jsonObj}}
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
    
    xmlText = "<MyRoot><test>Success</test><test2><item>val1</item><item>val2</item></test2></MyRoot>";
    links='http://resource.data.one.gov.hk/td/tc/specialtrafficnews.xml'
    jsonObj = X2js.xml2js('http://resource.data.one.gov.hk/td/tc/specialtrafficnews.xml');
    
    
    // async asyncData(){
    //     let data=await axios.get(' http://resource.data.one.gov.hk/td/tc/specialtrafficnews.xml')
    // }
}
</script>
<style>

</style>