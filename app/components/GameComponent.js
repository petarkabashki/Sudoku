"use strict"

module.exports = class GameComponent {
    render(parent, state, dispatch){


        const gridElement = document.createElement("div")
        gridElement.className = "grid"

        state.grid.forEach( (row, rind) => {
            const rowElement = document.createElement("div")
            rowElement.className = "row"

            row.forEach( (cell, cind) => {
                const cellElement = document.createElement("div")
                cellElement.className = "cell"
                cellElement.innerText = cell.n || ""
                if(cell.preset) {
                    cellElement.setAttribute("preset", true)
                }

                if(cell.selected) {
                    cellElement.setAttribute("selected", true)
                }

                cellElement.setAttribute("rind", rind)
                cellElement.setAttribute("cind", cind)

                rowElement.appendChild(cellElement)
            })
            gridElement.appendChild(rowElement)
        })

        gridElement.addEventListener("click", (event) => {
            const element = event.srcElement

            if(element.className === "cell" && !element.getAttribute("preset")){
                //const rowElement = element.parentNode
                const rind = element.getAttribute("rind")
                const cind = element.getAttribute("cind")


                dispatch({ TYPE: "CLICK CELL", position: { x: rind, y: cind}})

            }
            });

        parent.appendChild(gridElement)

    }
}