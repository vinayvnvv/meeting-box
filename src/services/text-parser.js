export const parseChatText = (text) => {
  return text.replace(/(\s@[a-zA-Z0-9.]*\s)/g, ($1) => {
    return `<span class="lnk">${$1}</span>`
  })
}
