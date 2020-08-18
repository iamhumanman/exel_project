import { capitalize } from "./utils"

export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error(`No $root provided for DomListener`)
    }
    this.$root = $root
    this.listeners = listeners
  }

  initDOMListeners() {
    this.listeners.forEach(listener => {
      //в переменную 'method' помещаем трансформированное
      //название (input => onInput)
      const method = getMethodName(listener)
      if (!this[method]) {
        throw new Error(`Ошибка: Method ${method} is not implemented in 
        ${this.name || ''} Component`)
      }
      //тоже самое что и 'addEventListener', метод 'on()' его сокращенный
      //вариант
      this.$root.on(listener, this[method].bind(this))
    })
  }

  removeDOMListeners() {
    //необходимо реализовать!
  }
}

//добавляет слово 'on' в начале строки (input => onInput)
function getMethodName(eventName) {
  return 'on' + capitalize(eventName)
}