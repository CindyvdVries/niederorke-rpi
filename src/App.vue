<template>
  <v-app>
    <v-app-bar
      absolute
      color="#fcb69f"
      dark
      shrink-on-scroll
      :src="backgroundImg"
      scroll-target="#scrolling-techniques-2"
      app
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>
      <v-app-bar-nav-icon to="/">
        <v-icon>mdi-home</v-icon>
      </v-app-bar-nav-icon>
      <v-toolbar-title>Niederorke </v-toolbar-title>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      backgroundImg:
        'https://img.oldthing.net/9985/35975848/0/n/Ansichtskarte-Niederorke-Voehl-Panorama-Ansicht-aus-d-Vogelschau-1955.jpg'
    }
  }
}
</script>

<style>
.echarts {
  width: 100%;
  height: 100%;
}
</style>
