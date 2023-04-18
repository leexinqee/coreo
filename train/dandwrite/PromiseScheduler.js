/* 
  手写题：JS实现一个带并发限制的异步调度器Scheduler，保证同时运行的任务最多有两个。
  完善下面代码的Scheduler类，使以下程序能够正常输出：
  
  class Scheduler {
    add(promiseCreator) { ... }
    // ...
  }
    
  const timeout = time => new Promise(resolve => {
    setTimeout(resolve, time);
  })
    
  const scheduler = new Scheduler();
    
  const addTask = (time,order) => {
    scheduler.add(() => timeout(time).then(()=>console.log(order)))
  }

  addTask(1000, '1');
  addTask(500, '2');
  addTask(300, '3');
  addTask(400, '4');
*/

// 实现
class Scheduler {
  constructor() {
    // 并行最大执行数
    this.max = 2; 
    // 当前执行任务个数
    this.exeCounter = 0;
    // 回调队列
    this.queues = []
  }

  add(promiseCreator) {
    this.queues.push(promiseCreator)
    this.executor()
  }

  executor() {
    if (this.queues.length === 0 || this.exeCounter >= this.max) return
    this.exeCounter++;
    Promise.resolve(this.queues.shift()()).finally(() => {
      this.exeCounter--
      this.executor()
    })
  }
}
