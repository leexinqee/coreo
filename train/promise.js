/* 
  const a = new Promise((resolve, reject) => {
    resole({})
    reject({})
  })
  a.then(res => { }, err => { })
  .catch(err => { })
*/

// 三种状态
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class Promise {

  constructor(executor) {

    this.status = PENDING;

    this.value = null;
    this.reason = null;

    // 成功回调函数队列
    this.fulfilledCallbacks = []

    // 异常错误回调队列
    this.rejectedCallbacks = []

    const resolve = (result) => {
      if (this.status !== PENDING) return

      this.status = FULFILLED

      this.value = result

      this.fulfilledCallbacks.forEach(fn => fn(this.value))
    }

    const reject = (reason) => {
      if (this.status !== PENDING) return

      this.status = REJECTED

      this.reason = reason

      this.rejectedCallbacks.forEach(fn => fn(this.value))
    }


    try {
      executor(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }

  then(onFulfilled, onRejected) {

    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
    onRejected = typeof onRejected === 'function' ? onRejected : reason => throw new Error(reason instanceof Error ? reason.message : reason)

    const self = this;
    return new Promise((resolve, reject) => {
      if (self.status === PENDING) {
        self.fulfilledCallbacks.push(() => {
          setTimeout(() => {
            onFulfilled(self.value)
          }, 0)
        })
        self.rejectedCallbacks.push(() => {
          setTimeout(() => {
            onRejected(self.reason)
          }, 0)
        })
      } else if (self.status === FULFILLED) {
        const result = onFulfilled(self.value)
        resolve(result)
      } else if (self.status === REJECTED) {
        const result = onRejected(self.reason)
        resolve(result)
      }
    })
  }

  catch(onRejected) {
    return this.then(null, onRejected)
  }

  static resolve(value) {
    if (value instanceof Promise) return value

    return new Promise((resolve) => {
      resolve(value)
    })
  }

  static reject(reason) {
    return new Promise((_, reject) => {
      reject(reason)
    })
  }


  static all(promiseAll) {
    const len = promiseAll.len;
    let count = 0
    const values = []

    return new Promise((resolve, reject) => {
      for(let i = 0; i < len; i++) {
        Promise.resolve(promiseAll[i]).then((res) => {
          values.push(res)
          count++;
          if (count === len) resolve(values)
        }, reason => reject(reason))
      }
    })
  }

  static race(promiseArr) {
    return new Promise((resolve, reject) => {

      promiseArr.forEach(promise => {
        Promise.resolve(promise).then(res => resolve(res), err => reject(err))
      })
    })
  }
}


