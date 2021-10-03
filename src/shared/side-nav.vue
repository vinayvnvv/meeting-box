<template>
  <div class="app-side-nav">
    <div class="nav-cont">
      <div class="logo"><img src="@/assets/logo.png" /></div>
      <div class="list">
        <router-link
          v-for="itm in navList"
          :key="itm.url"
          class="list-itm"
          :to="itm.url"
          active-class="active"
        >
          <div class="left-corder" />
          <i :class="itm.icon"></i>
          <span>{{ itm.label }}</span>
        </router-link>
      </div>
      <div class="footer">
        <div class="divider" />
        <br />
        <router-link v-for="itm in footer" :key="itm.url" class="list-itm" :to="itm.url">
          <div class="left-corder" />
          <i :class="itm.icon"></i>
          <span>{{ itm.label }}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        { label: 'DashBoard', url: '/dashboard', icon: 'ion-ios-home-outline' },
        { label: 'My Tasks', url: '/my-tasks', icon: 'ion-ios-checkmark-outline' },
        { label: 'My Projects', url: '/my-projects', icon: 'ion-document' },
        { label: 'People', url: '/people', icon: 'ion-ios-people-outline' },
        { label: 'Statistics', url: '/statistics', icon: 'ion-ios-pie-outline' },
      ],
      footer: [
        { label: 'Help', url: '/help', icon: 'ion-ios-help-outline' },
        { label: 'Settings', url: '/settings', icon: 'ion-ios-gear-outline' },
      ],
    }
  },
}
</script>

<style lang="scss">
@import './../styles/vars.sass';
$left-pad: 32px;
$list-height: 100px;
$list-corder-height: 25px;
.app {
  display: flex;
  & > .app-side-nav {
    min-height: 100vh;
    height: 100vh;
    background-color: $primary;
    & > .nav-cont {
      padding-left: $left-pad;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      min-height: 100%;
      & > .logo {
        font-size: 22px;
        font-weight: 800;
        color: #fff;
        margin: 21px 0px;
      }
      & > .list {
        flex-grow: 1;
      }
      & .list-itm {
        display: flex;
        color: #fff;
        text-decoration: none;
        align-items: center;
        height: $list-height;
        position: relative;
        margin-top: -23px;
        &:hover:not(.active) {
          & > i {
            transform: scale(1.3);
          }
        }
        &.active {
          background-color: $content-bg;
          color: $primary;
          & > span {
            font-weight: 700;
          }
          &::after {
            content: '';
            position: absolute;
            width: 100%;
            height: $list-corder-height;
            top: 0;
            left: 0;
            background-color: $primary;
            border-radius: 0px 0px 21px 0px;
          }
          &::before {
            content: '';
            position: absolute;
            width: 100%;
            height: $list-corder-height;
            bottom: 0;
            left: 0;
            background-color: $primary;
            border-radius: 0px 21px 0px 0px;
          }
          & > .left-corder {
            height: $list-height - $list-corder-height * 2;
            position: absolute;
            left: -20px;
            background-color: $content-bg;
            width: $list-height - $list-corder-height * 2;
            border-radius: 40px 0px 0px 40px;
            margin-left: -2px;
          }
        }
        & > i {
          font-size: 23px;
          width: 20px;
          z-index: 5;
          transition: 0.2s all ease-in-out;
        }
        & > span {
          margin-left: 17px;
        }
      }
      & > .footer {
        & > .divider {
          width: calc(100% - #{$left-pad});
        }
        padding: 51px 0px;
      }
    }
  }
}
</style>