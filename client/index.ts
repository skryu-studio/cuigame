import * as readlineSync from 'readline-sync'

const name = readlineSync.question('what your name?:')
console.log(`hello, ${name}! glhf!`)

const judgeCommand = (action) =>{
  if(action == ''){//空行のとき
    return
  }
  switch (action) {
    case "namakocanon":
      console.log(`*[SYSTEM] ${action} starting...`)
      break
    
    default:
      console.log(`*[SYSTEM] unknown command "${action}"`)
      break
  }
}


while( true ){

  const action = readlineSync.question(`${name}> `)
  judgeCommand(action)
}

