import Clipboard from 'clipboard'
export function copyText(selector, text = '') {
  if (!text) text = window.location
  const clipboard = new Clipboard(selector, {
    text: () => text
  })
  // 解决第一次点击不生效的问题，如果没有，第一次点击会不生效
  return new Promise((resolve, reject) => {
    clipboard.on('success', () => {
      // 释放内存
      clipboard.destroy()
      setTimeout(() => {
        resolve()
      }, 200)
    })
    clipboard.on('error', () => {
      // 释放内存
      clipboard.destroy()
      setTimeout(() => {
        reject()
      }, 200)
    })
  })
}
