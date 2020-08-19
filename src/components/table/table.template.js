//в этом файле хранится логика связанная с таблицей.

//объект с числовым значением букв
const CODES ={
  A: 65,
  Z: 90,
}

//функция создания колонки
function toColumn(col) {
  return `
  <div class="column">${col}</div>
  `
}

//функия создания ячейки
// function createCell() {
//   return `
//   <div class="cell" contenteditable>B2</div>
//   `
// }

//функция создания строки
function createRow(content) {
  return `
  <div class="row">
    <div class="row-info"></div>
    <div class="row-data">${content}</div>
  </div>
  `
}

//функция приводящая числовое значение в его символ
function toChar(_, index) {
  return String.fromCharCode(CODES.A + index)
}

//функция генерации таблицы
export function createTable(rowsCount = 15) {
  const colsCount = CODES.Z - CODES.A + 1
  const rows = []

  const cols = new Array(colsCount)
      .fill('')
      .map(toChar)
      .map(toColumn)
      .join('')
  rows.push(createRow(cols))

  for (let i = 0; i < rowsCount; i++) {
    rows.push(createRow())
  }

  return rows.join('')
}