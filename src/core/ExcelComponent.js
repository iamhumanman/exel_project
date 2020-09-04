import { DomListener } from "@core/DomListener";

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.name = options.name || ''
    this.emitter = options.emitter
    this.unsubscribers = []

    this.prepare()
  }

  //настройка компонента до init
  prepare() {}

  //возвращает ШАБЛОН компонента
  toHTML() {
    return ''
  }

  //уведомляем слушателей про событие event
  $emit(event, ...args) {
    this.emitter.emit(event, ...args)
  }

  // подписываемся на событие event
  $on(event, fn) {
    const unsub = this.emitter.subscribe(event, fn)
    this.unsubscribers.push(unsub)
  }

  //вызов метода ДОБАВЛЕНИЯ слушателей
  init() {
    this.initDOMListeners()
  }
  //вызов метода УДАЛЕНИЯ компонента, чистки слушателей
  destroy() {
    this.removeDOMListeners()
    this.unsubscribers.forEach(unsub => unsub())
  }
}