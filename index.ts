/**
*
* This program uses a basic class to make an array of integers
*
* By:      Cristiano Sellitto
* Version: 1.0
* Since:   2024-03-07
*/

import { BasicClass } from './BasicClass'
import { createPrompt } from 'bun-promptx'

const basicStack = new BasicClass()

while (true) {
  // String values
  const intString = createPrompt('Enter an integer (enter a NaN value to stop): ')

  // Convert variables to integer and check for errors
  const integer = parseInt(intString.value)
  if (isNaN(integer) == true) {
    // Invalid input
    break
  } else {
    // Valid input
    basicStack.push(integer)
  }
}

// Show the stack's value
basicStack.showStack()

// Show the program as done
console.log('\nDone.')
