<template>
  <div class="messages" :class="mobileDetailView ? 'is-details' : ''">
    <List
      :messages="messages"
      :active="active"
      :mobile-detail-view="mobileDetailView"
      @onselect="onSelect"
    />
    <Viewer :active="active" @onback="onBack" />
  </div>
</template>

<script>
import List from './messages-list.vue'
import Viewer from './messages-viewer.vue'
import { messages } from './../../../data/data'
export default {
  components: { List, Viewer },
  data() {
    return { messages: [], active: '2133dsd', mobileDetailView: false }
  },
  mounted() {
    this.messages = messages
  },
  methods: {
    onSelect(id) {
      this.active = id
      this.mobileDetailView = true
    },
    onBack() {
      this.mobileDetailView = false
    },
  },
}
</script>

<style lang="scss">
@import '@/styles/mixins.sass';
.messages {
  display: flex;
  height: 100%;
  @include only-mobile {
    & > .messages-list {
      width: 100% !important;
      animation: 0.1s an-in ease-in-out;
    }
    & > .messages-viewer {
      display: none;
      width: 100% !important;
      animation: 0.1s an-in ease-in-out;
    }
  }
  & > .messages-list {
    width: 50%;
  }
  & > .messages-viewer {
    width: 50%;
  }
  &.is-details {
    @include only-mobile {
      & > .messages-list {
        display: none;
      }
      & > .messages-viewer {
        display: flex;
      }
    }
  }
}
@keyframes an-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>