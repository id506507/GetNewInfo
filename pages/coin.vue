<template>
    <div class="container">
        <b-table id="coin" :items="Data.result.records" :per-page="per_page" :current-page="currentPage" :fields="fields" striped hover small></b-table>
        <b-pagination v-model="currentPage" :total-rows="Total" :per-page="per_page" aria-controls="coin" align="center"></b-pagination>
        <GMap
            :cluster="{options: {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'}}" :center="center"
            :options="{fullscreenControl: false, streetViewControl: true, mapTypeControl: false, zoomControl: true, gestureHandling: 'cooperative'}"
            :zoom="10">
            <GMapMarker v-for="(item,index) in Data.result.records" :key="index" :position="{lat: item.latitude, lng: item.longitude}">
                <GMapInfoWindow>
                    <code class="Maptext">
                        <div><img src="https://img.icons8.com/officel/30/000000/place-marker.png">&nbsp;{{item.district}}&ensp;{{item.address}}</div>
                        <div><img src="https://img.icons8.com/dusk/30/000000/date-to.png">&nbsp;{{item.start_date}}&nbsp;~&nbsp;{{item.end_date}}</div>
                        <div><img src="https://img.icons8.com/color/30/000000/high-importance--v1.png">&nbsp;{{item.remarks}}</div>
                    </code>
                </GMapInfoWindow>
            </GMapMarker>
        </GMap>
    </div>
</template>
<script lang="ts">
import { Vue,Component } from "nuxt-property-decorator";
import axios from 'axios';
import moment from 'moment';
import x2js from 'x2js';
const X2js=new x2js();
@Component
export default class WeatherDetail extends Vue{
    center:any= { lat: 22.28056, lng: 114.17222 };
    mapTypeId:string="terrain";
    fields:any={
        start_date:{label:'開始日期'},end_date:{label:'結束日期'},address:{label:'地址'},remarks:{label:'備註'}
        }
    currentPage:number=1;
    per_page:number=4;
    async asyncData({store}){
        let data=await axios.get('https://api.hkma.gov.hk/public/coin-cart-schedule?lang='+store.state.locale)
        return {
                Data:data.data,
                Total:data.data.result.datasize,
            }
    }
}
</script>
<style>
.Maptext{
    font-size: 130%;
    color: black;
    font-family: 'Noto Sans TC', sans-serif;
}
.Tcard{
    width: 42rem;
    border:none;
    margin-bottom: 1%;
    box-shadow: 0 1px 3px 0;
    border-radius:6px;
}
.material-icons{
    font-size: 16px;
}
</style>