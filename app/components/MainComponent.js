"use strict"

const GameComponent = require("./GameComponent")
const NumpadComponent = require("./NumpadComponent")

module.exports = class MainComponent {
    render(parent, state, dispatch){
        const html = `
            <div class="header">
            </div>
        `

        const element = document.createElement("div")
        element.className = "container"
        element.innerHTML = html


        new GameComponent().render(element, state, dispatch)

        new NumpadComponent().render(element, state, dispatch)



        parent.innerHTML = ""
        parent.appendChild(element)

    }
}