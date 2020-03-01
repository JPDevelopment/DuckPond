const Duck = require('./duck')
const pond = require('./pondSize')
const facing = require('./facing')
const prompt = require('prompt-sync')({
  history: require('prompt-sync-history')()
});

const duckArray = []

function createDuck () {
  const position = prompt('Enter Duck\'s Position and Facing  > ').split(' ')
  const commands = prompt('Enter Duck\'s Movement Commands  > ').split('')
  let orientation = null
  // I decided to use a switch statements instead of if/else for code readability.
  switch (position[2].toUpperCase()){
    case 'N':
      orientation = facing.N
      break
    case 'E':
      orientation = facing.E
      break
    case 'S':
      orientation = facing.S
      break
    case 'W':
      orientation = facing.W
      break
    default:
      orientation = facing.N
      console.log('Invalid Input. Duck Orientation Set to North.')
  }
  return new Duck(+position[0], +position[1], orientation, commands)
}

function duckGenerator () {
  let makeDucks = true
  while (makeDucks) {
    let question = prompt('Would you like to make a new duck? Y/N > ')
    if (question.toUpperCase() === 'Y') duckArray.push(createDuck())
    else makeDucks = false
  }
  if (duckArray.length) {
    duckArray.forEach(duck => {
      duck.executeCommands()
      console.log(duck.toString())
    })
  }
  else {
    console.log('Well fine then.')
  }
}

function createPond () {
  const definePond = prompt('Enter the Pond\'s Upper-Right Coordinates > ').split(' ')
  pond.xCoord = definePond[0]
  pond.yCoord = definePond[1]
  console.log('The pond is ' + pond.xCoord + ' by ' + pond.yCoord)
}

createPond()
duckGenerator()
