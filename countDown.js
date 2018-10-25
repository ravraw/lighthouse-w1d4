var countdownGenerator = function(x) {
  /* your code here */
  let counter = x;
  return () => {
    if (counter > 0) console.log(`T-minus ${counter}...`);
    else if (counter === 0) console.log("Blast off!");
    else console.log("Rockets already gone, bub!");
    console.log(counter);
    counter--;
  };
};

var countdown = countdownGenerator(7);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...node
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
countdown();
countdown();
countdown();
countdown();
countdown();
countdown();
