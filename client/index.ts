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
    case 'namako':
      if (arg.length != 2) {
        console.log(`*[SYSTEM] (ex) 'namako canon'`)
        break
      }
      if (arg[1] == 'canon') {
        console.log(`*[SYSTEM] ${action} starting...`)
      } else {
        console.log(`*[SYSTEM] ${arg[1]} is not 'namako' argument`)
      }
      break

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
      if (arg.length != 2) {
        console.log('*[SYSTEM] (ex) if you wanna RIGHT 2,UP 1, type')
        console.log("*[SYSTEM]      'move rru' or 'move urr' or 'move rur'")
        break
      }
      move(arg[1], player)
      break
    case 'info':
      if (arg.length != 1) {
        console.log("*[SYSTEM] for your information, just type 'info'.  ")
        break
      }
      info(player)
      break

    case 'shoot':
      if (arg.length != 1) {
        console.log('*[SYSTEM] just type shoot')
        break
      }
      shoot(player)
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
