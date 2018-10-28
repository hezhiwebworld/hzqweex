<template>
  <div class="wrapper">
    <!-- <image src="https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png" class="logo" /> -->
    <!-- <text class="greeting">The environment is ready!</text> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png'
    }
  }
}
</script>

<style  lang="less">
.wrapper {
  background-color: #efefef;
}
.logo{
  width: 400px;
  height: 400px;
}
</style>
