/* 
  实现一个深拷贝
*/

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