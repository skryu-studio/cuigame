const move = (player, action) => {
  const arg = action.split(' ')
  const directionChain = arg[1]
  if (arg.length != 2) {
    console.log('*[SYSTEM] (ex) if you wanna RIGHT 2,UP 1, type')
    console.log("*[SYSTEM]      'move rru' or 'move urr' or 'move rur'")
    return
  }
  console.log(
    `*[SYSTEM] ok, move start from (${player.positionX}, ${player.positionY}).`
  )
  let count = 0
  while (count < directionChain.length) {
    const direction = directionChain.slice(count, count + 1)
    switch (direction) {
      case 'r':
        player.positionX += 1
        break

      case 'l':
        player.positionX -= 1
        break

      case 'u':
        player.positionY += 1
        break

      case 'd':
        player.positionY -= 1
        break

      default:
        break
    }
    count++
  }
  console.log(
    `*[SYSTEM] now, your position is (${player.positionX}, ${player.positionY}).`
  )
}

const shoot = (player, action) => {
  const arg = action.split(' ') // action = "shoot arg2 arg3 ..."
  let shootDirection = 0
  if (arg.length >= 2) {
    console.log('*[SYSTEM] just type "shoot" "direction ')
  }
  switch (arg[1]) {
    case 'u':
      shootDirection = 12
      break
    case 'r':
      shootDirection = 3
      break
    case 'd':
      shootDirection = 6
      break
    case 'l':
      shootDirection = 9
      break
  }
  console.log(`*[SYSTEM] shoot ${shootDirection}`)
}

const info = (player, action) => {
  const arg = action.split(' ') // action = "shoot arg2 arg3 ..."
  if (arg.length != 1) {
    console.log("*[SYSTEM] for your information, just type 'info'.  ")
  } else {
    console.log(`< your status >`)
    console.log(`*[name] : ${player.name}`)
    console.log(`*[health] : ${player.health}`)
    console.log(`*[position] : (${player.positionX},${player.positionY})`)
  }
}

const survay = (player, action) => {
  const arg = action.split(' ')
  const survayRange = arg[1]
  if (arg.length != 2) {
    console.log(`*[SYSTEM] (ex) 'survay [1~2]' to survay`)
    return
  }
  if (!isNaN(arg[1])) {
    console.log(`*[SYSTEM] survay around ${survayRange} starting...`)
  } else {
    console.log(`*[SYSTEM] ${arg[1]} is not 'survay' argument`)
  }
}

export { move, shoot, info, survay }
