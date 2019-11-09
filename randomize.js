function randomize(arr) {
  const arrLen = arr.length;
  let randomArray = [];
  for(let i = 0; i < arrLen; i++) {
    const rand = arr.splice(Math.floor(Math.random()*arr.length), 1);
    randomArray.push(rand[0]);   
  }
  return randomArray;
}


module.exports = randomize;
