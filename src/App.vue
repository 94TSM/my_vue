<template>
  <div id="app">
    <xxfHead/>
    <router-view></router-view>
  </div>
</template>

<script>
import xxfHead from './components/xxfHead'

export default {
  name: 'app',
  components: {
    xxfHead
  }
}
</script>

<style>
  #app{width:100%;}
</style>
