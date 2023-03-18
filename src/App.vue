<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import router from './router'

export default {
  name: 'App',
  router,
  metaInfo: {
    titleTemplate: '%s | My Landing Page',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
    ]
  }
}
</script>
<style>
body {
  margin: 0;
}
</style>