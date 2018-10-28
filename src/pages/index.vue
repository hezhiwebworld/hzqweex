<template>
  <scroller class="index">
    <slider class="slider" interval="3000" auto-play="true" :index="2">
      <div class="frame" v-for="(img, idx) in imageList" :key="idx">
        <image class="image" resize="cover" :src="img.src" />
        <text style="left:20px;top:20px;color:red;position:absolute">{{idx}}</text>
      </div>
      <indicator class="indicator"></indicator>
    </slider>
    <div class="mainaction">
      <div class="nav" @click="go_result">
       <div class="img_wrap"><image class="nav_image" resize="cover" :src="iconurl1"/></div>
       <text class="title">极速秒贷</text>
       <text class="tips">借五千以下</text>
      </div>
      <div class="nav">
        <div class="img_wrap"><image class="nav_image" resize="cover" src="http://www.tyue-info.com/bzq/img/i-xdkcp.png"/></div>
        <text class="title">新贷款产品</text>
        <text class="tips">10点更新</text>
      </div>
      <div class="nav">
        <div class="img_wrap"><image class="nav_image" resize="cover" src="http://www.tyue-info.com/bzq/img/i-zmfj.png"/></div>
        <text class="title">芝麻分借</text>
        <text class="tips">480分以下</text>
      </div>
      <div class="nav">
        <div class="img_wrap"><image class="nav_image" resize="cover" src="http://www.tyue-info.com/bzq/img/i-dexd.png"/></div>
        <text class="title">大额信贷</text>
        <text class="tips">精准推荐</text>
      </div>
    </div>
    <div class="latestnews hui-scroll-news wow fadeInUp" data-wow-duration=".5s" data-wow-delay=".6s" id="scrollnew" @click="move">
      <i class="cufont cufont-msg wow bounceIn" data-wow-duration=".5s" data-wow-delay="1s"></i>
      <div class="wrap" ref="wrap">
        <div class="hui-scroll-news-items">
          <text>180****3156 用户1在 够花 成功放款10000元</text>
        </div>
        <div class="hui-scroll-news-items">
          <text>139****6680 用户2在 闪电贷 成功放款10000元</text>
        </div>
        <div class="hui-scroll-news-items">
          <text>180****3156 用户3在 够花 成功放款10000元</text>
        </div>
        <div class="hui-scroll-news-items">
          <text>180****3156 用户1在 够花 成功放款10000元</text>
        </div>
      </div>
    </div>
    <!-- 热门贷款产品 -->
    <div class="list-pro wow fadeInUp" data-wow-duration=".5s" data-wow-delay=".8s">
      <div class="list_title"><text class="list_text">热门贷款产品</text></div>
      <div class="item" onClick="location.href='apply-loan.html'">
        <div class="thumb"><image src="http://www.tyue-info.com/bzq/img/pro-loan01.png" class="avater" /></div>
        <div class="des">
          <div class="aname"><text class="aname_text">够花 </text></div>
          <div class="quota"><text class="quota_text">7~14天，30秒审批</text></div>
          <div class="dailyrate"><text class="dailyrate_text">可贷额度1000~20000</text></div>
        </div>
      </div>
      <div class="item" onClick="location.href='apply-loan.html'">
        <div class="thumb"><image src="http://www.tyue-info.com/bzq/img/pro-loan02.png" class="avater" /></div>
        <div class="des">
          <div class="aname"><text class="aname_text">够花 7~14天，30秒审批</text></div>
          <div class="quota"><text class="quota_text">可贷额度1000~20000</text></div>
          <div class="dailyrate"><text class="dailyrate_text">0.01% 日利率</text></div>
        </div>
      </div>
      <div class="item" onClick="location.href='apply-loan.html'">
        <div class="thumb"><image src="http://www.tyue-info.com/bzq/img/pro-loan03.png" class="avater" /></div>
        <div class="des">
          <div class="aname"><text class="aname_text">够花 7~14天，30秒审批</text></div>
          <div class="quota"><text class="quota_text">可贷额度1000~20000</text></div>
          <div class="dailyrate"><text class="dailyrate_text">0.01% 日利率</text></div>
        </div>
      </div>
       <div class="item" onClick="location.href='apply-loan.html'">
        <div class="thumb"><image src="http://www.tyue-info.com/bzq/img/pro-loan03.png" class="avater" /></div>
        <div class="des">
          <div class="aname"><text class="aname_text">够花 7~14天，30秒审批</text></div>
          <div class="quota"><text class="quota_text">可贷额度1000~20000</text></div>
          <div class="dailyrate"><text class="dailyrate_text">0.01% 日利率</text></div>
        </div>
      </div>
       <div class="item" onClick="location.href='apply-loan.html'">
        <div class="thumb"><image src="http://www.tyue-info.com/bzq/img/pro-loan03.png" class="avater" /></div>
        <div class="des">
          <div class="aname"><text class="aname_text">够花 7~14天，30秒审批</text></div>
          <div class="quota"><text class="quota_text">可贷额度1000~20000</text></div>
          <div class="dailyrate"><text class="dailyrate_text">0.01% 日利率</text></div>
        </div>
      </div>
      <div class="item" onClick="location.href='apply-loan.html'">
        <div class="thumb"><image src="http://www.tyue-info.com/bzq/img/pro-loan01.png" class="avater" /></div>
        <div class="des">
          <div class="aname"><text class="aname_text">够花 7~14天，30秒审批</text></div>
          <div class="quota"><text class="quota_text">可贷额度1000~20000</text></div>
          <div class="dailyrate"><text class="dailyrate_text">0.01% 日利率</text></div>
        </div>
      </div>
    </div>
  </scroller>
