<template>
  <div class="messages-viewer">
    <div v-if="selected && selected.type === 'chat'">
      <button type="button" class="close btn is-icon" @click="onBack">
        <i class="ion-close-round" />
      </button>
      <div class="toolbar">
        <div class="ttl">Pascal Neorij</div>
        <div class="s-tl">20 responses</div>
      </div>
      <div class="texts-list">
        <div ref="scroller">
          <div v-for="i in chats" :key="i.id" class="list-item">
            <img src="@/assets/john.jpeg" />
            <div class="r">
              <div class="n">{{ i.name }}</div>
              <div class="m" v-html="parseChatText(i.text)" />
              <div class="t">
                {{ i.date }}<span>{{ i.time }}</span>
              </div>
              <div class="divider" />
            </div>
          </div>
        </div>
      </div>
      <div class="form">
        <div>
          <div class="field">
            <img src="@/assets/john.jpeg" />
            <textarea v-model="text" rows="2" placeholder="Replay to message"></textarea>
          </div>
          <div class="actions">
            <button class="btn is-icon"><i class="ion-paperclip" /></button>
            <button class="btn is-icon"><i class="ion-ios-at" /></button>
            <button class="btn is-icon"><i class="ion-link" /></button>
            <button class="btn is-icon is-primary" @click="addChat">
              <i class="ion-ios-paperplane" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="selected && selected.type === 'comment'" class="noti">
      This is the view for notification type selected by the user<br /><br />
      Click on any chat type to see the view for Chats<br /><br />
      <button class="btn is-secondary" @click="onBack">Back</button>
    </div>
  </div>
</template>

<script>
import { messages, chats } from './../../../data/data'
import { parseChatText } from '@/services/text-parser'
export default {
  props: {
    active: {
      type: String,
      default: '',
    },
    onback: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {
      chats: [],
      text: '',
      selected: null,
    }
  },
  watch: {
    active() {
      this.init()
    },
  },
  mounted() {
    this.init()
    this.chats = chats
  },
  methods: {
    init() {
      const msgs = messages[0].concat(messages[1])
      const idx = msgs.map((i) => i.id).indexOf(this.active)
      console.log(idx)
      if (idx !== -1) {
        this.selected = msgs[idx]
      } else {
        this.selected = null
      }
    },
    addChat() {
      if (this.text)
        this.chats.push({
          name: 'Miriam Grisham',
          id: new Date().toISOString(),
          date: '11 Mar 21',
          time: '11:30',
          text: this.text,
        })
      this.text = ''
      setTimeout(() => this.scrollToBottom(), 100)
    },
    scrollToBottom() {
      let element = this.$refs['scroller']
      console.log(element)
      element.scrollTop = element.scrollHeight
    },
    parseChatText(text) {
      return parseChatText(text)
    },
    onBack() {
      this.$emit('onback')
    },
  },
}
</script>

<style lang="scss">
@import '@/styles/vars.sass';
.messages-viewer {
  display: flex;
  flex-direction: column;
  height: 100%;
  & > .noti {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 55px;
    font-size: 18px;
    color: #777;
    text-align: center;
  }
  & > div {
    position: relative;
    flex-grow: 1;
    margin-bottom: 13px;
    margin-left: 13px;
    box-shadow: 0px 0px 21px -1px #d9d9d999;
    background-color: #fff;
    border-radius: 13px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    & > .close {
      position: absolute;
      top: 7px;
      right: 7px;
    }
    & > .toolbar {
      padding: 21px;
      & > .ttl {
        font-weight: 700;
        font-size: 18px;
      }
      & > .s-tl {
        font-size: 14px;
        color: #444;
        margin-top: 7px;
      }
    }
    & > .texts-list {
      flex-grow: 1;
      overflow: auto;
      position: relative;
      & > div {
        position: absolute;
        height: 100%;
        overflow-y: auto;
        width: 100%;
        padding: 0px 21px;
        & > .list-item {
          display: flex;
          color: #444;
          margin: 21px 0px;
          &:first-child {
            margin-top: 0px;
          }
          & > img {
            width: 36px;
            height: 36px;
            margin-top: 5px;
            border-radius: 50em;
            box-shadow: 0px 0px 0px 3px #5ea35d;
          }
          & > .r {
            margin-left: 16px;
            width: calc(100% - 92px);
            & > .n {
              font-weight: 600;
              font-size: 14px;
            }
            & > .m {
              margin-top: 2px;
              & > span {
                color: $primary;
              }
            }
            & > .t {
              font-size: 12px;
              color: #aaa;
              margin-top: 2px;
              & > span {
                cursor: pointer;
                display: inline-block;
                &::before {
                  content: '·';
                  margin-right: 4px;
                  margin-left: 4px;
                  font-weight: bold;
                }
              }
            }
            & > .divider {
              margin-top: 11px;
              background-color: #d9d9d966;
            }
          }
        }
      }
    }
    & > .form {
      padding: 11px 21px 21px 21px;
      & > div {
        border: 1px solid #d9d9d999;
        overflow: hidden;
        border-radius: 8px;
        background-color: #f9f9f9;
        & > .field {
          position: relative;
          & > img {
            height: 26px;
            width: 26px;
            border-radius: 50em;
            top: 11px;
            left: 11px;
            position: absolute;
            box-shadow: 0px 0px 0px 3px #5ea35d;
          }
          & > textarea {
            width: 100%;
            outline: none;
            border: none;
            background-color: #f9f9f9;
            padding: 11px;
            padding-left: 50px;
            font-family: $font;
            font-size: 15px;
          }
        }
        & > .actions {
          display: flex;
          justify-content: flex-end;
          border-top: 1px solid #d9d9d9;
          padding: 5px;
        }
      }
    }
  }
}
</style>