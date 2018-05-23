/**
 * 函数去抖
 * @param {*} func 
 * @param {*} delay 
 */
export function debounce(func, delay) {
  let timer;
  return function () {
    let args = arguments;
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}
