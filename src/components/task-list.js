import {Task} from './task.js';

let tasks = new Array(7);

for (let item = 0; item < tasks.length; item++) {
  tasks[item] = new Task();
}

export {tasks};

