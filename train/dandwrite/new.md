# 实现 new

- 创建一个新对象
- 将构造函数的作用域赋给新对象（this 指向新对象）
- 执行构造函数中的代码，为这个新对象添加属性
- 返回新对象

```javascript
function myNew(constructor, ...args) {
  if (typeof constructor !== "function") throw new Error("must be function");
  // 创建对象
  let object = Object.create(constructor.prototype);

  // 改变this指向
  let res = constructor.apply(object, [...args]);

  let isObject = typeof res === "object" && res !== null;
  let isFunction = typeof res === "function";

  return isObject || isFunction ? res : obj;
}
```
