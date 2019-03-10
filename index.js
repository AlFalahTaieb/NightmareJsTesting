const Nightmare = require('nightmare')
const nightmare = Nightmare({  openDevTools: {
    mode: 'detach'
  },
  show: true
})

nightmare
  .goto('https://searx.me/')
//   .type('#form-control input-lg autofocus', 'github nightmare')
//   .click('#search_button_homepage')
//   .wait('#r1-0 a.result__a')
//   .evaluate(() => document.querySelector('#r1-0 a.result__a').href)
//   .end()
//   .then(console.log)
  .catch(error => {
    console.error('Search failed:', error)
  })