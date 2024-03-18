/**
*
* This program uses a basic class to make an array of strings
*
* By:      Cristiano Sellitto
* Version: 1.0
* Since:   2024-03-07
*/

import { BasicClass } from './BasicClass'
import { createPrompt } from 'bun-promptx'

const basicStack = new BasicClass()

// String value
const string = createPrompt('Enter a string: ')

const stringValue = string.value
basicStack.push(stringValue)

// Show the stack's value
basicStack.showStack()

// Show the program as done
console.log('\nDone.')
