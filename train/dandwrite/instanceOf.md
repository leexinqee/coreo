# instanceOf

```javascript
  function myInstanceOf(left, right) {
    if (typeof left !== 'object' || left === null) return false

    let proto = Object.getPrototypeOf(left)

    while(true) {
      if (!proto) return false
      if (proto === right.prototype) return true
      proto = Object.getPrototypeOf(proto)
    }
  }
```