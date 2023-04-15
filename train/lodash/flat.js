/*
  数组扁平化
 */

function flat (arr = []) {
  return arr.reduce((pre, cur) => {
    if (Array.isArray(cur)) {
      const nextValue = flat(cur)
      return [...pre, ...nextValue]
    } else {
      return [...pre, cur]
    }
  }, [])
}
