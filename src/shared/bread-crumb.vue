<template>
  <div class="bread-crumb">
    <div v-for="itm in data" :key="itm" class="bread-itm">
      <span>{{ itm }}</span> <i class="ion-ios-arrow-right" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
}
</script>

<style lang="scss">
@import './../styles/vars.sass';
.bread-crumb {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 5px 0px;
  .bread-itm {
    color: #666;
    & > span {
      cursor: pointer;
      font-size: 14px;
      text-decoration: underline;
      &:hover {
        color: $primary;
      }
    }
    & > i {
      margin: 0 9px;
    }
    &:last-child {
      & > i {
        display: none;
      }
      & > span {
        text-decoration: none;
      }
    }
  }
}
</style>