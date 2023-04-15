/* 
  手写JSON.stringify实现
  主要特点是：JSON.stringify对function、undefined、Symbol的特殊处理
*/

function jsonStringify(obj) {
  let type = typeof obj;
  if (type !== "object" || obj === null) {
    // 如果是null或者基本数据类型，直接返回结果
    let result = obj;
    if (Number.isNaN(obj) || obj === Infinity) {
      result = "null";
    } else if (type === "function" || type === "undefined" || type === "symbol") {
      return undefined;
    } else if (type === "string") {
      result = '"' + obj + '"';
    }
    return String(result);
  } else {
    // 处理数组和对象
    let json = [];
    let isArray = Array.isArray(obj);
    for (let key in obj) {
      let value = obj[key];
      let type = typeof value;
      if (type === "function" || type === "undefined" || type === "symbol") {
        continue;
      }
      if (isArray) {
        json.push(jsonStringify(value));
      } else {
        json.push('"' + key + '":' + jsonStringify(value));
      }
    }
    if (isArray) {
      return "[" + json.join(",") + "]";
    } else {
      return "{" + json.join(",") + "}";
    }
  }
}
