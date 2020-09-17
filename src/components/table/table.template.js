//в этом файле хранится логика связанная с таблицей.

import { toInlineStyles } from "../../core/utils"

//объект с числовым значением букв
const CODES ={
  A: 65,
  Z: 90,
}

//функция создания колонки
function toColumn({col, index, width}) {
  return `
  <div class="column" data-type="resizable" 
  data-col="${index}" style="width: ${width}">
  ${col}
  <div class="col-resize" data-resize="col"></div>
  </div>
  `
}

const DEFAULT_WIDTH = 120
const DEFAULT_HEIGHT = 24

export function getWidth(state, index) {
  return (state[index] || DEFAULT_WIDTH) + 'px'
}

export function getHeight(state, index) {
  return (state[index] || DEFAULT_HEIGHT) + 'px'
}

//функция создания ячейки с замыканием
function toCell(state, row) {
  return function(_, col) {
    const id = `${row}:${col}`
    const width = getWidth(state.colState, col)
    const data = state.dataState[id]
    const styles = toInlineStyles(state.stylesState[id])
    return `
    <div 
    class="cell"
    contenteditable
    data-col="${col}"
    data-type="cell"
    data-id="${id}" 
    style="${styles}; width: ${width}"
    >${data || ''}</div>
    `
  }
}

//функция создания строки
function createRow(index, content, state) {
  const resize = index ? '<div class="row-resize" data-resize="row"></div>' : ''
  const height = getHeight(state, index)
  return `
  <div 
  class="row" 
  data-type="resizable" 
  data-row="${index}"
  style="height: ${height}"
  >
    <div class="row-info">
    ${index ? index: ''}
    ${resize}
    </div>
    <div class="row-data">${content}</div>
  </div>
  `
}

//функция приводящая числовое значение в его символ
function toChar(_, index) {
  return String.fromCharCode(CODES.A + index)
}


function withWidthFrom(state) {
  return function(col, index) {
    return {
      col, index, width: getWidth(state.colState, index)
    }
  }
}

//функция генерации таблицы
export function createTable(rowsCount = 15, state = {}) {
  const colsCount = CODES.Z - CODES.A + 1
  const rows = []

  const cols = new Array(colsCount)
      .fill('')
      .map(toChar)
      .map(withWidthFrom(state))
      .map(toColumn)
      // .map((col, index) => {
      //   const width = getWidth(state.colState, index)
      //   return toColumn(col, index, width)
      // })
      .join('')
  rows.push(createRow(null, cols, {}))

  for (let row = 0; row < rowsCount; row++) {
    const cells = new Array(colsCount)
        .fill('')
        .map(toCell(state, row))
        .join('')
    rows.push(createRow(row + 1, cells, state.rowState))
  }

  return rows.join('')
}