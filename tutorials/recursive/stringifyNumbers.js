function isObject(value) {
  return value && typeof value === 'object' && !Array.isArray(value);
}

function stringifyNumbers(obj) {
  const result = {};

  for (const key in obj) {
    const value = obj[key];

    if (isObject(value)) {
      result[key] = stringifyNumbers(value);
    } else if (typeof value === 'number') {
      result[key] = value.toString();
    } else {
      result[key] = value;
    }
  }

  return result;
}

let test_obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66
    }
  }
};

console.log(stringifyNumbers(test_obj));
