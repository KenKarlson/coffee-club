<template>
  <div id="app">    
    <router-view></router-view>
    <footer-component></footer-component>
  </div>
</template>

<script>
import FooterComponent from './components/FooterComponent.vue';
export default {
  components: { FooterComponent }
}
</script>
