<template>
  <div class="container">
    <div>{{$t('waiting')}}：<nuxt-link to="/aedwtdata">{{$t('waiting')}}</nuxt-link></div>
    <div>{{$t('sop')}}：<nuxt-link to="/sop">{{$t('sop')}}</nuxt-link></div>
    <div>{{$t('weather')}}：<nuxt-link to="/weather">{{$t('weather')}}</nuxt-link></div>
    
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
  height:1000px;
}

.links {
  padding-top: 15px;
}
</style>
