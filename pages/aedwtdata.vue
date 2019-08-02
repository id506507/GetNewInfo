<template>
    <div class="container">
        getLocale:{{getLocale()}}<br>
        i18n.locale:{{this.$i18n.locale}}<br>
        store:{{this.$store.state.locale}}<br>
        asyncData:{{Result}}<br>
        <b-table id="my-table" :items="Data" :per-page="per_page" :current-page="currentPage"></b-table>
        <b-pagination v-model="currentPage" :total-rows="total" :per-page="per_page" aria-controls="my-table" align="center"></b-pagination>
    </div>
</template>
<script lang="ts">
import { Vue,Component } from "nuxt-property-decorator";
import axios from 'axios';
import Vuei18n from 'vue-i18n';
Vue.use(Vuei18n);
const i18n=new Vuei18n();
@Component({
    // watchQuery:['page']
})
export default class UsefulPage extends Vue{
    currentPage:number=1;
    per_page:number=3;
    async asyncData({store}){
        console.log("asyncData "+store.state.locale)
        let query=""
        if(store.state.locale=='hk')
        {
            query='https://api.myjson.com/bins/62f7x'
        }
        else if(store.state.locale=='en')
        {
            query='https://api.myjson.com/bins/s1bfx'
        }
        else
        {
            query='https://api.myjson.com/bins/62f7x'
        }
        let [result,output]=await Promise.all([
            axios.get(query),
            axios.get('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=tc'),
            console.log("query "+store.state.locale)
        ])
        return{
            Data:output.data.rainfall.data,
            total:Object.keys(output.data.rainfall.data).length,//找array長度
            Result:store.state.locale
        }
    }
    //  https://api.myjson.com/bins/wh27p
    getLocale():string{
        console.log(this.$i18n.locale)
        switch(this.$i18n.locale){
            case 'hk':
                return 'HK'
            case 'en':
                return 'EN'
                default:
                    return 'NO'
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
