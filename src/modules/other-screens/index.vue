<template>
  <div class="other-content">{{ title }}</div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
    }
  },
  watch: {
    $route() {
      this.title = this.$router.history.current.name
    },
  },
}
</script>

<style lang="scss">
@import '@/styles/vars.sass';
.other-content {
  padding: 21px $layout-padding;
  color: #666;
  font-weight: 700;
}
</style>