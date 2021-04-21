<!--
 * @message: 描述
 * @Author: Roy
 * @Email: @163.com
 * @Github: @163.com
 * @Date: 2021-04-20 18:00:54
 * @LastEditors: Roy
 * @LastEditTime: 2021-04-21 11:56:41
 * @Deprecated: 否
 * @FilePath: /datav-mobile/src/views/Home.vue
-->
<template>
  <div class="home">
    <div class="data-wrapper" />
    <TopHeader/>
    <SalesBar/>
    <SalesLine/>
    <SalesPie/>
    <SalesMap/>
    <SalesSun/>
    <SalesRadar/>
  </div>
</template>

<script>

import TopHeader from '../components/TopHeader'
import SalesBar from '../components/SalesBar'
import SalesLine from '../components/SalesLine'
import SalesPie from '../components/SalesPie'
import SalesMap from '../components/SalesMap'
import SalesSun from '../components/SalesSun'
import SalesRadar from '../components/SalesRadar'
export default {
  name: 'Home',
  components: {
    TopHeader,
    SalesBar,
    SalesLine,
    SalesPie,
    SalesMap,
    SalesSun,
    SalesRadar
  }

}
</script>
<style  lang="scss" scoped>
.home {
  position: relative;
  height: 100%;
  .data-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1336px;
    z-index: 1;
    background-image: url("../assets/44b2ad11c37339db11f8ca5d59c5b31c.jpg");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }

}
</style>