</template>
<script>
const stream = weex.requireModule('stream')
const animation = weex.requireModule('animation')
// const timer = weex.requireModule('@weex-module/timer')
export default {
  data () {
    return {
      imageList: [
        {
          src: 'http://www.tyue-info.com/bzq/img/swipe/1.jpg'
        },
        {
          src: 'http://www.tyue-info.com/bzq/img/swipe/3.jpg'
        },
        {
          src: 'http://www.tyue-info.com/bzq/img/swipe/2.jpg'
        },
        {
          src: 'http://www.tyue-info.com/bzq/img/swipe/3.jpg'
        }
      ],
      iconurl1: 'http://www.tyue-info.com/bzq/img/i-jsmd.png',
      rows: [
        {name: '139****6680 用户1在 闪电贷 成功放款10000元'},
        {name: '139****1234 用户2在 wukokg 成功放款8000元'},
        {name: '139****5674 用户3在 闪电贷 成功放款3000元'},
        {name: '139****6680 用户1在 闪电贷 成功放款10000元'}
      ],
      broadcount: 1,
      timerId: null
    }
  },
  created () {
    this.a()
  },
  methods: {
    getH () {
      stream.fetch()
    },
    go_result () {
      this.$router.push({
        path: '/result'
      })
    },
    move (yMove, times) {
      var wrap = this.$refs.wrap
      animation.transition(wrap, {
        styles: {
          transform: `translate(0, ${yMove}px)`,
          transformOrigin: 'center center'
        },
        duration: times, // ms
        timingFunction: 'ease',
        delay: 0 // ms
      }, function () {
        // modal.toast({ message: 'animation finished.' })
      })
    },
    a () {
      this.timerId = setTimeout(() => {
        let mY
        console.log(this.broadcount)
        if (this.broadcount >= 3) {
          mY = this.broadcount * 96
          this.move(-mY, 800)
          this.move(mY - 96, 0)
          this.broadcount = 1
        } else {
          mY = this.broadcount * 96
          this.move(-mY, 800)
        }
        console.log(mY)
        this.a()
        this.broadcount++
      }, 3000)
    }
  },
  destroyed () {
    clearTimeout(this.timerId)
  }

}
</script>
<style lang="less">
.text {
  font-size: 50px;
}

.image {
  width: 750px;
  height: 400px;
}
.slider {
  // margin-top: 25px;
  // margin-left: 25px;
  width: 750px;
  height: 400px;
}
.frame {
  width: 750px;
  height: 400px;
  position: relative;
}

.mainaction{
  width: 750px;
  display: flex;
  flex-direction: row;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 10px;
  padding-right: 10px;
  box-sizing: border-box;
  background-color: #FFF;
}
.nav {
  width: 182px;
  height: 168px;
  flex-direction: column;
}

.img_wrap {
  margin: 0 auto;
  flex-direction: row;
  justify-content: center;
}

.nav_image {
  width: 88px;
  height: 88px;
}
.title{
  text-align: center;
  font-size: 24px;
  margin-top: 30px;
  color: #666;
}
.tips{
  text-align: center;
  font-size: 20px;
  color: #CCC;
}

.latestnews {
  margin-top: 20px;
  height: 96px;
  width: 750px;
  background-color: #FFF;
  overflow: hidden;
}

.hui-scroll-news-items{
  height: 96px;
  width: 600px;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  margin-left: 80px;
  font-size: 20px;
}

.indicator {
  width: 750px;
  height: 400px;
  item-color: green;
  item-selected-color: red;
  item-size: 20px;
  position: absolute;
  top: 160px;
  left: 0;
  right: 0;
}

.list-pro {
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: #FFF;
  border-top-width: 1px;
  border-style: solid;
  border-color: #EEE;
}

.list_title {
  font-size: 24px;
  height: 52px;
  flex-direction: row;
  align-items: center;
}

.list_text {
  margin-left: 50px;
  font-size: 30px;
}

.item {
  height: 166px;
  width: 710px;
  flex-direction: row;
}

.thumb {
  width: 104px;
  height: 104px;
}
.avater {
  width: 104px;
  height: 104px;
  padding-top: 20px;
}

.des {
  width: 542px;
  height: 146px;
  padding-top: 20px;
  padding-left: 20px;
}

.aname {

}

.aname_text {
  font-size: 30px;
}

.quota_text {
  font-size: 25px;
  color: #CCC;
}

.dailyrate_text {
  font-size: 25px;
  color: red;
}
</style>
