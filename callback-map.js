var words = ["ground", "control", "to", "major", "tom"];

const printLength = word => word.length;

const toUpperCase = word => word.toUpperCase();

const reverseIt = word =>
  word
    .split("")
    .reverse()
    .join("");

const mapFunction = (arr, cb) => {
  return arr.map(item => cb(item));
};

console.log(mapFunction(words, printLength));
console.log(mapFunction(words, toUpperCase));
console.log(mapFunction(words, reverseIt));

//[6, 7, 2, 5, 3]
//["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]
//["dnuorg", "lortnoc", "ot", "rojam", "mot"];
