const Nightmare = require('nightmare')
const sourceFile = require('./secrets')
const readline = require('readline');
const nightmare = Nightmare({
  // openDevTools: {mode: 'detach'},
  show: true
})



const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Where do you want to log in ? ', (answer) => {

  switch (answer) {
    case ('facebook'):
      nightmare
        .goto(`https://${answer}.com`)
        .type('#email', sourceFile.email)
        .type('#pass', sourceFile.password)
        .click('#loginbutton')
        .catch(error => {
          console.error('Search failed:', error)
        })



      break
    default:
      console.log('Sorry, we are out of ' + answer + '.')

  }


  rl.close();
});
