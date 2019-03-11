const Nightmare = require('nightmare')
const sourceFile = require('./secrets')
const readline = require('readline');
const nightmare = Nightmare({
  openDevTools: {mode: 'detach'},
  show: true
})



const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`${sourceFile.FgCyan}'Where do you want to log in ? `, (answer) => {

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
    case ('mail'):
      nightmare
        .goto(`https://accounts.google.com/signin/v2/identifier?service=mail&passive=true&rm=false&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin`)
        .type('#gaia_loginform', sourceFile.email)
        // .type('#pass', sourceFile.password)
        .click('#next')
        .type('#pass', sourceFile.password)
        //   .wait('#r1-0 a.result__a')
        //   .evaluate(() => document.querySelector('#r1-0 a.result__a').href)
        //   .end()
        //   .then(console.log)
        .catch(error => {
          console.error('Search failed:', error)
        })


      break
    default:
      console.log('Sorry, we are out of ' + answer + '.')

  }


  rl.close();
});
