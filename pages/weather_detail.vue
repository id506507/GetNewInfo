<template>
    <div class="container">
        <div class="detail">
            <p class="title">{{$t('weather_detail')}}</p>
                <div v-if="Object.keys(Detail).length!=0"><!--check empty-->
                    <div v-for="(item,index) in Detail.details" :key="index"><!--loop contents-->
                        <div v-for="index in item.contents" :key="index"><!--loop contents入面內容，因為每個contents length不同，所以需要inner looping-->
                            {{index}}
                        </div>   
                        <p class="time">{{$t('update_time')}}：{{$moment(item.updateTime).format('YYYY-MM-DD LTS')}}</p>
                    </div>
                </div>
                <div v-else>{{$t('none')}}</div>
        </div>
        <div v-if="Raining.tcmessage!=''">
            <p class="title">{{$t('tc')}}</p>
            <div v-for="(item,index) in Raining.tcmessage" :key="index">
                {{item}}
            </div>
        </div>
        <br>
        <div>
            <p class="title">{{$t('rainfall')}}</p>
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
                <p class="time">{{$t('update_time')}}：{{$moment(Raining.rainfall.startTime).format('YYYY-MM-DD LTS')}}&nbsp;-&nbsp;{{$moment(Raining.rainfall.endTime).format('LTS')}}</p>
                <div v-if="Raining.rainfallFrom00To12!='' || Raining.rainfallLastMonth!='' || Raining.rainfallJanuaryToLastMonth!=''">
                    <p class="subtitle">{{$t('p_rainfall')}}</p>
                    <p>{{Raining.rainfallFrom00To12}}</p>
                    <p>{{Raining.rainfallLastMonth}}</p>
                    <p>{{Raining.rainfallJanuaryToLastMonth}}</p>
                </div>
                
            </div>
        </div>
        <div v-if="Raining.lightning">
            <p class="title">{{$t('thunderstorm')}}</p>
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
            <p class="time">{{$t('valid_time')}}：{{$moment(Raining.lightning.startTime).format('YYYY-MM-DD LTS')}}&nbsp;-&nbsp;{{$moment(Raining.lightning.endTime).format('LTS')}}</p>
        </div>
        <div v-if="Raining.uvindex!=''">
            <p class="title">{{$t('uvindex')}}</p>
            <div>{{Raining.uvindex.data[0].place}}&nbsp;{{Raining.uvindex.recordDesc}}<br>{{$t('uvindex')}}：{{Raining.uvindex.data[0].value}}；{{$t('intensity')}}：{{Raining.uvindex.data[0].desc}}</div>
            <p class="time">{{$t('update_time')}}：{{$moment(Raining.updateTime).format('YYYY-MM-DD LTS')}}</p>
        </div>
        <div>
                <p class="title">{{$t('sea_temp')}}</p>
                <div>{{Nine.seaTemp.place}}：{{Nine.seaTemp.value}}&#176;{{Nine.seaTemp.unit}}</div>
                <p class="time">{{$t('update_time')}}：{{$moment(Nine.seaTemp.recordTime).format('YYYY-MM-DD LTS')}}</p>
                <p class="title">{{$t('soil_temp')}}</p>
                <div v-for="(item,index) in Nine.soilTemp" :key="index">
                    <div>{{item.place}}</div>
                    <div>{{$t('depth')}}：{{item.depth.value}}&nbsp;m</div>
                    <div>{{$t('temperature')}}：{{item.value}}&#176;{{item.unit}}</div>
                    <p class="time">{{$t('update_time')}}：{{$moment(item.recordTime).format('YYYY-MM-DD LTS')}}</p>
                </div>
        </div>
        <!-- <div style="height:2500px"></div> -->
    </div>
</template>
<script lang="ts">
import { Vue,Component,Watch } from "nuxt-property-decorator";
import axios from 'axios';
import moment from 'moment';
@Component({
    // watchQuery:['page']
})
export default class WeatherDetail extends Vue{
    async asyncData({store}){
        let raining_counter:number=0;
        console.log('This is weather_detail asyncData.');
        let [detail,raining,nine]=await Promise.all([
        axios.get('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=warningInfo&lang='+store.state.locale),
        axios.get('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang='+store.state.locale),
        axios.get('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=fnd&lang='+store.state.locale),
    ])
    return {
            Detail:detail.data,
            Raining:raining.data,
            Nine:nine.data,
            Raining_counter:raining_counter,
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