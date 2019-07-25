<template>
    <div class="container">
        <div v-for="(value,key,index) in Waiting" :key="index" class="list">
            <div>{{value.cluster}}：{{value.specialty}}{{value.Category}}</div>
            <div>{{value.Description}}：{{value.Value}}</div>
        </div>
    </div>
</template>
<script lang="ts">
import { Vue,Component } from "nuxt-property-decorator";
import axios from 'axios';
@Component
export default class UsefulPage extends Vue{
    async asyncData(){
        let [waiting]=await Promise.all([
            axios.get('https://www.ha.org.hk/opendata/sop/sop-waiting-time-tc.json'),
        ])
        return {
            Waiting:waiting.data,
            Length:waiting.data.length,
        }
    }
    // get filterView(){
    // }
}
</script>
<style>
.list{
    margin-bottom: 1%;
}
</style>
