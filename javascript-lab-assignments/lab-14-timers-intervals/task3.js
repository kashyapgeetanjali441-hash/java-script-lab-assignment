let count = 0;

const intervalId = setInterval(() => {
  count++;
  console.log("Tick " + count);

  if (count === 3) {
    clearInterval(intervalId);
  }
}, 200);
