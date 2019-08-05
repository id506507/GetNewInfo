<template>
  <div class="container">
    <!-- <div>{{$t('waiting')}}：<nuxt-link to="/aedwtdata">{{$t('waiting')}}</nuxt-link></div>
    <div>{{$t('sop')}}：<nuxt-link to="/sop">{{$t('sop')}}</nuxt-link></div> -->
    <div class="row">
      <div class="element">
            <nuxt-link to="/weather">
              <div>
                <i class="material-icons">brightness_low</i>
              </div>
              <div>
                {{$t('weather')}}
              </div>
            </nuxt-link>
      </div>
      
      <div class="element">
        <nuxt-link to="/weather_detail">
          <div>
            <i class="material-icons">report</i>
          </div>
          <div>
            {{$t('weather_detail')}}
          </div>
        </nuxt-link>
      </div>

      <div class="element">
        <nuxt-link to="/weather_forecast">
          <div>
            <i class="material-icons">ac_unit</i>
          </div>
          <div>
            {{$t('weather_forecast')}}
          </div>
        </nuxt-link>
      </div>
    </div>

    <div class="space"></div>
  </div>
</template>

<script>
export default {
  components: {
    
  }

}
</script>

<style>
.space{
  height:650px;
}
.container>div{
  margin-bottom: 1%;
}
.material-icons{
  font-size:50px;
}
.element{
  width: auto;
  position: relative;
  margin-right: 5%;
  margin-left: 5%;
}
.material-icons{
  margin: auto;
  position: relative;
  left: 25%;
  
}
</style>
