export class Utils {
  printNumber(amount: number) {
    let result = ''
    for (let i = 0; i < amount; i++) {
      result += (i + 1) + ' '
    }
    for (let i = amount; i > 1; i--) {
      if (i > 2) {
        result += (i - 1) + ' '
      } else {
        result += (i - 1)
      }
    }
    return result
  }

  printNumberReverse(amount: number) {
    let result = ''
    for (let i = 6; i > 1; i--) {
      result += (i - 1) + ' '
    }
    for (let i = 1; i < amount; i++) {
      result += (i + 1) + ' '
    }
    return result
  }

  setUpperCase(sentense) {
    // let word = `i\'m a japanese`
    let wordConvert1 = ''
    let wordConvert2 = ''
    //First step pull value from string
    const subject = sentense.charAt(0)
    const national = sentense.charAt(6)

    //Second step set uppercase
    const setSubject = subject.toLocaleUpperCase()
    const setNational = national.toLocaleUpperCase()
    // third step replace
    wordConvert1 = sentense.replace(subject, setSubject)
    wordConvert2 = wordConvert1.replace(national, setNational)
    return wordConvert2
  }

  sortNumberAsc(arrayObj) {
    // const arrayObj = [8, 1, 5, 6, 2, 7, 3, 4, 9]
    const lengthArray = arrayObj.length
    // console.log(lengthArray)
    for (let i = 0; i < lengthArray; i++) {
      for (let j = i + 1; j < lengthArray; j++) {
        if (arrayObj[i] > arrayObj[j]) {
          let temp = arrayObj[i]
          arrayObj[i] = arrayObj[j]
          arrayObj[j] = temp
        }
      }
    }
    return arrayObj
    // console.log(arrayObj)
  }

  sortNumberDsc(arrayObj) {
    const lengthArray = arrayObj.length
    for (let i = 0; i < lengthArray; i++) {
      for (let j = i + 1; j < lengthArray; j++) {
        if (arrayObj[i] < arrayObj[j]) {
          let temp = arrayObj[i]
          arrayObj[i] = arrayObj[j]
          arrayObj[j] = temp
        }
      }
    }
    return arrayObj
  }

  sortCharacterAsc(alphabet: String) {
    // let alphabet = 'dfjiagcebh'
    let result = ''
    for (let i = 0; i < alphabet.length; i++) {
      result += (alphabet[i].charCodeAt(0) - 97)
    }
    // console.log(result)
    // console.log(result.length)
    const lengthArray = result.length
    let convertToArray = [...result];

    for (let i = 0; i < lengthArray; i++) {
      for (let j = i + 1; j < lengthArray; j++) {
        if (convertToArray[i] > convertToArray[j]) {
          let temp = convertToArray[i]
          convertToArray[i] = convertToArray[j]
          convertToArray[j] = temp
        }
      }
    }
    console.log(convertToArray)
    let convertToString = convertToArray.join('')
    console.log(convertToString)

    let characterAsc = ''
    for (let i = 0; i < convertToString.length; i++) {
      characterAsc += String.fromCharCode(97 + i)
    }
    console.log('characterAsc', characterAsc)
    return characterAsc

  }

  sortCharacterDsc(alphabet: String) {
    // let alphabet = 'dfjiagcebh'
    let result = ''
    for (let i = 0; i < alphabet.length; i++) {
      result += (alphabet[i].charCodeAt(0) - 97)
    }
    // console.log(result)
    // console.log(result.length)
    const lengthArray = result.length
    let convertToArray = [...result]
    // console.log(convertToArray)

    for (let i = 0; i < lengthArray; i++) {
      for (let j = i + 1; j < lengthArray; j++) {
        if (convertToArray[i] < convertToArray[j]) {
          let temp = convertToArray[i]
          convertToArray[i] = convertToArray[j]
          convertToArray[j] = temp
        }
      }
    }

    // console.log('convertToArray', convertToArray)
    let convertToString = convertToArray.join('')
    // console.log('convertToString', convertToString)

    let characterDsc: String = ''
    for (let i = 0; i < convertToString.length; i++) {
      characterDsc += String.fromCharCode(97 + i)
    }
    // console.log('characterDsc', characterDsc)
    let charDscToArray: any = [...characterDsc]
    // console.log('charDscToArray', charDscToArray)
    let charArr = ''

    for (let i = 0; i < convertToString.length; i++) {
      charArr += charDscToArray.pop()
    }
    // console.log(charArr)
    return charArr

  }

}


// const sortNumberAsc = () => {
//   const inputA = [8, 1, 5, 6, 2, 7, 3, 4, 9]
//   console.log(inputA)
// }
// sortNumberAsc()


// const minMinMax = (array: any) => {
//   let minAbsent = 0
//   // smallest to largest
//   let smallestToLargest = array.sort((a: number, b: number) => a - b).slice(0);
//   console.log(smallestToLargest);
//   const smallest = smallestToLargest[0]

//   // largest to smallest
//   let largestToSmallest = array.sort((a: number, b: number) => b - a).slice(0);
//   console.log(smallestToLargest);
//   const largest = largestToSmallest[0]

//   // use second smallest number as starting point for loop, then after each number check 
//   // to see if that number is in the array, if not then add the value to our array
//   for (let i = 1, j = smallestToLargest[1]; i < smallestToLargest.length; i++, j = smallestToLargest[i]) {
//     if (j !== smallestToLargest[i]) {
//       minAbsent = j
//     }
//     // console.log(smallestToLargest[i])
//     // console.log('this is the min absent ' + minAbsent)
//   }
//   // console.log(smallestToLargest);
//   // return [smallest, minAbsent, largest]
// }
// minMinMax([8, 1, 5, 6, 2, 7, 3, 4, 9])


