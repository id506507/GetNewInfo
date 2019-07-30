<template>
    <div class="container">
        <div class="detail">
            <p class="title">詳細天氣警告</p>
                <div v-if="Detail">
                    <div v-for="item in Detail[0].contents" :key="item">
                            <div class="detailItem">{{item}}</div>
                    </div>
                    <p class="time">更新時間：{{$moment(Detail[0].updateTime).format('YYYY-MM-DD LTS')}}</p>
                </div>
                <div v-else>無</div>
        </div>
        <br>
        <div v-if="Raining.tcmessage!=''">
            <p class="title">颱風消息</p>
            <div>{{Raining.tcmessage}}</div>
        </div>
        <br>
        <div>
            <p class="title">雨量</p>
            <div>
                <b-card-group>
                    <div v-for="(item,index) in Raining.rainfall.data" :key="index" >
                        <div v-if="item.max!=0">
                            <b-card style="width:9rem;">
                                <h6>{{item.place}}</h6>
                                {{item.max}} {{item.unit}}
                                <!-- <b-card-text>
                                </b-card-text> -->
                            </b-card>
                        </div>
                        
                    </div>
                </b-card-group>
            </div>
            <p class="time">時間：{{$moment(Raining.startTime).format('YYYY-MM-DD LTS')}}&nbsp;-&nbsp;{{$moment(Raining.endTime).format('LTS')}}</p>
        </div>
        <br>
        <div>
            <p class="title">雷暴</p>
            <div>
                <b-card-group>
                    <div v-for="(item,index) in Raining.lightning.data" :key="index" >
                        <div>
                            <b-card style="width:8rem;">
                                <h6>{{item.place}}</h6>
                                <!-- <b-card-text>
                                </b-card-text> -->
                            </b-card>
                        </div>
                        
                    </div>
                </b-card-group>
            </div>
            <p class="time">時間：{{$moment(Raining.lightning.startTime).format('YYYY-MM-DD LTS')}}&nbsp;-&nbsp;{{$moment(Raining.lightning.endTime).format('LTS')}}</p>
        </div>
        <br>
        <div>
            <p class="title">紫外線指數</p>
            <div>{{Raining.uvindex.data[0].place}}{{Raining.uvindex.recordDesc}}&nbsp;指數：{{Raining.uvindex.data[0].value}}；強度：{{Raining.uvindex.data[0].desc}}</div>
            <p class="time">時間：{{$moment(Raining.updateTime).format('YYYY-MM-DD LTS')}}</p>
        </div>
        <br>
        <div>
            <p class="title">天氣預報</p>
            <p class="cards">一般天氣預測：{{Flws.generalSituation}}{{Flws.tcInfo}}{{Flws.fireDangerWarning}}</p>
            <p class="cards">{{Flws.forecastPeriod}}：{{Flws.forecastDesc}}{{Flws.outlook}}</p>
            <p class="time">更新時間：{{$moment(Flws.updateTime).format('YYYY-MM-DD LTS')}}</p>
            <p class="subtitle">九天天氣預報</p>
            <div>{{Nine.generalSituation}}</div>
            <div>
                <b-card-group>
                    <div>
                        <b-card style="width:100%" v-for="(item,index) in Nine.weatherForecast" :key="index">
                            <b-card-text>
                                <h6>{{$moment(item.forecastDate).format('YYYY-MM-DD')}}&nbsp;({{item.week}})</h6>
                                <div> {{item.forecastWeather}}{{item.forecastWind}}</div>
                                <div>溫度：{{item.forecastMintemp.value}}&#176;{{item.forecastMintemp.unit}}&nbsp;-&nbsp;{{item.forecastMaxtemp.value}}&#176;{{item.forecastMaxtemp.unit}}</div>
                                <div>濕度：{{item.forecastMinrh.value}}%&nbsp;-&nbsp;{{item.forecastMaxrh.value}}%</div>
                            </b-card-text>
                        </b-card>
                    </div>
                </b-card-group>
            </div>
            <p class="time">更新時間：{{$moment(Nine.updateTime).format('YYYY-MM-DD LTS')}}</p>
            <div>
                <p class="subtitle">海水溫度</p>
                <div>{{Nine.seaTemp.place}}：{{Nine.seaTemp.value}}&#176;{{Nine.seaTemp.unit}}</div>
                <p class="time">時間{{$moment(Nine.seaTemp.recordTime).format('YYYY-MM-DD LTS')}}</p>
                <p class="subtitle">土壤溫度</p>
                <div v-for="(item,index) in Nine.soilTemp" :key="index">
                    <div>{{item.place}}</div>
                    <div>深度：{{item.depth.value}}&nbsp;{{item.depth.unit}}</div>
                    <div>溫度：{{item.value}}&#176;{{item.unit}}</div>
                    <p class="time">時間：{{$moment(item.recordTime).format('YYYY-MM-DD LTS')}}</p>
                </div>
            </div>
            <!-- <div v-for="(item,index) in Nine.weatherForecast" :key="index">
                <div class="card" style="width:100%;">
                        <div class="card-body">
                            <h6 class="card-title">{{$moment(item.forecastDate).format('YYYY-MM-DD')}}&nbsp;({{item.week}})</h6>
                            <p class="card-text">{{item.forecastWeather}}{{item.forecastWind}}</p>
                            <p class="card-text">溫度：{{item.forecastMintemp.value}}&#176;{{item.unit}}&nbsp;-&nbsp;{{item.forecastMaxtemp.value}}&#176;{{item.unit}}</p>
                            <p class="card-text">濕度：{{item.forecastMinrh.value}}&#176;{{item.unit}}&nbsp;-&nbsp;{{item.forecastMaxrh.value}}&#176;{{item.unit}}</p>
                        </div>
                </div>
            </div> -->
        </div>
        <!-- <div style="height:2500px"></div> -->
    </div>
</template>
<script lang="ts">
import { Vue,Component } from "nuxt-property-decorator";
import axios from 'axios';
import moment from 'moment';
@Component
export default class WeatherDetail extends Vue{
    async asyncData(){
        console.log('This is weather_detail asyncData.');
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