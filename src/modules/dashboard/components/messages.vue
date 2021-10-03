<template>
  <div class="messages">
    <List />
    <Viewer />
  </div>
</template>

<script>
import List from './messages-list.vue'
import Viewer from './messages-viewer.vue'
export default {
  components: { List, Viewer },
}
</script>

<style lang="scss">
.messages {
  display: flex;
  height: 100%;
  & > .messages-list {
    width: 50%;
  }
  & > .messages-viewer {
    width: 50%;
  }
}
</style>