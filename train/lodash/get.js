/* 
  实现lodash.get方法
  const obj = { a: { b: { c: 'value' } } };
  console.log(get(obj, 'a.b.c')); // 'value'
  console.log(get(obj, ['a', 'b', 'c'])); // 'value'
  console.log(get(obj, 'a.b.d', 'default')); // 'default'
*/

function get(obj, key, defaultValue = undefined) {

  const keys = typeof key === 'string' ? key.split('.') : key

  for(let i = 0; i < keys.length; i++) {
    
    if (!obj || !obj[keys[i]]) {
      return defaultValue
    }

    obj = obj[keys[i]]
  }

  return obj
}


