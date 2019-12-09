const numberToMonthName = {
  '0': `January`,
  '1': `February`,
  '2': `March`,
  '3': `April`,
  '4': `May`,
  '5': `June`,
  '6': `Jule`,
  '7': `August`,
  '8': `September`,
  '9': `October`,
  '10': `November`,
  '11': `December`
};

export const getRandomNumber = (min, max, float = 0) => {
  let number = +((Math.random() * (max - min + 1)) + min).toFixed(float);

  if (number > max || number < min) {
    number = getRandomNumber(max, min, float);
  }

  return number;
}

export const getRandomArrayElement = (array) => {
  return array[getRandomNumber(0, array.length - 1)];
}

export const getRandomStringFromArray = (array, max) => {
  const strings = [];

  for (let i = 0; i < max; i++) {
    strings.push(getRandomArrayElement(array));
  };

  return strings.join(` `);
}

export const getRandomDate = (maxBackShift, maxFutureShift) => {
  const today = new Date().getDate();
  const shift = getRandomNumber(maxBackShift, maxFutureShift);
  const dueDate = new Date();
  dueDate.setDate(today + shift);
  return dueDate;
}

export const getDateAsString = (date) => {
  return `${date.getDate()} ${numberToMonthName[date.getMonth()]}`;
}

export const getTimeAsString = (date) => {
  return date.toLocaleTimeString('ru-RU', {hour: 'numeric', hour12: true, minute: 'numeric'});
}

export const coinToss = () => {
  return (Math.floor(Math.random() * 2) === 0);
}

export const getRandomSet = (array, min, max) => {
  const set = new Set();
  const qty = getRandomNumber(min, max);
  for (let i = 0; i <= qty; i++) {
    set.add(getRandomArrayElement(array));
  }

  return set;
}

