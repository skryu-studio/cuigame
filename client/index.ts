import * as readlineSync from 'readline-sync'

const name = readlineSync.question('what your name?:')
console.log(`hello, ${name}! glhf!`)

const judgeCommand = (action) =>{
  if(action == ''){//空行のとき
    return
  }
  let arg = action.split(' ')

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
    default:
      console.log(`*[SYSTEM] unknown command '${action}'`)
      break
  }
}

while( true ){
  const action = readlineSync.question(`${name}> `)
  judgeCommand(action)
}
