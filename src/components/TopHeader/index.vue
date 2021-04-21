<!--
 * @message: 描述
 * @Author: Roy
 * @Email: @163.com
 * @Github: @163.com
 * @Date: 2021-04-20 19:47:15
 * @LastEditors: Roy
 * @LastEditTime: 2021-04-20 19:58:37
 * @Deprecated: 否
 * @FilePath: /datav-mobile/src/components/TopHeader/index.vue
-->
<template>
  <div class="top-header">
    <div class="title">外卖数据大屏</div>
    <div class="sub-title">移动报表</div>
    <div class="date">最后更新事件:1分钟前</div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.top-header {
  position: absolute;
  color: #fff;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 300px;
  padding: 50px 24px 24px;
  box-sizing: border-box;
  .title {
    font-size: 48px;
    font-weight: 500;
  }
  .sub-title {
    font-size: 36px;
    margin-top: 20px;
  }
  .date {
    font-size: 24px;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.5);
    margin-top: 40px;
  }
}
</style>
