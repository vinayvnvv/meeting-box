<template>
  <div id="app" class="app">
    <SideNav />
    <div class="main-view">
      <AppHeader />
      <div class="app-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import SideNav from './shared/side-nav.vue'
import AppHeader from './shared/app-header.vue'
export default {
  components: { SideNav, AppHeader },
}
</script>

<style lang="scss">
@import './styles/main.scss';
</style>