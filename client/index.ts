import * as readlineSync from 'readline-sync'

const map = [
  [0,0,0,0,0],
  [0,0,0,0,0],
  [0,0,0,0,0],
  [0,0,0,0,0],
  [0,0,0,0,0],
]

const player = {
  'name': 'playername',
  'positionX': 2,
  'positionY': 3
}

const userInit = () => {
  player.name = readlineSync.question('what your name?:')
  player.positionX = 1
  player.positionY = 1
  console.log(`hello, ${player.name}! glhf!`)
  console.log(`now, your position is (${player.positionX},${player.positionY}).`)
}

const move = () => {
  // move right
  // move left
  // move up
  // move down
  console.log("moved to ****");
}

userInit()

const judgeCommand = (action) =>{
  if(action == ''){//空行のとき
    return
  }
  const arg = action.split(' ')

  switch (arg[0]) {
    case 'namako':
      if ( arg.length != 2){
        console.log(`*[SYSTEM] (ex) 'namako canon'`)
        break
      }
      if (arg[1] == 'canon'){
        console.log(`*[SYSTEM] ${action} starting...`)
      }else{
        console.log(`*[SYSTEM] ${arg[1]} is not 'namako' argument`)
      }
      break

    case 'survay':
      if (arg.length != 2){
        console.log(`*[SYSTEM] (ex) 'survay [1~2]' to survay`)
        break
      }
      if (typeof Number(arg[1]) == 'number'){
        console.log(`*[SYSTEM] ${action} starting...`)
      }else{
        console.log(`*[SYSTEM] ${action} is not 'survay' argument`)
      }
      break

    case 'move':
      if(arg.length != 2){
        console.log("*[SYSTEM] (ex) 'move [*****]' to move other position")
        break
      }
      move()
      break

    default:
      console.log(`*[SYSTEM] unknown command '${action}'`)
      break
  }
}

while( true ){
  const action = readlineSync.question(`${player.name}> `)
  judgeCommand(action)
}
