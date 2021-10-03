<template>
  <div class="messages-viewer">
    <div>
      <div class="toolbar">
        <div class="ttl">Pascal Neorij</div>
        <div class="s-tl">20 responses</div>
      </div>
      <div class="texts-list">
        <div>
          <div v-for="i in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 14]" :key="i" class="list-item">
            <img src="@/assets/john.jpeg" />
            <div class="r">
              <div class="n">Pascal Neorij</div>
              <div class="m">
                Lorem ipsum @marina.mnadala dolor sit <span>@marina.maro</span> amet, consecterin.
              </div>
              <div class="t">11 Mar<span>11:30Am</span></div>
              <div class="divider" />
            </div>
          </div>
        </div>
      </div>
      <div class="form">
        <div>
          <div class="field">
            <img src="@/assets/john.jpeg" />
            <textarea rows="2" placeholder="Replay to message"></textarea>
          </div>
          <div class="actions">
            <button class="btn is-icon"><i class="ion-paperclip" /></button>
            <button class="btn is-icon"><i class="ion-ios-at" /></button>
            <button class="btn is-icon"><i class="ion-link" /></button>
            <button class="btn is-icon is-primary"><i class="ion-ios-paperplane" /></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import '@/styles/vars.sass';
.messages-viewer {
  display: flex;
  flex-direction: column;
  height: 100%;
  & > div {
    flex-grow: 1;
    margin-bottom: 13px;
    margin-left: 13px;
    box-shadow: 0px 0px 21px -1px #d9d9d999;
    background-color: #fff;
    border-radius: 13px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
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