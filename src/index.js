import { button }  from './modules/widget.js'
function app() {
    const name = 'John Doe'
    const head = `<h1>Hello ${name}!</h1>`
    const btn1 = button()
    const el = `<div>
        ${head}
        ${btn1}
    </div>`

    return el
}


document.body.innerHTML = app()