import {createMenuTemplate} from './components/menu.js';
import {createFiltersTemplate} from './components/filters.js';
import {createBoardTemplate} from './components/board.js';
import {createLoadMoreButtonTemplate} from './components/load-more-button.js';
import {createTaskTemplate} from './components/task.js';
import {createTaskEditTemplate} from './components/task-edit.js';
import {tasks} from './components/task-list.js';

const MAX_CARDS_QUANTITY = 3;

const SelectorElement = {
  MAIN: `main.main`,
  MENU_WRAPPER: `.main__control.control.container`,
  BOARD: `.board.container`,
  CARD_WRAPPER: `.board__tasks`
};

const renderTemplate = (element, template, place = `beforeend`) => {
  element.insertAdjacentHTML(place, template);
};

const mainElement = document.querySelector(SelectorElement.MAIN);
const menuWrapperElement = mainElement.querySelector(SelectorElement.MENU_WRAPPER);

renderTemplate(menuWrapperElement, createMenuTemplate());
renderTemplate(mainElement, createFiltersTemplate());
renderTemplate(mainElement, createBoardTemplate());

const boardElement = mainElement.querySelector(SelectorElement.BOARD);
renderTemplate(boardElement, createLoadMoreButtonTemplate());

const cardsWrapperElement = boardElement.querySelector(SelectorElement.CARD_WRAPPER);
renderTemplate(cardsWrapperElement, createTaskEditTemplate());
for (let i = 0; i < MAX_CARDS_QUANTITY; i++) {
  renderTemplate(cardsWrapperElement, createTaskTemplate(tasks[i]));
}

