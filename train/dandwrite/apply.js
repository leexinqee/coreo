Function.prototype.myApply = function (context = window) {
  if (typeof this !== 'function') {
    throw new Error('Type error')
  }

  // 执行结果
  let result = null;

  const fnName = Symbol()
  context[fnName] = this

  if (arguments[1]) {
    result = context[fnName](...arguments[1])
  } else {
    result = context[fnName]()
  }
  delete context[fnName]

  return result
}

Function.prototype.myCall = function (context = window) {
  if (typeof this !== 'function') {
    throw new Error('Type error')
  }

  // 取入参的参数
  const args = [...arguments].slice(1)

  // 执行结果
  let result = null;

  const fnName = Symbol()
  context[fnName] = this
  if (args.length) {
    result = context[fnName](...args)
  } else {
    result = context[fnName]()
  }
  delete context[fnName]

  return result
}

Function.prototype.myBind = function(context = window) {
  if (typeof this !== 'function') {
    throw new Error('Type error')
  }

  // 取入参的参数
  const args = [...arguments].slice(1)

  const fn = this
  return function Fn() {
    fn.apply(this instanceof fn ? this : context, args.concat(...arguments))
  }
}

