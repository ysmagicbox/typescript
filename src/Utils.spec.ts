import { Utils } from './Utils'

describe('Test Utils file', () => {
  it('should run sum success', () => {
    const utils = new Utils()
    expect(utils.add(5, 10)).toBe(15)
  })

  it('should run subtract success', () => {
    const utils = new Utils()
    expect(utils.subtract(10, 3)).toBe(7)
  })

  it('should calculate days diff', () => {
    const utils = new Utils()
    expect(utils.calculateDayDiff('6-7-2021', '7-5-2021')).toBe(28)
  })

  it('should print the following numbers', () => {
    const utils = new Utils()
    expect(utils.printNumber(5)).toBe('1 2 3 4 5 4 3 2 1') // Using for loop
    expect(utils.printNumber(4)).toBe('1 2 3 4 3 2 1') // Using for loop
    expect(utils.printNumber(3)).toBe('1 2 3 2 1') // Using for loop
  })

  it('should drawing triangle', () => {
    const utils = new Utils()
    const triangleShape = `
+
+ +
+ + +
+ +
+
`
    expect(utils.drawing(3)).toBe(triangleShape) // Using for loop
  })
})