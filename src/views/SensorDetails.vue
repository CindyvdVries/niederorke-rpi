<template>
  <v-card fill-heighth widht="100%" class="ma-3">
    <v-card-title>{{ $route.params.sensor }}</v-card-title>
    <v-chart :options="options"> </v-chart>
  </v-card>
</template>

<script>
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/dataZoom'
import 'echarts/lib/component/tooltip'

export default {
  name: 'sensor-details',
  components: {
    'v-chart': ECharts
  },
  data () {
    return {
      temperature: 'test',
      options: {}
    }
  },
  mounted () {
    fetch(
      `${process.env.VUE_APP_SERVER_URL}/temperature/${this.$route.params.sensor}`
    )
      .then(res => {
        return res.json()
      })
      .then(response => {
        const data = []
        const dates = []
        response.forEach(row => {
          dates.push(row.time)
          data.push(parseFloat(row.temp))
        })
        this.options = {
          xAxis: {
            type: 'category',
            data: dates
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: data,
              type: 'line'
            }
          ]
        }
      })
  }
}
</script>

<style></style>
