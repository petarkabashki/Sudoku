"use strict"

module.exports = class NumpadComponent {
    render(parent, state, dispatch){

        const html = `
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>0</button>
        `
        const element = document.createElement("div")
        element.className = "numpad"
        element.innerHTML = html
        if(state.showNumpad) {
            element.style.display = "block"
        }

        element.addEventListener("click", (event) => {
            const element = event.srcElement

            if(element.tagName === "BUTTON"){

                dispatch({ TYPE: "SELECT NUMBER", n: element.innerText })

            }
        });

        parent.appendChild(element)

    }
}