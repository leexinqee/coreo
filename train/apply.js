Function.prototype.myApply = function(context = window, args = []) {
  // 传入上下文中定义一个临时执行函数，将当前调用函数赋值到上下文中的另一个函数中
  context.fn = this

  // 在传入的上下文中执行
  let result = context.fn(...args)

  // 新增的临时函数执行删除
  delete context.fn

  // 返回在传入的上下文中执行的结果
  return result
}

Function.prototype.myCall = function(context = window, ...args) {
  // 改变this指向，将当前调用函数赋值到上下文中的另一个函数中
  context.fn = this

  // 在传入的上下文中执行
  let result = context.fn(...args)

  // 新增的临时函数执行删除
  delete context.fn

  // 返回在传入的上下文中执行的结果
  return result
}

Function.prototype.bind = function(context = window, ...args) {
  const self = this;

  function temp(...args2) {
    return self.apply(context, [...args, ...args2])
  }

  temp.prototype = Object.create(this.prototype)

  return temp
}