import { DomListener } from "@core/DomListener";

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.name = options.name || ''
    this.emitter = options.emitter

    this.prepare()
  }

  prepare() {}

  //возвращает ШАБЛОН компонента
  toHTML() {
    return ''
  }

  //вызов метода ДОБАВЛЕНИЯ слушателей
  init() {
    this.initDOMListeners()
  }
  //вызов метода УДАЛЕНИЯ слушателей
  destroy() {
    this.removeDOMListeners()
  }
}