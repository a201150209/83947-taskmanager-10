import {coinToss} from '../components/utils.js';

export const descriptions = ['Изучить теорию', 'Сделать домашку', 'Пройти интенсив на соточку'];

export const tags = [`homework`, `theory`, `practice`, `intensive`, `keks`, `bla-bla`];

export const colors = [`black`, `yellow`, `blue`, `green`, `pink`];

export const repeatingDays = {
  mo: coinToss(),
  tu: coinToss(),
  we: coinToss(),
  th: coinToss(),
  fr: coinToss(),
  sa: coinToss(),
  su: coinToss()
};
