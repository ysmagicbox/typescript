export class Utils {
  public static checkText() {
    return 'hello'
  }

  add(numberA, numberB) {
    return numberA + numberB
  }
  subtract(numberA, numberB) {
    return numberA - numberB
  }

  calculateDayDiff(date1, date2) {
    const d1 = new Date(date1)
    const d2 = new Date(date2)
    const n1 = d1.getTime()
    const n2 = d2.getTime()
    const diff = d2.getTime() - d1.getTime()
    const dayDiff = diff / (1000 * 60 * 60 * 24)
    // console.log('date1', date1)
    // console.log('date2', date2)
    return dayDiff
  }

  printNumber(amount) {
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

  drawing(max: number) {
    let temp: any = []
    for (let i = 0; i < ((max * 2) - 1); i++) {
      if (i === 0) {
        temp.push('')
      }
      else if (i < max) {
        temp.push('+')
      } else {
        temp.pop()
      }
      return temp.join(' ')
    }
  }
}


////// Test function ///////////
// const concatString = (n: number) => {
//   let result = ''
//   for (let i = 0; i < n; i++) {
//     result += (i + 1) + ' '
//   }
//   for (let i = n; i > 1; i--) {
//     result += (i - 1) + ' '
//   }
//   console.log('result===>', result)
// }
// concatString(8)



// const goal = `\n+\n+ +\n+ + +\n+ +\n+\n`
// const goal = `\n    +\n    + +\n    + + +\n    + +\n    +\n    `
// console.log(goal)
// const drawing = () => {
//   let result = ''
//   // for (let i = 0; i < 5; i++) {
//   //   result += (i + 1) + '+'
//   // }
//   const symbolLength = `+`.length
//   for (let i = 0; i < symbolLength; i++) {
//     result += "+" + i + ", ";
//     console.log(result);
//   }
// }
// drawing()

// const makeLine = () => {
//   let line = '';
//   // let newline = '    '
//   for (let j = 1; j <= 3; j++) {
//     line += '    +';
//     console.log(line)
//     // console.log(line + '\n')
//   }
//   // for (let j = 3; j >= 1; j--) {
//   //   line += ' +'
//   //   newline += line
//   //   console.log(line)
//   //   // console.log(line)
//   // }
// }

// makeLine()


// const runLoop = (max: number) => {
//   let temp: any = []
//   for (let i = 0; i < ((max * 2) - 1); i++) {
//     if (i < max) {
//       temp.push('+')
//     } else {
//       temp.pop()
//     }
//     console.log((temp.join('  '))
//     )
//   }
// }
// runLoop(3)

// const triangle = `
//   +
//   +  +
//   +  +  +
//   +  +
//   +
//   `


// const runLoop = (max: number) => {
//   let temp: any = ['']
//   for (let i = 0; i < ((max * 2) - 1); i++) {


//     if (i < max) {
//       temp.push('+')
//     } else {
//       temp.pop()
//     }
//     console.log((temp.join(' '))
//     )



//   }
// }
// runLoop(3)
