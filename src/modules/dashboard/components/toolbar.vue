<template>
  <div class="dashboard-tool">
    <div>
      <select>
        <option>All</option>
        <option>Unread</option>
        <option>Read</option>
      </select>
      <select>
        <option>Most recent</option>
        <option>Old</option>
      </select>
    </div>
    <div>
      <button class="btn is-secondary"><i class="ion-android-mail icon-left" /> Message</button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import './../../../styles/vars.sass';
.dashboard-tool {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 21px 0px 11px 0px;
  & > div {
    select {
      background-color: $primary;
      color: #f0f0f0;
      border: none;
      border-radius: 50em;
      display: inline-block;
      font: inherit;
      font-size: 15px;
      line-height: 1.5em;
      padding: 0.4em 2.5em 0.4em 1em;
      outline: none;
      cursor: pointer;
      /* reset */

      margin: 0;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      -webkit-appearance: none;
      -moz-appearance: none;
      background-image: linear-gradient(45deg, transparent 50%, #fff 50%),
        linear-gradient(135deg, #fff 50%, transparent 50%);
      // linear-gradient(to right, lighten($primary, 11), #ccc);
      background-position: calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px),
        calc(100% - 2.5em) 0.5em;
      background-size: 5px 5px, 5px 5px, 1px 1.5em;
      background-repeat: no-repeat;
      margin-right: 13px;
    }
  }
}
</style>