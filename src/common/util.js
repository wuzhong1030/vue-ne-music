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
    console.log(delay)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}
