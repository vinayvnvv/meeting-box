<template>
  <div class="messages-list">
    <div>
      <br />
      <div class="list-ttl">TODAY</div>
      <div class="list">
        <div v-for="item in messages[0]" :key="item.id">
          <div
            class="list-item"
            :class="active === item.id ? 'active' : ''"
            @click="onSelect(item)"
          >
            <div class="icon">
              <i v-if="item.type === 'comment'" class="ion-ios-chatbubble-outline" />
              <img v-if="item.type === 'chat'" src="@/assets/alex.png" />
            </div>
            <div class="con">
              <div v-if="item.type === 'comment'" class="type-chat">
                <div><b>Miriam Grisham</b> commented on your file</div>
                <div>You are following <b>Ground Floor 3A</b><span>11:30am Today</span></div>
              </div>
              <div v-if="item.type === 'chat'" class="type-chat">
                <div><b>Miriam Grisham</b> <span>20 responses</span></div>
                <div v-html="parseChatText(item.text)" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="list-ttl">1 DAY AGO</div>
      <div class="list">
        <div v-for="item in messages[1]" :key="item.id">
          <div
            class="list-item"
            :class="active === item.id ? 'active' : ''"
            @click="onSelect(item)"
          >
            <div class="icon">
              <i v-if="item.type === 'comment'" class="ion-ios-chatbubble-outline" />
              <img v-if="item.type === 'chat'" src="@/assets/alex.png" />
            </div>
            <div class="con">
              <div v-if="item.type === 'comment'" class="type-chat">
                <div><b>Miriam Grisham</b> commented on your file</div>
                <div>You are following <b>Ground Floor 3A</b><span>11:30am Today</span></div>
              </div>
              <div v-if="item.type === 'chat'" class="type-chat">
                <div><b>Miriam Grisham</b> <span>20 responses</span></div>
                <div v-html="parseChatText(item.text)" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { parseChatText } from '@/services/text-parser'
export default {
  props: {
    messages: {
      type: Array,
      default: () => [],
    },
    active: {
      type: String,
      default: '',
    },
    onselect: {
      type: Function,
      default: () => {},
    },
  },
  methods: {
    onSelect(item) {
      this.$emit('onselect', item.id)
    },
    parseChatText(text) {
      return parseChatText(text)
    },
  },
}
</script>

<style lang="scss">
@import '@/styles/vars.sass';
@import '@/styles/mixins.sass';
.messages-list {
  //   margin-top: 33px;
  overflow-y: auto;
  position: relative;
  & > div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    & > .list-ttl {
      text-transform: uppercase;
      font-weight: 600;
      color: #555;
      font-size: 14px;
    }
    & > .list {
      margin: 19px 0px;
      & .list-item {
        display: flex;
        max-width: 70%;
        align-items: center;
        padding: 16px 19px;
        cursor: pointer;
        border-radius: 8px;
        margin: 3px 0px;
        transition: 0.1s all ease-in;
        @include only-mobile {
          max-width: 100%;
        }
        &:hover {
          background-color: transparentize($primary, 0.93);
        }
        &.active {
          background-color: #fff;
          box-shadow: 0px 2px 2px -1px #d9d9d9;
          @include only-mobile {
            background-color: transparent;
            box-shadow: none;
          }
        }
        & > .icon {
          width: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          left: -19px;
          & > i {
            font-size: 33px;
          }
          & > img {
            width: 33px;
            height: 33px;
            border-radius: 50em;
            box-shadow: 0px 0px 0px 3px #5ea35d;
          }
        }
        & > .con {
          position: relative;
          left: -9px;
          color: #444;
          & > .type-comment {
          }
          & span:not(.lnk) {
            position: relative;
            display: inline-block;
            font-size: 13px;
            color: #aaa;
            margin-left: 4px;
            &::before {
              content: '·';
              margin-right: 4px;
              font-weight: bold;
            }
          }
          & span.lnk {
            color: $primary;
          }
        }
      }
    }
  }
}
</style>