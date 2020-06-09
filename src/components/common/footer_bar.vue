<template>
    <van-tabbar v-model="active" class="footer">
      <van-tabbar-item icon="home-o" replace to='/'>首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o" replace to='/cate'>分类</van-tabbar-item>
      <van-tabbar-item icon="balance-list-o" badge="5">值得买</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" badge="20">购物车</van-tabbar-item>
      <van-tabbar-item icon="friends-o">个人</van-tabbar-item>
    </van-tabbar>
</template>

<script>

export default {
  data(){
    return {
      active: 0
    }
  }
}
</script>

<style>

</style>
