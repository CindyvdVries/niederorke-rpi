<template>
  <v-container fluid fill-height>
    <v-row justify="space-end" align="start">
      <v-card
        min-width="334px"
        width="45vw"
        height="200px"
        class="ma-3"
        v-for="sensor in sensors"
        :key="sensor.name"
        color="#385F73"
        dark
      >
        <v-card-title class="headline">{{ sensor.name }}</v-card-title>
        <v-card-subtitle>{{ sensor.sensorId }}</v-card-subtitle>
        <v-card-actions>
          <v-btn :to="sensor.sensorId" outlined>Data</v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data: () => ({
    sensors: []
  }),
  mounted () {
    this.getSensors()
  },
  methods: {
    getSensors () {
      fetch(`${process.env.VUE_APP_SERVER_URL}/sensors`)
        .then(res => {
          return res.json()
        })
        .then(response => {
          this.sensors = response
        })
    }
  }
}
</script>
