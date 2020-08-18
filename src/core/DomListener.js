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
      const method = getMethodName(listener)
      if (!this[method]) {
        throw new Error(`Ошибка: Method ${method} is not implemented in 
        ${this.name || ''} Component`)
      }
      //тоже самое что и addEventListener
      this.$root.on(listener, this[method].bind(this))
    })
  }

  removeDOMListeners() {
    //realize!
  }
}

//input => onInput функция
function getMethodName(eventName) {
  return 'on' + capitalize(eventName)
}