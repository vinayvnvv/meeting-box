<template>
  <div class="app-header">
    <div class="inner">
      <div class="left">
        <button class="btn is-icon is-mobile" @click="toggleNav"><i class="ion-navicon" /></button
        >&nbsp;
        <div class="form-control only-desktop">
          <input placeholder="Search for anything" />
        </div>
      </div>
      <div class="right">
        <button class="btn is-icon itm">
          <i class="ion-android-notifications-none"></i>
        </button>
        <button class="btn is-icon itm">
          <i class="ion-android-mail"></i>
        </button>
        <button class="btn is-icon itm">
          <i class="ion-android-star-outline"></i>
        </button>
        <img class="avtr" src="@/assets/john.jpeg" />
      </div>
    </div>
  </div>
</template>

<script>
import { navigrationDrawer } from './../services/nav-drawer'
export default {
  methods: {
    toggleNav() {
      navigrationDrawer.toggle()
    },
  },
}
</script>

<style lang="scss">
@import './../styles/vars.sass';
@import './../styles/mixins.sass';
.app {
  display: flex;
  & > .main-view {
    & > .app-header {
      display: flex;
      align-items: center;
      & > .inner {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        padding: 0px $layout-padding;
        @include only-mobile {
          padding: 0 $layout-padding-mobile;
        }
        & > .left {
          flex-grow: 1;
          display: flex;
          align-items: center;
          & > .form-control {
            height: 43;
            width: 70%;
            box-shadow: 0px 2px 8px -1px #d9d9d9;
            border-radius: 50px;
            overflow: hidden;
            & > input {
              outline: none;
              border: none;
              height: 43px;
              width: 100%;
              font-family: $font;
              font-size: 15px;
              padding: 0 23px;
              &::placeholder {
                font-family: $font;
                color: #bbb;
                font-size: 15px;
              }
            }
          }
        }
        & > .right {
          display: flex;
          align-items: center;
          & > .avtr {
            width: 40px;
            height: 40px;
            border-radius: 50em;
            cursor: pointer;
            margin-left: 11px;
          }
        }
        & .itm {
          margin: 0px 18px;
          color: #666;
        }
      }
    }
  }
}
</style>