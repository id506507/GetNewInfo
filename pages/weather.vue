<template>
    <div class="container">
        <div class="special">
        特別天氣提示：<div v-if="Special.swt!=''">{{Special.swt}}</div>
                     <div v-else>無</div>
        </div>
        <div class="detail">
            詳細天氣警告：
            <div v-for="item in Detail[0].contents" :key="item">
                    <div>{{item}}</div>
            </div>
            更新時間：{{Detail[0].updateTime}}
        </div>
        <div class="weather">
            本港地區天氣報告：
            <div v-for="item in Weather.temperature.data" :key="item">
                <div class="card">
                    <div class="card-body">
                        <h6 class="card-title">{{item.place}}</h6>
                        <p class="card-text">{{item.value}}&#176;{{item.unit}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Vue,Component } from "nuxt-property-decorator";
import axios from 'axios';
@Component
export default class WeatherPage extends Vue{
    async asyncData(){
        let [special,weather,detail]=await Promise.all([
        axios.get('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=swt&lang=tc'),
        axios.get('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=tc'),
        axios.get('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=warningInfo&lang=tc')
    ])
    return{
            Special:special.data,
            Weather:weather.data,
            Detail:detail.data.details,
        }
    }
}
</script>
<style>
.weather{
    margin-bottom: 1%;
}
.card{
    width:13%;
}
.card-title{
    font-weight: bold;
}
.special{
    margin-bottom: 1%;
    color: red;
}
.special>div{
    color: brown;
}
.detail{
margin-bottom: 1%;
}
</style>


