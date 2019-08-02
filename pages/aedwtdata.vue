<template>
    <div class="container">
        getLocale:{{getLocale()}}<br>
        locale:{{this.$i18n.locale}}<br>
        store:{{this.$store.state.locale}}<br>
        asyncData:{{result.name}}<br>
        getData:{{result.name}}
    </div>
</template>
<script lang="ts">
import { Vue,Component } from "nuxt-property-decorator";
import axios from 'axios';
import Vuei18n from 'vue-i18n';
Vue.use(Vuei18n);
const i18n=new Vuei18n();
@Component({
    watchQuery:['page']
})
export default class UsefulPage extends Vue{
    async asyncData({store}){
        console.log("asyncData "+store.state.locale)
        if(store.state.locale=='hk')
        {
            let hk=await axios.get('https://api.myjson.com/bins/62f7x')
            return {result:hk.data}
        }
        else if(store.state.locale=='en')
        {
            let en=await axios.get('https://api.myjson.com/bins/s1bfx')
            return {result:en.data}
        }
        else
        {
            let hk=await axios.get('https://api.myjson.com/bins/62f7x')
            return {result:hk.data}
        }
    }
    async getData({store}){
        let data=await axios.get('https://api.myjson.com/bins/1carh1')
        if(store.state.locale=='hk')
            return {result:data.data.zh}
        else if(store.state.locale=='en')
            return {result:data.data.en}
        else
            return {result:'WOW'}
    }

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
