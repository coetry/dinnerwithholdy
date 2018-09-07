const html = require('choo/html')
const app = require('choo')()

app.use(require('choo-devtools')())

app.route('/', (state, emit) => {
  return html`
    <body>
      <main class="container">
        <section class="two-col">
          <img class="holdy" src="/assets/holdy.png" alt="Ryan Holdaway"/> 
          ${DinnerIntro()}
        </section>
      </main>
    </body>
  `
})

app.mount('body')

function DinnerIntro() {
  return html`
    <div class="dinner-intro">
      <h1>Dinner w/ Holdy</h1>
      <pre>Oh ya. Open offer. If anyone is ever in Salt Lake or if I ever visit your town, dinner on me.</pre>
    </div>
  `
}
