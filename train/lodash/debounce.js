/* 
  手写防抖函数
  防抖：在一定时间内，多次触发同一个函数，只执行最后一次。
  例如，用户在输入框中输入内容时，我们可以设置一个函数只有在用户停止输入一定时间后才执行，以减少函数的执行次数，提高性能。
*/

function debounce(fn, wait) {
  let timer = null

  return function (...args) {
    let context = this;

    if (timer) {
      clearTimeout(timer)
      timer = null
    }

    timer = setTimeout(() => {
      fn.apply(context, args)
    }, wait)
  }
}