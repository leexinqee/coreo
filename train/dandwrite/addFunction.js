/* 
      请实现一个 add 函数，满足以下功能
      add(1);       // 1
      add(1)(2);    // 3
      add(1)(2)(3)；// 6
      add(1)(2, 3); // 6
      add(1, 2)(3); // 6
      add(1, 2, 3); // 6
    */

function add(...args) {
  const caller = (...args2) => {
    if (args2.length === 0) {
      return args.reduce((pre, item) => pre + item, 0)
    }
    return add.apply(null, args.concat(args2))
  }
  return caller
}

const total = add(1, 2)(3)(4)()