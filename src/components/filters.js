import * as utils from './utils.js';

class Filter {
  constructor(name) {
    this.name = name;
    this.count = utils.getRandomNumber()
  }
}

const filters = [`All`, `Overdue`, `Today`, `Favorites`, `Repeating`, `Tags`, `Archive`]

export const createFiltersTemplate = (filter) => {
  return (
    `<section class="main__filter filter container">
      
      <input
        type="radio"
        id="filter__overdue"
        class="filter__input visually-hidden"
        name="filter"
        disabled
      />
      <label for="filter__overdue" class="filter__label"
      >Overdue <span class="filter__overdue-count">0</span></label>
    </section>`
  );
};
