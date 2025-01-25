function capitalizeFirst(strArr) {
  const firstWord = strArr[0];
  if (!firstWord) return firstWord;
  const capitalFirstWord = firstWord[0].toUpperCase() + firstWord.slice(1);

  if (strArr.length === 1) return [capitalFirstWord];

  return [capitalFirstWord].concat(capitalizeFirst(strArr.slice(1)));
}

console.log(capitalizeFirst(['car', 'taco', 'banana'])); // ['Car','Taco','Banana']
