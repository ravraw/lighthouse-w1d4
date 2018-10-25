function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  /* your code here */
  let index = -1;

  return function() {
    /* your code here */
    if (index < list.length - 1) index++;
    else index = 0;
    return list[index];
  };
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie()); // 5
console.log(rollLoadedDie()); // 5
console.log(rollLoadedDie()); // 5
console.log(rollLoadedDie()); // 5
console.log(rollLoadedDie()); // 5
console.log(rollLoadedDie()); // 5
console.log(rollLoadedDie()); // 5
console.log(rollLoadedDie()); // 5
console.log(rollLoadedDie()); // 5
console.log(rollLoadedDie()); // 5
console.log(rollLoadedDie()); // 5
console.log(rollLoadedDie()); // 5
console.log(rollLoadedDie()); // 5
console.log(rollLoadedDie()); // 5
console.log(rollLoadedDie()); // 5
console.log(rollLoadedDie()); // 5
console.log(rollLoadedDie()); // 5
console.log(rollLoadedDie()); // 5
console.log(rollLoadedDie()); // 5
console.log(rollLoadedDie()); // 5
console.log(rollLoadedDie()); // 5
console.log(rollLoadedDie()); // 5
console.log(rollLoadedDie()); // 5
