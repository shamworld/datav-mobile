<!--
 * @message: 描述
 * @Author: Roy
 * @Email: @163.com
 * @Github: @163.com
 * @Date: 2021-04-20 23:22:15
 * @LastEditors: Roy
 * @LastEditTime: 2021-04-20 23:31:32
 * @Deprecated: 否
 * @FilePath: /datav-mobile/src/components/SalesPie/index.vue
-->
<template>
  <div class="sales-pie">
    <div class="sales-pie-inner">
      <div class="pie-item">
        <div class="pie-item-inner">
          <v-chart :option="options1" />
        </div>
      </div>
      <div class="pie-item">
        <div class="pie-item-inner">
          <v-chart :option="options2" />
        </div>
      </div>
      <div class="pie-item">
        <div class="pie-item-inner">
          <v-chart :option="options3" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
export default {
  setup () {
    const options1 = ref({})
    const options2 = ref({})
    const options3 = ref({})
    const createOptions = (title, value, values) => {
      return {
        title: [{
          text: title,
          textStyle: {
            color: 'rgba(255,255,255,.3)',
            fontSize: 12
          },
          top: 3
        }, {
          text: value,
          textStyle: {
            color: 'rgba(255,255,255)',
            fontSize: 16,
            fontWeight: 500
          },
          top: '43%',
          left: '32%'
        }],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        series: [
          {
            name: title,
            type: 'pie',
            radius: ['65%', '80%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '30',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              {
                value: values[0],
                name: '数据',
                itemStyle: {
                  color: 'rgb(0, 140, 217)'
                }
              },
              {
                value: values[1],
                name: '数据',
                itemStyle: {
                  color: 'rgb(35, 69, 145)'
                }
              }
            ]
          }
        ]
      }
    }
    const update = () => {
      options1.value = createOptions('转化率', '13%', [1000, 130])
      options2.value = createOptions('退单率', '5%', [1000, 50])
      options3.value = createOptions('跳失率', '43%', [1000, 430])
    }
    onMounted(() => {
      update()
    })

    return {
      options1,
      options2,
      options3
    }
  }

}
</script>

<style lang="scss" scoped>
  .sales-pie {
    position: absolute;
    top: 1450px;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 400px;
    padding: 25px 12.5px 0;
    box-sizing: border-box;

    .sales-pie-inner {
      display: flex;
      width: 100%;
      height: 100%;

      .pie-item {
        flex: 0 0 33.33%;
        width: 33.33%;
        height: 100%;
        padding: 0 12.5px;
        box-sizing: border-box;

        .pie-item-inner {
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, .05);
        }
      }
    }
  }
</style>
