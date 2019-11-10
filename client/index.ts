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
  'health': 10,
  'positionX': 2,
  'positionY': 3
}

const userInit = () => {
  player.name = readlineSync.question('what your name?:')
  player.positionX = 1
  player.positionY = 1
  console.log(`*[SYSTEM] hello, ${player.name}! glhf!`)
  console.log(`*[SYSTEM] now, your position is (${player.positionX}, ${player.positionY}).`)
}

const move = (directionChain) => {
  console.log(`*[SYSTEM] ok, move start from (${player.positionX}, ${player.positionY}).`)
  let count = 0
  while (count < directionChain.length){
    const direction = directionChain.slice(count , count+1)
    switch (direction) {
      case "r":
        player.positionX += 1
        break
      
      case "l":
        player.positionX -= 1
        break
      
      case "u":
        player.positionY += 1
        break
      
      case "d":
        player.positionY -= 1
        break
      
      default:
        break
    }
    count++
  }
  console.log(`*[SYSTEM] now, your position is (${player.positionX}, ${player.positionY}).`)
}
const info = () => {
  console.log(`< your status >`);
  console.log(`*[name] : ${player.name}`)
  console.log(`*[health] : ${player.health}`)
  console.log(`*[position] : (${player.positionX},${player.positionY})`)
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
        console.log("*[SYSTEM] (ex) if you wanna RIGHT 2,UP 1, type")
        console.log("*[SYSTEM]      'move rru' or 'move urr' or 'move rur'")
        break
      }
      move(arg[1])
      break
    case 'info':
      if(arg.length != 1){
        console.log("*[SYSTEM] for your information, just type 'info'.  ")
        break
      }
      info()
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
