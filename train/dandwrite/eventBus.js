// 事件触发器

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