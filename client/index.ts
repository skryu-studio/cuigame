import * as readlineSync from 'readline-sync'
import { move, shoot, info, survay } from './userActions'

const map = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
]

const player = {
  name: 'playername',
  health: 10,
  positionX: 2,
  positionY: 3,
}

const userInit = () => {
  player.name = readlineSync.question('what your name?:')
  player.positionX = 1
  player.positionY = 1
  console.log(`*[SYSTEM] hello, ${player.name}! glhf!`)
  console.log(
    `*[SYSTEM] now, your position is (${player.positionX}, ${player.positionY}).`
  )
}

userInit()

const judgeCommand = action => {
  if (action == '') {
    //空行のとき
    return
  }
  const arg = action.split(' ')

  switch (arg[0]) {
    case 'survay':
      if (arg.length != 2) {
        console.log(`*[SYSTEM] (ex) 'survay [1~2]' to survay`)
        break
      }
      if (typeof Number(arg[1]) == 'number') {
        survay(arg[1], player)
      } else {
        console.log(`*[SYSTEM] ${action} is not 'survay' argument`)
      }
      break

    case 'move':
      move(player, action)
      break
    case 'info':
      info(player, action)
      break

    case 'shoot':
      shoot(player, action)
      break

    default:
      console.log(`*[SYSTEM] unknown command '${action}'`)
      break
  }
}

while (true) {
  const action = readlineSync.question(`${player.name}> `)
  judgeCommand(action)
}