// const sortNumberAsc = () => {
//   const arrayObj = [8, 1, 5, 6, 2, 7, 3, 4, 9]
//   const lengthArray = arrayObj.length
//   console.log(lengthArray)

//   for (let i = 0; i < lengthArray; i++) {
//     for (let j = i + 1; j < lengthArray; j++) {
//       if (arrayObj[i] > arrayObj[j]) {
//         let temp = arrayObj[i]
//         arrayObj[i] = arrayObj[j]
//         arrayObj[j] = temp
//       }
//     }
//   }
//   console.log(arrayObj)
// }
// sortNumberAsc()


// const sortNumberDsc = () => {
//   const arrayObj = [8, 1, 5, 6, 2, 7, 3, 4, 9]
//   const lengthArray = arrayObj.length
//   // console.log(lengthArray)

//   for (let i = 0; i < lengthArray; i++) {
//     for (let j = i + 1; j < lengthArray; j++) {
//       if (arrayObj[i] < arrayObj[j]) {
//         let temp = arrayObj[i]
//         arrayObj[i] = arrayObj[j]
//         arrayObj[j] = temp
//       }
//     }
//   }
//   console.log(arrayObj)
// }
// sortNumberDsc()




// const sortCharacterAsc = () => {
//   let alphabet = 'dfjiagcebh'
//   let result = ''
//   for (let i = 0; i < alphabet.length; i++) {
//     result += (alphabet[i].charCodeAt(0) - 97)
//   }
//   // console.log(result)
//   // console.log(result.length)
//   const lengthArray = result.length
//   let convertToArray = [...result];

//   for (let i = 0; i < lengthArray; i++) {
//     for (let j = i + 1; j < lengthArray; j++) {
//       if (convertToArray[i] > convertToArray[j]) {
//         let temp = convertToArray[i]
//         convertToArray[i] = convertToArray[j]
//         convertToArray[j] = temp
//       }
//     }
//   }
//   console.log(convertToArray)
//   let convertToString = convertToArray.join('')
//   console.log(convertToString)

//   let characterAsc = ''
//   for (let i = 0; i < convertToString.length; i++) {
//     characterAsc += String.fromCharCode(97 + i)
//   }
//   console.log('characterAsc', characterAsc)
//   return characterAsc

// }

// sortCharacterAsc()



// const sortCharacterDsc = () => {
//   let alphabet = 'dfjiagcebh'
//   let result = ''
//   for (let i = 0; i < alphabet.length; i++) {
//     result += (alphabet[i].charCodeAt(0) - 97)
//   }
//   // console.log(result)
//   // console.log(result.length)
//   const lengthArray = result.length
//   let convertToArray = [...result]
//   // console.log(convertToArray)

//   for (let i = 0; i < lengthArray; i++) {
//     for (let j = i + 1; j < lengthArray; j++) {
//       if (convertToArray[i] < convertToArray[j]) {
//         let temp = convertToArray[i]
//         convertToArray[i] = convertToArray[j]
//         convertToArray[j] = temp
//       }
//     }
//   }

//   // console.log('convertToArray', convertToArray)
//   let convertToString = convertToArray.join('')
//   // console.log('convertToString', convertToString)

//   let characterDsc: String = ''
//   for (let i = 0; i < convertToString.length; i++) {
//     characterDsc += String.fromCharCode(97 + i)
//   }
//   // console.log('characterDsc', characterDsc)
//   let charDscToArray: any = [...characterDsc]
//   // console.log('charDscToArray', charDscToArray)
//   let charArr = ''

//   for (let i = 0; i < convertToString.length; i++) {
//     charArr += charDscToArray.pop()
//   }
//   // console.log(charArr)
//   return charArr

// }

// sortCharacterDsc()


// let data1: String = 'abcdefghij'
// let data2: any = [...data1]
// let rrr = ''
// console.log(data2)
// // console.log(data2.pop())
// console.log(data2)
// console.log('data2.length', data2.length)

// for (let i = 0; i < data1.length; i++) {
//   rrr += data2.pop()
//   console.log('i', i)
// }

// console.log('rrr', rrr)


// const drawingReflectionTriangle = (max: number) => {
//   let temp: any = []
//   for (let i = 0; i < ((max * 2) - 1); i++) {
//     if (i === 0) {
//       temp.push('\n')
//     }
//     else if (i < max) {
//       temp.push('+')
//     } else {
//       temp.pop()
//     }
//     // return temp.join(' ')
//     console.log(temp.join(' '))
//   }
// }


// const runLoop1 = (max: number) => {
//   let temp = []
//   for (let i = 0; i < ((max * 2) - 1); i++) {
//     if (i < max) {
//       temp.push("*")
//     } else {
//       temp.pop()
//     }
//     console.log(temp.join(" "))
//   }
// }


// const runLoop = (max: number) => {
//   let temp = []


//   // temp.push(`+       +\n`)
//   // temp.push('+ +   + +\n')
//   // temp.push('+ + + + +\n')
//   // temp.push('+ +   + +\n')
//   // temp.push('+       +')
//   // console.log(temp.join(''))

//   for (let i = 0; i < ((max * 2) - 1); i++) {
//     if (i = 1) {
//       temp.push(`+       +\n`)
//     }
//   }
//   console.log(temp.join(''))
// }
// runLoop1(4)
// runLoop(3)
