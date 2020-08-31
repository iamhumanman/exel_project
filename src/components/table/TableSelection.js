//класс для выдуления ячейки
export class TableSelection {
  constructor() {
    this.group = []
  }

  //$el instance of DOM === true
  select($el) {
    this.group.push($el)
    $el.addClass('selected')
  }

  selectGroup() {

  }
}