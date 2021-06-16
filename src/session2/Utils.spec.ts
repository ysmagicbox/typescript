import { Utils } from './Utils'

describe('Test Day 2', () => {
  it('should be able to printNumber Improved version success', () => {
    const utils = new Utils()
    expect(utils.printNumber(5)).toBe('1 2 3 4 5 4 3 2 1')// Rule: Using 1 for loop and 1 if else
  })
  it('should be able to printNumberReverse  version success', () => {
    const utils = new Utils()
    expect(utils.printNumberReverse(5)).toBe('5 4 3 2 1 2 3 4 5')// Rule: Using 1 for loop and 1 if else
  })

  it('should be write Capital letter', () => {
    const utils = new Utils()
    const sentence = `i\'m a japanese`
    expect(utils.setUpperCase(sentence)).toBe(`I\'m a Japanese`)
  })

  it('should be able to sorting accending', () => {
    const utils = new Utils()
    expect(utils.sortNumberAsc([8, 1, 5, 6, 2, 7, 3, 4, 9])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]) // Rule: Using looping Don't use build in function or 3rd party libs
  })

  it('should be able to sorting decending', () => {
    const utils = new Utils()
    expect(utils.sortNumberDsc([8, 1, 5, 6, 2, 7, 3, 4, 9])).toEqual([9, 8, 7, 6, 5, 4, 3, 2, 1]) // Rule: Using looping Don't use build in function or 3rd party libs
  })

  it('should be able to sorting character asc', () => {
    const utils = new Utils()
    expect(utils.sortCharacterAsc('dfjiagcebh')).toBe('abcdefghij') // Rule: Using looping Don't use build in function or 3rd party lib
  })

  it('should be able to sorting character dsc', () => {
    const utils = new Utils()
    expect(utils.sortCharacterDsc('dfjiagcebh')).toBe('jihgfedcba') // Rule: Using looping Don't use build in function or 3rd party lib
  })

  it('should be able to drawing reflection traingle', () => {
    const utils = new Utils()
    const reflectionTriangle = `
    +       +
    + +   + +
    + + + + +
    + +   + +
    +       +
    `
    const cleanCode = reflectionTriangle.trim()
    expect(utils.reflectionTriangle(5)).toBe(cleanCode)
  })
})