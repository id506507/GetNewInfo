<template>
    <div class="container">
        <div class="detail">
            <p class="title">詳細天氣警告</p>
                <div v-if="Detail">
                    <div v-for="(item,index) in Detail.details" :key="index"><!--loop contents-->
                        <div v-for="index in item.contents" :key="index"><!--loop contents入面內容，因為每個contents length不同，所以需要inner looping-->
                            {{index}}
                        </div>   
                        <p class="time">更新時間：{{$moment(item.updateTime).format('YYYY-MM-DD LTS')}}</p>
                    </div>
                </div>
                <div v-else>無</div>
        </div>
        <div v-if="Raining.tcmessage!=''">
            <p class="title">颱風消息</p>
            <div v-for="(item,index) in Raining.tcmessage" :key="index">
                {{item}}
            </div>
        </div>
        <br>
        <div>
            <p class="title">雨量</p>
            <div>
                <b-card-group>
                    <div>
                            <b-card style="width:6rem;" v-if="item.max!=0" v-for="(item,index) in Raining.rainfall.data" :key="index">
                                <b-card-sub-title>
                                {{item.place}}
                                </b-card-sub-title>
                                <b-card-text>
                                    {{item.max}} {{item.unit}}
                                </b-card-text> 
                            </b-card>
                    </div>
                </b-card-group>
                <p class="time">時間：{{$moment(Raining.rainfall.startTime).format('YYYY-MM-DD LTS')}}&nbsp;-&nbsp;{{$moment(Raining.rainfall.endTime).format('LTS')}}</p>
                <div v-if="Raining.rainfallFrom00To12!='' || Raining.rainfallLastMonth!='' || Raining.rainfallJanuaryToLastMonth!=''">
                    <p class="subtitle">過去雨量</p>
                    <p>{{Raining.rainfallFrom00To12}}</p>
                    <p>{{Raining.rainfallLastMonth}}</p>
                    <p>{{Raining.rainfallJanuaryToLastMonth}}</p>
                </div>
                
            </div>
        </div>
        <div v-if="Raining.lightning">
            <p class="title">雷暴</p>
            <div>
                <b-card-group>
                    <div v-for="(item,index) in Raining.lightning.data" :key="index" >
                        <div>
                            <b-card style="width:8rem;">
                                <b-card-sub-title>
                                    {{item.place}}
                                </b-card-sub-title>
                            </b-card>
                        </div>
                        
                    </div>
                </b-card-group>
            </div>
            <p class="time">時間：{{$moment(Raining.lightning.startTime).format('YYYY-MM-DD LTS')}}&nbsp;-&nbsp;{{$moment(Raining.lightning.endTime).format('LTS')}}</p>
        </div>
        <div v-if="Raining.uvindex!=''">
            <p class="title">紫外線指數</p>
            <div>{{Raining.uvindex.data[0].place}}{{Raining.uvindex.recordDesc}}&nbsp;指數：{{Raining.uvindex.data[0].value}}；強度：{{Raining.uvindex.data[0].desc}}</div>
            <p class="time">時間：{{$moment(Raining.updateTime).format('YYYY-MM-DD LTS')}}</p>
        </div>
        <div>
                <p class="title">海水溫度</p>
                <div>{{Nine.seaTemp.place}}：{{Nine.seaTemp.value}}&#176;{{Nine.seaTemp.unit}}</div>
                <p class="time">時間{{$moment(Nine.seaTemp.recordTime).format('YYYY-MM-DD LTS')}}</p>
                <p class="title">土壤溫度</p>
                <div v-for="(item,index) in Nine.soilTemp" :key="index">
                    <div>{{item.place}}</div>
                    <div>深度：{{item.depth.value}}&nbsp;{{item.depth.unit}}</div>
                    <div>溫度：{{item.value}}&#176;{{item.unit}}</div>
                    <p class="time">時間：{{$moment(item.recordTime).format('YYYY-MM-DD LTS')}}</p>
                </div>
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
    async asyncData(){
        console.log('This is weather_detail asyncData.');
        let [detail,flws,raining,nine]=await Promise.all([
        axios.get('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=warningInfo&lang=tc'),
        axios.get('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=flw&lang=tc'),
        axios.get('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=tc'),
        axios.get('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=fnd&lang=tc'),
    ])
    return {
            Detail:detail.data,
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