import * as readlineSync from 'readline-sync'

const name = readlineSync.question('what your name?:')
console.log(`hello, ${name}! glhf!`)

while( true ){

  const action = readlineSync.question(`${name}> `)
  console.log(`*[SYSTEM] ${action} starting...`)//メソッドとかが入る

}
