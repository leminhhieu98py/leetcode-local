function reverse(str) {
  // add whatever parameters you deem necessary - good luck!
  const strLength = str.length;
  if (strLength <= 1) return str;

  return str.slice(-1) + reverse(str.slice(0, strLength - 1));
}

console.log(reverse(''));
console.log(reverse('a'));
console.log(reverse('awesome')); // 'emosewa'
console.log(reverse('rithmschool')); // 'loohcsmhtir'
