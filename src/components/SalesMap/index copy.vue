<!--
 * @message: 描述
 * @Author: Roy
 * @Email: @163.com
 * @Github: @163.com
 * @Date: 2021-04-21 10:03:18
 * @LastEditors: Roy
 * @LastEditTime: 2021-04-21 10:26:56
 * @Deprecated: 否
 * @FilePath: /datav-mobile/src/components/SalesMap/index.vue
-->
<template>
  <div class="sales-map">
    <div class="sales-map-inner">
      <div id="map_container" />
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue'
export default {
  setup () {
    // 初始化百度地图
    const initBMap = () => {
      const cityCenter = window.mapv.utilCityCenter.getCenterByCityName('北京')
      const map = window.initMap({
        tilt: 0,
        heading: 0,
        center: [cityCenter.lng, cityCenter.lat],
        zoom: 5,
        style: window.darkStyle
        // skyColors: [
        //     // 地面颜色
        //     'rgba(226, 237, 248, 0)',
        //     // 天空颜色
        //     'rgba(186, 211, 252, 1)'
        // ]
      })
      return map
    }

    const initData = () => {
      const data = []
      const citys = [
        '北京', '天津', '上海', '重庆', '石家庄', '太原', '呼和浩特', '哈尔滨', '长春',
        '沈阳', '济南', '南京', '合肥', '杭州', '南昌', '福州', '郑州', '武汉', '长沙', '广州',
        '南宁', '西安', '银川', '兰州', '西宁', '乌鲁木齐', '成都', '贵阳', '昆明', '拉萨', '海口'
      ]
      const targetCity = window.mapv.utilCityCenter.getCenterByCityName('北京')
      // 初始化 点
      const nodeData = [{
        x: targetCity.lng,
        y: targetCity.lat
      }]
      // 初始化 边
      const edgeData = [{
        source: 1, // nodeData里面下标
        target: 0
      }]
      // 生成贝塞尔曲线坐标集
      // 实例化贝塞尔曲线对象
      const randomCount = 500
      for (let i = 1; i < randomCount; i++) {
        const startCity = window.mapv.utilCityCenter.getCenterByCityName(citys[parseInt(citys.length * Math.random())])
        nodeData.push({
          x: startCity.lng - 5 + 10 * Math.random(),
          y: startCity.lat - 5 + 10 * Math.random()
        })
        edgeData.push({
          source: parseInt(i * Math.random()),
          target: 0
        })
      }
      // 强行边绑定 把相邻得边汇聚到一起
      const bundling = window.mapv.utilForceEdgeBundling()
        .nodes(nodeData)
        .edges(edgeData)
        // 返回所有的点
      const result = bundling()
      for (let i = 0; i < result.length; i++) {
        const line = result[i]
        const coordinates = []
        for (let j = 0; j < line.length; j++) {
          coordinates.push([line[j].x, line[j].y])
        }
        data.push({
          geometry: {
            type: 'LineString',
            coordinates: coordinates
          }
        })
      }
      return data
    }
    const setData = ({ data, map }) => {
      // 初始化图层
      const view = new window.mapvgl.View({ map })
      // 初始化LineLayer
      const lineLayer = new window.mapvgl.LineLayer({
        color: 'rgba(55,50,250,0.3)',
        blend: 'lighter'
      })
      view.addLayer(lineLayer)
      lineLayer.setData(data)

      const linePointLayer = new window.mapvgl.LinePointLayer({
        size: 8, // 点的大小
        speed: 20, // 点运动得速度
        color: 'rgba(255, 255, 0, 0.6)', // 点的颜色
        animationType: window.mapvgl.LinePointLayer.ANIMATION_TYPE_SMOOTH, // 点的动画类型
        shapeType: window.mapvgl.LinePointLayer.SHAPE_TYPE_CIRCLE, // 点的形状
        blend: 'lighter'// 点交汇时处理得方式
      })
      view.addLayer(linePointLayer)
      linePointLayer.setData(data)
    }

    onMounted(() => {
      const map = initBMap()
      const data = initData()
      console.log(data)
      setData(data, map)
    })
  }
}
</script>

<style>
  .anchorBL {
    width: 0;
    height: 0;
  }
</style>
<style lang="scss" scoped>
  .sales-map {
    position: absolute;
    top: 1850px;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 600px;
    padding: 25px 25px 0;
    box-sizing: border-box;

    .sales-map-inner {
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, .05);
      #map_container {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
