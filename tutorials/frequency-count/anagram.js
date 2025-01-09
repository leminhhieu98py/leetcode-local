const getAlphabetFrequency = (s) => {
  const result = {};

  for (let char of s) {
    result[char] = (result[char] || 0) + 1;
  }

  return result;
};

const validAnagram = (s1, s2) => {
  if (s1.length !== s2.length) return false;

  const stringFrequencyObj1 = getAlphabetFrequency(s1);
  const stringFrequencyObj2 = getAlphabetFrequency(s2);

  for (const key in stringFrequencyObj1) {
    if (stringFrequencyObj1[key] !== stringFrequencyObj2[key]) {
      return false;
    }
  }

  return true;
};

console.log(validAnagram('', ''));
console.log(validAnagram('aaz', 'zza'));
console.log(validAnagram('anagram', 'nagaram'));
console.log(validAnagram('rat', 'car'));
