import * as utils from './utils.js';
import * as mocks from '../mocks/task.js';

export class Task {
  constructor() {
    this.description = utils.getRandomArrayElement(mocks.descriptions);
    this.dueDate = utils.getRandomDate(-7, 7);
    this.repeatingDays = mocks.repeatingDays;
    this.tags = utils.getRandomSet(mocks.tags, 0, 2)
    this.color = utils.getRandomArrayElement(mocks.colors);
    this.isFavorite = utils.coinToss();
    this.isArchive = utils.coinToss();
  }
}

const createHashtagTemplate = (tag) => {
  return (
    `<span class="card__hashtag-inner">
      <span class="card__hashtag-name">
        #${tag}
      </span>
    </span>`
  )
};

const createHashtagListTemplate = (tags) => {
  let tagsListTemplate = ``;

  tags.forEach((value) => {
    tagsListTemplate += createHashtagTemplate(value);
  })

  return tagsListTemplate;
};

export const createTaskTemplate = (task) => {

  return (
    `<article class="card card--${task.color}">
      <div class="card__form">
        <div class="card__inner">
          <div class="card__control">
            <button type="button" class="card__btn card__btn--edit">
              edit
            </button>
            <button type="button" class="card__btn card__btn--archive">
              archive
            </button>
            <button type="button" class="card__btn card__btn--favorites card__btn--disabled">
              favorites
            </button>
          </div>

          <div class="card__color-bar">
            <svg class="card__color-bar-wave" width="100%" height="10">
              <use xlink: href="#wave"></use>
            </svg>
        </div>

        <div class="card__textarea-wrap">
          <p class="card__text">${task.description}</p>
        </div>

        <div class="card__settings">
          <div class="card__details">
            <div class="card__dates">
              <div class="card__date-deadline">
                <p class="card__input-deadline-wrap">
                  <span class="card__date">${utils.getDateAsString(task.dueDate)}</span>
                  <span class="card__time">${utils.getTimeAsString(task.dueDate)}</span>
                </p>
              </div>
            </div>

            <div class="card__hashtag">
              <div class="card__hashtag-list">
                ${createHashtagListTemplate(task.tags)}
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </article> `
  );
};
