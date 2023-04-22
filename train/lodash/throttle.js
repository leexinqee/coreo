/**
 * 节流函数：
 * 在一定时间内只执行一次函数。
 * 例如，用户在滚动页面时，我们可以设置一个函数只有在每隔一段时间才执行一次，以减少函数的执行次数，提高性能。
 *  */

function throttle(fn, delay) {
  let timer = null;
  return function (...args) {
    let context = this;
    if (!timer) {
      timer = setTimeout(function () {
        fn.apply(context, args);
        timer = null;
      }, delay);
    }
  }
}

