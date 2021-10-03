<template>
  <div class="dashboard">
    <div class="toolbar">
      <BreadCrumb :data="tree" />
      <Toolbar />
    </div>
    <div class="dashboard-content">
      <Messages />
    </div>
  </div>
</template>

<script>
import BreadCrumb from './../../shared/bread-crumb.vue'
import Toolbar from './components/toolbar.vue'
import Messages from './components/messages.vue'
export default {
  components: { BreadCrumb, Toolbar, Messages },
  data() {
    return {
      tree: ['DashBoard', 'Messages & Notifications'],
    }
  },
}
</script>

<style lang="scss">
@import './../../styles/vars.sass';
@import './../../styles/mixins.sass';
.dashboard {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  & > .toolbar {
    padding: 0 $layout-padding;
    @include only-mobile {
      padding: 0 $layout-padding-mobile;
    }
  }
  & > .dashboard-content {
    padding: 0 $layout-padding;
    flex-grow: 1;
    @include only-mobile {
      padding: 0 $layout-padding-mobile;
    }
  }
}
</style>