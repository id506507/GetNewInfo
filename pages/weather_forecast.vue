<template>
    <div class="container">
        <div>
            <p class="title">{{$t('forecast')}}</p>
            <p class="subtitle">{{$t('general_forecast')}}</p>
            <p class="cards">{{Flws.generalSituation}}{{Flws.tcInfo}}{{Flws.fireDangerWarning}}</p>
            <p class="cards">{{Flws.forecastPeriod}}：{{Flws.forecastDesc}}{{Flws.outlook}}</p>
            <p class="time">{{$t('update_time')}}：{{$moment(Flws.updateTime).format('YYYY-MM-DD LTS')}}</p>
            <p class="subtitle">{{$t('nineday_forecast')}}</p>
            <div>{{Nine.generalSituation}}</div>
            <div>
                <b-card-group>
                    <div>
                        <b-card style="width:100%" v-for="(item,index) in Nine.weatherForecast" :key="index">
                            <b-card-sub-title>
                                {{$moment(item.forecastDate).format('YYYY-MM-DD')}}&nbsp;({{item.week}})
                            </b-card-sub-title>
                            <br>
                            <b-card-text>
                                {{item.forecastWeather}}{{item.forecastWind}}
                            </b-card-text>
                            <b-card-text>{{$t('temperature')}}：{{item.forecastMintemp.value}}&#176;{{item.forecastMintemp.unit}}&nbsp;-&nbsp;{{item.forecastMaxtemp.value}}&#176;{{item.forecastMaxtemp.unit}}</b-card-text>
                            <b-card-text>{{$t('humidity')}}：{{item.forecastMinrh.value}}%&nbsp;-&nbsp;{{item.forecastMaxrh.value}}%</b-card-text>
                            
                        </b-card>
                    </div>
                </b-card-group>
            </div>
            <p class="time">{{$t('update_time')}}：{{$moment(Nine.updateTime).format('YYYY-MM-DD LTS')}}</p>
            
        </div>
        <!-- <div style="height:2500px"></div> -->
    </div>
</template>
<script lang="ts">
import { Vue,Component,Watch } from "nuxt-property-decorator";
import axios from 'axios';
import moment from 'moment';
@Component
export default class WeatherDetail extends Vue{
    async asyncData({store}){
        console.log('This is weather_detail asyncData.');
        let [flws,raining,nine]=await Promise.all([
        axios.get('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=flw&lang='+store.state.locale),
        axios.get('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang='+store.state.locale),
        axios.get('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=fnd&lang='+store.state.locale),
    ])
    return {
            Flws:flws.data,
            Raining:raining.data,
            Nine:nine.data,
        }
    }
}
</script>
<style>
.h6{
    font-weight: bold;
}
.time{
    font-size: 80%;
    margin-top: 0.5%;
}
/* .card{
    width: 9rem;
    width: 100%;
    margin-right: 0.5%;
    float: left;
} */
.subtitle{
    font-weight: bold;
    font-size: 101%;
    color:rgb(2, 0, 139);
}
.detailItem{
    margin-bottom: 0.5%;
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