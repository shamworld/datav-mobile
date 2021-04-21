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
    const init = () => {
      // 初始化百度地图
      const initBMap = () => {
        const map = window.initMap({
          tilt: 0,
          center: [108.154518, 36.643346],
          zoom: 4,
          style: window.darkStyle
        })
        return map
      }
      const initData = () => {
        const randomCount = 500
        // 初始化 点
        const nodeData = [
          {
            x: 108.154518,
            y: 36.643346
          }
        ]
        // 初始化 边
        const edgeData = [
          {
            source: 1, // nodeData里面下标
            target: 0
          }
        ]
        const cities = [
          '北京', '天津', '上海', '重庆', '石家庄', '太原', '呼和浩特', '哈尔滨', '长春', '沈阳', '济南', '南京', '合肥', '杭州', '南昌', '福州', '郑州', '武汉', '长沙', '广州', '南宁', '西安', '银川', '兰州', '西宁', '乌鲁木齐', '成都', '贵阳', '昆明', '拉萨', '海口'
        ]
        // 构造数据
        // 生成贝塞尔曲线坐标集
        // 实例化贝塞尔曲线对象
        for (let i = 1; i < randomCount; i++) {
          const cityCenter = window.mapv.utilCityCenter.getCenterByCityName(cities[parseInt(Math.random() * cities.length)])
          nodeData.push({
            x: cityCenter.lng - 5 + Math.random() * 10,
            y: cityCenter.lat - 5 + Math.random() * 10
          })
          edgeData.push({
            source: parseInt(i * Math.random()),
            target: 0
          })
        }
        // 强行边绑定 把相邻得边汇聚到一起
        const fbundling = window.mapv.utilForceEdgeBundling()
          .nodes(nodeData)
          .edges(edgeData)
          // 返回所有的点
        const results = fbundling()
        const data = []
        for (let i = 0; i < results.length; i++) {
          const line = results[i]
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
        return {
          lineData: data
        }
      }
      // 绘制数据源
      const setData = ({ lineData }) => {
        // 初始化图层
        const view = new window.mapvgl.View({ map })
        // 初始化LineLayer
        const lineLayer = new window.mapvgl.LineLayer({
          color: 'rgba(55, 50, 250, 0.3)',
          blend: 'lighter'
        })
        view.addLayer(lineLayer)
        lineLayer.setData(lineData)
        const linePointLayer = new window.mapvgl.LinePointLayer({
          size: 8, // 点的大小
          speed: 10, // 点运动得速度
          color: 'rgba(255, 255, 0, 0.6)', // 点的颜色
          animationType: window.mapvgl.LinePointLayer.ANIMATION_TYPE_SMOOTH, // 点的动画类型
          shapeType: window.mapvgl.LinePointLayer.SHAPE_TYPE_CIRCLE, // 点的形状
          blend: 'lighter'// 点交汇时处理得方式
        })
        view.addLayer(linePointLayer)
        linePointLayer.setData(lineData)
      }

      const map = initBMap()
      const data = initData()
      setData(data)
    }
    onMounted(() => {
      init()
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
