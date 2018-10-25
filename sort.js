let arr = [1, 10, 2, 5, 9];

let sortedArr = arr.sort((a, b) => a - b);
//console.log(sortedArr);

var students = [
  { id: 1, name: "bruce", age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex", age: 22 },
  { id: 4, name: "alex", age: 30 }
];

students.sort(function(a, b) {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return b.age - a.age;
});

console.log(students);
