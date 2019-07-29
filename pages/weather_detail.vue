<template>
    <div class="container">
        <div class="detail">
            <div class="title">詳細天氣警告</div>
                <div v-if="Detail">
                    <div v-for="item in Detail[0].contents" :key="item">
                            <div class="detailItem">{{item}}</div>
                    </div>
                </div>
                <div v-else>無</div>
        </div>
        <br>
        <div>
            <div class="title">天氣警告</div>
                <div v-if="Warning.length!=0">
                    <div v-for="(item,index) in Warning" :key="index">
                        <div class="tag">{{item.name}}</div>
                        <div class="tag">生效時間：{{item.issueTime}}</div>
                        <div class="tag">有效時間：{{item.expireTime}}</div>
                    </div>
                </div>
            <div v-else>無</div>
        </div>
        <br>
        <div>
            <div class="title">雨量</div>
            <div v-for="(item,index) in Raining.data" :key="index">
                {{item.place}}：{{item.max}}{{item.unit}}
            </div>
        </div>
        <br>
        <div>
            <div class="title">天氣預報</div>
            <div class="cards">一般天氣預測：{{Flws.generalSituation}}</div><br>
            <div class="cards" v-if="Flws.tcInfo!=''">颱風預測：{{Flws.tcInfo}}</div><br>
            <div class="cards" v-if="Flws.fireDangerWarning!=''">火災危險警告：{{Flws.fireDangerWarning}}</div><br>
            <div class="cards">{{Flws.forecastPeriod}}：{{Flws.forecastDesc}}{{Flws.outlook}}</div><br>
            <div class="subtitle">九天天氣預報</div>
            <div>{{Nine.generalSituation}}</div><br>
            <div v-for="(item,index) in Nine.weatherForecast" :key="index">
                <div class="card">
                        <div class="card-body">
                            <h6 class="card-title">{{item.forecastDate}}</h6>
                            <h6 class="card-title">({{item.week}})</h6>
                            <p class="card-text">風力：{{item.forecastWind}}</p>
                            <p class="card-text">{{item.forecastWeather}}</p>
                            <p class="card-text">最高溫度：{{item.forecastMaxtemp.value}}&#176;{{item.unit}}</p>
                            <p class="card-text">最低溫度：{{item.forecastMintemp.value}}&#176;{{item.unit}}</p>
                            <p class="card-text">最高濕度：{{item.forecastMaxrh.value}}&#176;{{item.unit}}</p>
                            <p class="card-text">最低濕度：{{item.forecastMinrh.value}}&#176;{{item.unit}}</p>
                        </div>
                </div>
            </div>
        </div>
        <div style="height:2000px"></div>
    </div>
</template>
<script lang="ts">
import { Vue,Component } from "nuxt-property-decorator";
import axios from 'axios';
@Component
export default class WeatherDetail extends Vue{
    async asyncData(){
        console.log('This is weather_detail asyncData');
        let [detail,warning,flws,raining,nine]=await Promise.all([
        axios.get('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=warningInfo&lang=tc'),
        axios.get('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=warnsum&lang=tc'),
        axios.get('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=flw&lang=tc'),
        axios.get('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=tc'),
        axios.get('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=fnd&lang=tc'),
    ])
    return{
            Detail:detail.data.details,
            Warning:warning.data,
            Flws:flws.data,
            Raining:raining.data.rainfall,
            Nine:nine.data,
        }
    }
}
</script>
<style>
.card-body{
    width: 9rem;
    margin-right: 0.5%;
    /* float: left; */
}
.subtitle{
    font-weight: bold;
    font-size: 101%;
    color:rgb(2, 0, 139);
}
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
</style>