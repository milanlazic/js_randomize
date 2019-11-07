function randomize(arr) {
  const arrLen = arr.length;
  let randomArray = [];
  for(let i = 0; i < arrLen; i++) {
    let tempArray = arr;
    const rand = tempArray.splice(Math.floor(Math.random()*tempArray.length), 1);
    randomArray.push(rand[0]);   
  }
  return randomArray;
}


module.exports = randomize;
