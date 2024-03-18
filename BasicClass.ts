/**
*
* This class creates a list of strings
*
* By:      Cristiano Sellitto
* Version: 1.0
* Since:   2024-03-07
*/

export class BasicClass {
  private array: string[]

  public constructor() {
    this.array = []
  }

  public push(string: string) {
    this.array.push(string)
  }

  public showStack() {
    console.log(this.array)
  }
}

