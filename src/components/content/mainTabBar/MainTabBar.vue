<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home">
        <img src="~assets/img/tabbar/home.png" slot="item-icon">
        <img src="~assets/img/tabbar/home-active.png" slot="item-icon-active">
        <div slot="item-text">首页</div>
      </tab-bar-item>

      <tab-bar-item path="/order" active-color1="blue">
        <img src="~assets/img/tabbar/order.png" slot="item-icon">
        <img src="~assets/img/tabbar/order-active.png" slot="item-icon-active">
        <div slot="item-text">订单</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from "components/common/tabbar/TabBar";
  import TabBarItem from "components/common/tabbar/TabBarItem";
    export default {
        name: "MainTabBar",
        components:{
          TabBar,
          TabBarItem
        }
    }
</script>

<style scoped>

</style>
