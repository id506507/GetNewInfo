<template>
    <div class="container">
        <div>
            <div class="special">
            <p>{{$t('special_noti')}}</p></div>
            <div v-if="Special.swt!=''">
                <div v-for="(item,index) in Special.swt" :key="index">
                    <div>{{item.desc}}</div>
                    <p class="time">{{$t('update_time')}}：{{$moment(item.updateTime).format('YYYY-MM-DD LTS')}}</p>
                </div>
                
            </div>
                <div v-else>{{$t('none')}}</div>
        </div>
        <div>
            <p class="special">{{$t('alert')}}</p>
                <!-- <div v-if="Object.keys(Warning).length!=0"> -->
                <div v-if="Weather.warningMessage!=''">
                    <div v-for="(item,index) in Weather.warningMessage" :key="index">
                        <div>{{item}}</div>
                        <p class="time">{{$t('valid_time')}}：{{$moment(Weather.iconUpdateTime).format('YYYY-MM-DD LTS')}}</p>
                    </div>
                    
                </div>
                <div v-else><div>{{$t('none')}}</div></div>
        </div>
        <div>
            <p class="title">{{$t('humidity')}}</p>
            <p>{{Weather.humidity.data[0].value}}%</p>
            <p class="time">{{$t('update_time')}}：{{$moment(Weather.humidity.recordTime).format('YYYY-MM-DD LTS')}}</p>
        </div>
        <div>
            <p class="title">{{$t('temperature')}}</p>
            <div>
                <b-card-group>
                    <div>
                        <b-card style="width=9rem;" v-for="(item,index) in Weather.temperature.data" :key="index">
                            <b-card-sub-title>
                                {{item.place}}
                            </b-card-sub-title>
                            <b-card-text>
                                {{item.value}}&#176;{{item.unit}}
                            </b-card-text>
                        </b-card>
                    </div>
                </b-card-group>
            </div>
            <p class="time">{{$t('update_time')}}：&nbsp;{{$moment(Weather.temperature.recordTime).format('YYYY-MM-DD LTS') }}</p>
            <div v-if="Weather.mintempFrom00To09!=''">
                <p class="subtitle">{{$t('min_temp')}}</p>
                <p>{{Weather.mintempFrom00To09}}</p>
            </div>
        </div> 
    </div>
</template>
<script lang="ts">
import { Vue,Component } from "nuxt-property-decorator";
import axios from 'axios';
import moment, { locale } from 'moment';
import Vuei18n from 'vue-i18n';
import OneSignal from '@nuxtjs/onesignal';
Vue.use(Vuei18n);
const i18n=new Vuei18n();
@Component
export default class WeatherPage extends Vue{
    async asyncData({store}){
        console.log("weather "+store.state.locale)
        let [special,weather,warning]=await Promise.all([
        axios.get('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=swt&lang='+store.state.locale),
        axios.get('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang='+store.state.locale),
        axios.get('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=warnsum&lang='+store.state.locale)
    ])
    return {
            Special:special.data,
            Weather:weather.data,
            Warning:warning.data
        }
    }
}
</script>
<style>
.tag{
    font-weight: bold;
    color: deeppink;
}
h6{
    font-weight: bold;
}
.time{
    font-size: 80%;
    margin-top: 0.5%;
}
.temp{
    width: 100%;
}
.card{
    width: 9rem;
    margin-top: 1%;
    margin-right: 0.5%;
    float: left;
}
.card-title{
    font-weight: bold;
}
.special{
    color: red;
    font-weight: bold;
    font-size: 120%;
}
.special>div{
    color: brown;
}
.detail{
margin-bottom: 1%;
}
.title{
    font-weight: bold;
    font-size: 120%;
    color:darkmagenta;
}
.subtitle{
    font-weight: bold;
    font-size: 101%;
    color:rgb(2, 0, 139);
}
</style>


