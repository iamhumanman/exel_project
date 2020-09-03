export class Emitter {
  constructor() {
    this.listeners = {}
  }

  //метод для уведомления слушателей
  //пример реализации
  //table.emit('table.select', {a:1})
  emit(event, ...args) {
    if (!Array.isArray(this.listeners[event])) {
      return false
    }
    this.listeners[event].forEach(listener => {
      listener(...args)
    })
    return true
  }
  //метод для подписки на уведомления
  //добавляем нового слушателя
  //пример реализации
  //formula.subscribe('table.select', () => {})
  subscribe(event, fn) {
    this.listeners[event] = this.listeners[event] || []
    this.listeners[event].push(fn)
    return () => {
      this.listeners[event] =
        this.listeners[event].filter(listener => listener !== fn)
    }
  }
}

//пример работы Emitter
// const emitter = new Emitter()
// emitter.subscribe('alexandr', data => console.log('sub', data))
// emitter.emit('alexandr', 42)