import { Page } from "../core/Page";
import { $ } from '@core/dom'
import { createRecordsTable } from "./dashboard.function";


export class DashboardPage extends Page {
  getRoot() {
    const nov = Date.now().toString()
    return $.create('div', 'db').html(`
    <div class="db">
    <div class="db__header">
    <h1>Excel панель управления</h1>
    </div>
    <div class="db__new">
    <div class="db__view">
    <a href="#excel/${nov}" class="db__create">
    Новая <br /> таблица
    </a>
    </div>
    </div>
    <div class="db__table db__view">
    ${createRecordsTable()}
    </div>
    `)
  }
}