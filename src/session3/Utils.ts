let data = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let fruits = ['🍎', '🌽', '🍉', '🍇', '🍓']

const popTest = (data: any) => {
  let lastItem = data[data.length - 1]
  data.length = Math.max(0, data.length - 1)
  // console.log('lastItem', lastItem)
  return lastItem
}
// console.log(popTest(data))
//////////////////

const pushTest = (data: any) => {
  data[data.length] = 100
  return data
}
// console.log(pushTest(data))
////////////////

const indexOfTest = function (collection: any, item: Number) {
  for (let i = 0; i < collection.length; ++i) {
    if (collection[i] === item) {
      // console.log(i)
      return i;
    }
  }
}

indexOfTest(data, 8)


////////////////
const includesTest = (str: any, sub: any) => {
  if (sub.length > str.length) return false;
  for (let i = 0; i < str.length - sub.length + 1; i++) {
    if (str[i] !== sub[0]) continue;
    let exists = true
    for (let j = 1; j < sub.length && exists; j++) {
      if (str[i + j] === sub[j]) continue;
      exists = false;
    }
    if (exists) return true
  }
  return false;
}
// console.log(includesTest(data, "3"));

/////////////////////
const inArray = (myArray: any, myValue: any) => {
  var inArray = false
  myArray.map(function (key: any) {
    if (key === myValue) {
      inArray = true
    }
  })
  return inArray;
}
// console.log(inArray(data, 9))

//////////////////
const shiftTest = (x: any) => {
  for (let i = 0; i < x.length; i += 1) {
    x[i] = x[i + 1] || 0;
  }
  // console.log(x)
  return x
}

// shiftTest(data)


///////////////
const sliceTest = (arr: any, start: any, end: any) => {
  let result = [];
  let from: any = Math.max(start, 0);
  let to: any = Math.min(end);

  if ((!end) || (end > arr.length)) {
    for (let i = from; i < arr.length; i++) {
      result.push(arr[i]);
    }
  } else {
    for (let i = from; i < to; i++) {
      result.push(arr[i]);
    }
  }
  console.log(result)
  return result;
}
// sliceTest(data, 1, 3)


///////////

const testFunc: Function = (num: number, arr: any = []) => {
  const newArr = arr
  if (arr.length < num) {
    newArr.push(arr.length + 1)
    return testFunc(5, newArr)
  } else if (arr.length === num) {
    for (let i = num; i > 1; i--) {
      newArr.push(arr[arr.length - 1] - 1)
    }
  }
  // console.log(newArr.join(' '))
  return newArr.join(' ')
}

// testFunc(5)