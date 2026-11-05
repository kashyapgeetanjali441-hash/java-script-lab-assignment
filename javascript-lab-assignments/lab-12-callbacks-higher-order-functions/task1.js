function applyTwice(func, value) {
  return func(func(value));
}

function addTen(number) {
  return number + 10;
}

console.log(applyTwice(addTen, 5));
