<template>
  <div class="app-header">
    <div class="inner">
      <div class="left">
        <div class="form-control">
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
export default {}
</script>

<style lang="scss">
@import './../styles/vars.sass';
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
        & > .left {
          flex-grow: 1;
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