import { DomListener } from "@core/DomListener";

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.name = options.name || ''
  }

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