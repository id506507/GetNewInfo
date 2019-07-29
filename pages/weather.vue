<template>
    <div class="container">
        <div>
            <div class="special">
            <p>特別天氣提示</p></div>
            <div v-if="Special.swt!=''">
                {{Special.swt.desc}}
                {{Special.swt.updateTime}}
            </div>
                <div v-else>無</div>
            </div>
        <div>
            <p class="title">濕度</p><div>{{Weather.humidity.data[0].value}}%</div>
        </div>
        <div>
            <p class="title">本港地區天氣報告</p>
            <div>
                <b-card-group>
                    <div>
                        <b-card style="width:9rem;" v-for="(item,index) in Weather.temperature.data" :key="index">
                            <b-card-text>
                                <h6>{{item.place}}</h6>
                                
                            <p class="card-text">{{item.value}}&#176;{{item.unit}}</p>
                            </b-card-text>
                        </b-card>
                    </div>
                </b-card-group>
            </div>
            <p class="time">時間：(&nbsp;{{$moment(Weather.temperature.recordTime).format('YYYY-MM-DD LTS') }}&nbsp;)</p>
            <!-- <div class="temp">
            <div v-for="(item,index) in Weather.temperature.data" :key="index">
                <div class="card">
                        <div class="card-body">
                            <h6 class="card-title">{{item.place}}</h6>
                            <p class="card-text">{{item.value}}&#176;{{item.unit}}</p>
                        </div>
                </div>
            </div>
            </div>-->
        </div> 
    </div>
</template>
<script lang="ts">
import { Vue,Component } from "nuxt-property-decorator";
import axios from 'axios';
import moment from 'moment';
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
</style>


