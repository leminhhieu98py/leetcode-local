function isObject(value) {
  return value && typeof value === 'object' && !Array.isArray(value);
}

function collectStrings(obj) {
  let result = [];

  for (const key in obj) {
    const value = obj[key];

    if (isObject(value)) {
      result = result.concat(collectStrings(value));
    } else if (typeof value === 'string') {
      result.push(value);
    }
  }

  return result;
}

const test_obj = {
  stuff: 'foo',
  data: {
    val: {
      thing: {
        info: 'bar',
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: 'baz',
            haha: true
          }
        }
      }
    }
  }
};

console.log(collectStrings(test_obj)); // ["foo", "bar", "baz"])
