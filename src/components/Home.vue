<template>
  <div>
    <!-- 头部部分 -->
    <van-sticky >
      <van-row style="background: white">
      <van-col>
        <img src="../assets//logo.png" alt="" class="logo">
      </van-col>
      <van-col>
        <van-search v-model="value" placeholder="请输入搜索关键词"  class="search"/>
      </van-col>
      <van-col>
        <div class="loginBtn">登录</div>
      </van-col>
      </van-row>
      <!-- 滚动导航栏 -->
      <van-tabs>
      <van-tab v-for="(item, index) in 9" :key="index" :title="'推荐 ' + index">
      </van-tab>
      </van-tabs>
    </van-sticky>
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in 5" :key="index">
        <img src="../assets/lunbo.png" alt="" class="lunbo">
      </van-swipe-item>
    </van-swipe>
    <!-- 广告图标 -->
    <van-row>
      <van-col span="8" class="icon-div">
        <img src="../assets/icon.png" alt="" class="iconImg">
        <span class="icon-text">网易官方自营</span>
      </van-col>
      <van-col span="8" class="icon-div">
        <img src="../assets/icon.png" alt="" class="iconImg">
        <span class="icon-text">网易官方自营</span>
      </van-col>
      <van-col span="8" class="icon-div">
        <img src="../assets/icon.png" alt="" class="iconImg">
        <span class="icon-text">网易官方自营</span>
      </van-col>
    </van-row>
    <!-- 九宫格 -->
    <van-grid :column-num="5" class="goods-grid" :border="false">
      <van-grid-item v-for="(item, index) in 10" :key="index">
         <van-image src="https://yanxuan.nosdn.127.net/896a3beac514ae8f40aafe028e5fec56.png" />
         <div class="goods-title">服装鞋包</div>
      </van-grid-item>
    </van-grid>
    <!-- 底部栏 -->
    <footer_bar></footer_bar>
    <!-- 新品热卖 -->
    <van-row>
      <van-col span="12">
        <div class="new-1">新品首发</div>
      </van-col>
      <van-col span="12">
        <div class="new-2">更多>></div>
      </van-col>

    </van-row>
    <van-grid :column-num="3" class="goods-grid" :border="false">
      <van-grid-item v-for="(item, index) in 6" :key="index" class="new-item">
         <van-image class="new-img" src="https://yanxuan-item.nosdn.127.net/111af5f1e3fd7355f2b9e9b705c21919.png?type=webp&imageView&quality=65&thumbnail=330x330" />
         <div>新品热卖</div>
         <div class="new-price">¥1058</div>
         <div>618热销榜</div>
      </van-grid-item>
    </van-grid>
    <div class="empty">空白处</div>
  </div>
</template>

<script>
import footer_bar from './common/footer_bar'
export default {
  data () {
    return {
      value: '',
      active:''
    }
  },
  components: {
    footer_bar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo {
  width: 2rem;
  margin: .4rem 0 0 .2rem;
}
.search {
  width: 6.5rem;
  height: .6rem;
  margin: .4rem 0 0 0;
}
.loginBtn {
  width: 0.98rem;
  height: 0.6rem;
  border: 1px solid #f00;
  margin: .3rem .1rem 0 0;
  line-height: .6rem ;
  text-align: center;
  border-radius: .12rem;
  color: #f00;
}
.lunbo {
  height: 4.5rem;
  width: 100%;
}
.icon-div {
  height: 0.5rem;
  /* background-color: #f00; */
  text-align: center;

}
.iconImg {
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
  vertical-align: middle;
}
.icon-text {
  font-size: .2rem;
  vertical-align: middle;
}
.goods-title {
  font-size: 0.3rem;
}
.new-1 {
  font-size: 0.4rem;
}
.new-2 {
  font-size: 0.4rem;
  text-align: end;
}
.empty {
  height: 5rem;
  background-color: rgb(63, 53, 53);
}
.new-item {
  font-size: 0.3rem;
}
.new-price {
  margin: 0.3rem 0 0.3rem 0;
  color: #f00;
}
.new-img {
  background-color: rgb(221, 216, 216);

}

</style>
