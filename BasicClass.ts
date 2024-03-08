/**
*
* This class creates a list of integers
*
* By:      Cristiano Sellitto
* Version: 1.0
* Since:   2024-03-07
*/

export class BasicClass {
  private array: number[]

  public constructor() {
    this.array = []
  }

  public push(integer: number) {
    this.array.push(integer)
  }

  public showStack() {
    console.log(this.array)
  }
}

