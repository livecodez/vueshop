<template>
<!-- 增加点击事件 -->
  <div class="tab-bar-item" @click="itemClick">
    <!--   处理选中效果图标 -->
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
    export default {
        name: "TabBarItem",
        props:{
          path:String,
          activeColor:{
            type:String,
            default:'red'
          }
        },
        data(){
          return {
            //根据该属性判断是否选中
            // isActive:false
          }
        },
      computed:{
          isActive(){
            return this.$route.path.indexOf(this.path) !== -1
          },
        activeStyle(){
            return this.isActive?{color:this.activeColor}:{}
          }
      },
      methods:{
        itemClick(){
          console.log("itemClick");
          this.$router.push(this.path).catch(err => err)
        }
      }
    }
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;

    vertical-align: middle;
  }
  .tab-bar-item img{
    widht:22px;
    height: 22px;
  }
</style>
