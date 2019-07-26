<template>
    <div class="container">
        <div class="detail">
            <div class="title">詳細天氣警告</div>
            <div v-for="item in Detail[0].contents" :key="item">
                    <div class="detailItem">{{item}}</div>
            </div>
        </div>
        <br>
        <div>
            <div class="title">天氣警告</div>
            <div v-for="item in Warning" :key="item">
                <div class="tag">{{item.name}}</div>
            </div>
        </div>
        <br>
        <div>
            <div class="title">雨量</div>
            <div v-for="item in Raining.data" :key="item">
                {{item.place}}：{{item.max}}{{item.unit}}
            </div>
        </div>
        <br>
        <div>
            <div class="title">天氣預報</div>
            <div class="cards">一般天氣預測：{{Flws.generalSituation}}</div>
            <div class="cards" v-if="Flws.tcInfo!=''">颱風預測：{{Flws.tcInfo}}</div>
            <div class="cards" v-if="Flws.fireDangerWarning!=''">火災危險警告：{{Flws.fireDangerWarning}}</div>
            <div class="cards">{{Flws.forecastPeriod}}：{{Flws.forecastDesc}}{{Flws.outlook}}</div>
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
        let [detail,warning,flws,raining]=await Promise.all([
        axios.get('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=warningInfo&lang=tc'),
        axios.get('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=warnsum&lang=tc'),
        axios.get('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=flw&lang=tc'),
        axios.get('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=tc')
    ])
    return{
            Detail:detail.data.details,
            Warning:warning.data,
            Flws:flws.data,
            Raining:raining.data.rainfall
        }
    }
}
</script>
<style>
.detailItem{
    margin-bottom: 0.5%;
}
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
.cards{
    margin-bottom: 1%;
}
</style>