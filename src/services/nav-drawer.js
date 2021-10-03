function NavigationDrawer() {
  this.drawerId = 'app-side-nav'
  this.rootId = 'app'
  this.activeClass = 'active-sidebar'
  this.open = () => {
    const sideEl = document.getElementById(this.drawerId)
    sideEl.add(this.activeClass)
  }
  this.close = () => {
    const sideEl = document.getElementById(this.drawerId)
    sideEl.remove(this.activeClass)
  }
  this.toggle = () => {
    const el = document.getElementById(this.rootId)
    if (el) {
      const exists = el.classList.contains(this.activeClass)
      const sideEl = document.getElementById(this.drawerId)
      if (exists) {
        el.classList.remove(this.activeClass)
      } else {
        el.classList.add(this.activeClass)
      }
    }
  }
}
const navigrationDrawer = new NavigationDrawer()

export { navigrationDrawer }
