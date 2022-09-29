### 深拷贝算法
```
function deepClone(obj = {}, map = new WeekMap()) {

  // null类型属于obj，提前返回
  if (typeof obj === null) return obj

  // 时间对象
  if (obj instanceof Date) return new Date(obj)

  // 正则对象
  if(obj instanceof RegExp) return new RegExp(obj)

  // 分类型
  if (typeof obj !== 'object') return obj

  // 防止循环引用
  if (map.get(obj)) return map.get(obj)

  // 构建空对象
  let cloneObj = Array.isArray(obj) ? [] : {}

  // 存储到对象中，进行对象去重引用问题
  map.set(obj, cloneObj)

  // 循环遍历所有key值
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloneObj[key] = deepClone(obj[key])
    }
  }
}
```

### call方法实现
```
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
```

### apply方法实现
```
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
```

### 事件触发器
```
class EventBus {
  constructor() {
    this.$events = {}
  }

  $on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = []
    }
    this.events[eventName].push(callback)
  }

  $emit(eventName, ...args) {
    const eventList = this.events[eventName]
    if (eventList && eventList.length) {
      eventList.map(callback => {
        callback(...args)
      })
    }
  }

  $off(eventName) {
    const eventList = this.events[eventName]
    if (eventList) {
      delete this.events[eventName]
    }
  }
}
```









