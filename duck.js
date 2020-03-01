const facing = require('./facing')

class Duck {
  constructor (xCoord, yCoord, orientation, commands) {
    this.xCoord = xCoord || 0
    this.yCoord = yCoord || 0
    this.orientation = orientation || facing.N
    this.commands = commands || ''
  }

  turnPort () {
    switch (this.orientation) {
      case facing.N:
        this.orientation = facing.W
        break
      case facing.E:
        this.orientation = facing.N
        break
      case facing.S:
        this.orientation = facing.E
        break
      case facing.W:
        this.orientation = facing.S
        break
      default:
        this.orientation = facing.N
    }
  }

  turnStarboard () {
    switch (this.orientation) {
      case facing.N:
        this.orientation = facing.E
        break
      case facing.E:
        this.orientation = facing.S
        break
      case facing.S:
        this.orientation = facing.W
        break
      case facing.W:
        this.orientation = facing.N
        break
      default:
        this.orientation = facing.N
    }
  }

  moveForward () {
    switch (this.orientation) {
      case facing.N:
        this.yCoord += 1
        break
      case facing.E:
        this.xCoord += 1
        break
      case facing.S:
        this.yCoord -= 1
        break
      case facing.W:
        this.xCoord -= 1
        break
      default:
        console.log('Invalid Movement')
    }
  }

  executeCommands () {
    for (let i = 0; i < this.commands.length; i++) {
      switch (this.commands[i]) {
        case 'P':
          this.turnPort()
          break
        case 'S':
          this.turnStarboard()
          break
        case 'F':
          this.moveForward()
          break
        default:
          console.log('Invalid Command')
      }
    }
  }

  toString () {
    return this.xCoord + ' ' + this.yCoord + ' ' + this.orientation
  }
}

module.exports = Duck
