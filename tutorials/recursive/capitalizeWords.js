function capitalizeWords(strArr) {
  const strArrLength = strArr.length;
  if (strArrLength === 0) return strArr;

  const capitalFirstWord = [strArr[0].toUpperCase()];
  if (strArr === 1) return capitalFirstWord;

  return capitalFirstWord.concat(capitalizeWords(strArr.slice(1)));
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
