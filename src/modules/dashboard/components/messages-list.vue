<template>
  <div class="messages-list">
    <div class="list-ttl">TODAY</div>
    <div class="list">
      <div class="list-item">
        <div class="icon">
          <i class="ion-ios-chatbubble-outline" />
        </div>
        <div class="con">
          <div class="type-comment">
            <div><b>Miriam Grisham</b> commented on your file</div>
            <div>You are following <b>Ground Floor 3A</b><span>11:30am Today</span></div>
          </div>
        </div>
      </div>
      <div class="list-item active">
        <div class="icon">
          <img src="@/assets/alex.png" />
        </div>
        <div class="con">
          <div class="type-chat">
            <div><b>Miriam Grisham</b> commented on your file</div>
            <div>You are following <b>Ground Floor 3A</b><span>11:30am Today</span></div>
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
.messages-list {
  margin-top: 33px;
  overflow-y: auto;
  & > .list-ttl {
    text-transform: uppercase;
    font-weight: 600;
    color: #555;
    font-size: 14px;
  }
  & > .list {
    margin: 19px 0px;
    & > .list-item {
      display: inline-flex;
      align-items: center;
      padding: 16px 19px;
      cursor: pointer;
      border-radius: 8px;
      margin: 3px 0px;
      transition: 0.1s all ease-in;
      &:hover {
        background-color: transparentize($primary, 0.93);
      }
      &.active {
        background-color: #fff;
        box-shadow: 0px 2px 2px -1px #d9d9d9;
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
        & span {
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
      }
    }
  }
}
</style>