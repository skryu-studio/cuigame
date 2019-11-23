const move = (directionChain, player) => {
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

const shoot = player => {
  console.log('shoot')
}

const info = player => {
  console.log(`< your status >`)
  console.log(`*[name] : ${player.name}`)
  console.log(`*[health] : ${player.health}`)
  console.log(`*[position] : (${player.positionX},${player.positionY})`)
}

const survay = (survayRange, player) => {
  console.log(`*[SYSTEM] survay around ${survayRange} starting...`)
}

export { move, shoot, info, survay }
