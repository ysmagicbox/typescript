export class Utils {
  printNumber(amount: number) {
    const arr = []
    for (let i = 1; i <= amount; i++) {
      arr.push(i)
    }
    const newArr = [...arr].reverse()
    newArr.shift()
    newArr.unshift(...arr)
    newArr.join(' ')
    // console.log(newArr.join(' '))
    return newArr.join(' ')
  }

  printNumberReverse(amount: number) {
    const arr = []
    for (let i = amount; i > 0; i--) {
      arr.push(i)
    }
    const newArr = [...arr].reverse()
    newArr.shift()
    newArr.unshift(...arr)
    newArr.join(' ')
    // console.log(newArr.join(' '))
    return newArr.join(' ')
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
    // console.log(convertToArray)
    let convertToString = convertToArray.join('')
    // console.log(convertToString)

    let characterAsc = ''
    for (let i = 0; i < convertToString.length; i++) {
      characterAsc += String.fromCharCode(97 + i)
    }
    // console.log('characterAsc', characterAsc)
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



  reflectionTriangle(amount: number) {
    let start = 1
    let temp = []
    temp.push(`\n`)
    for (let i = 0; i < amount; i++) {
      if (i < amount / 2) {
        temp.push(this.pushFunction(start, amount))
        start++
      } else {
        start--
        temp.push(this.pushFunction(start - 1, amount))
      }
    }
    temp.push(`\n`)
    // console.log(temp.join(`\n`))
    return temp.join(`\n`)
  }

  pushFunction(line: number, total: number) {
    let a = []
    for (let x = 0; x < total; x++) {
      if (x < line || x >= total - line) {
        a.push('+')
      } else {
        a.push(' ')
      }
    }
    // console.log(a.join(' '))
    return a.join(' ')
  }

}


///////////////////////////////////////////////////

// const reflectionTriangle = (amount: number) => {
//   let start = 1
//   let temp = []
//   temp.push(`\n`)
//   for (let i = 0; i < amount; i++) {
//     if (i < amount / 2) {
//       temp.push(pushFunction(start, amount))
//       start++
//     } else {
//       start--
//       temp.push(pushFunction(start - 1, amount))
//     }
//   }
//   temp.push(`\n`)
//   // console.log(temp.join(`\n`))
//   return temp.join(`\n`)
// }

// const pushFunction = (line: number, total: number) => {
//   let a = []
//   for (let x = 0; x < total; x++) {
//     if (x < line || x >= total - line) {
//       a.push('+')
//     } else {
//       a.push(' ')
//     }
//   }
//   // console.log(a.join(' '))
//   return a.join(' ')
// }

// reflectionTriangle(5)