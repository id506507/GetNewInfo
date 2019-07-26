<template>
    <div class="container">
        <div class="detail">
            <div class="title">詳細天氣警告：</div>
            <div v-for="item in Detail[0].contents" :key="item">
                    <div class="detailItem">{{item}}</div>
            </div>
        </div>
        <div class="date">{{Detail[0].updateTime}}</div>
        <br>
        <div>
            <div class="title">天氣警告</div>
            <div v-for="item in Warning" :key="item">
                <div class="tag">{{item.name}}</div>
            </div>
        </div>
        <div style="height:500px"></div>
    </div>
</template>
<script lang="ts">
import { Vue,Component } from "nuxt-property-decorator";
import axios from 'axios';
@Component
export default class WeatherDetail extends Vue{
    async asyncData(){
        let [detail,warning]=await Promise.all([
        axios.get('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=warningInfo&lang=tc'),
        axios.get('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=warnsum&lang=tc')
    ])
    return{
            Detail:detail.data.details,
            Warning:warning.data
        }
    }
}
</script>
<style>
.tag{
    margin-top: 1%;
}
.title{
    font-weight: bold;
    font-size: 120%;
    color:darkmagenta;
}
.date{
    font-size: 90%;
}
</style>


