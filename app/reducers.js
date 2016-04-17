"use strict"


var exports = module.exports = {}

exports.mainReducer = mainReducer

function mainReducer(state, action, dispatch) {
    if (!action) {
        return Object.assign({}, state);
    }

    switch (action.TYPE) {
        case "CLICK CELL":
            //if(!state.showNumpad || (
            if(state.selectedCellPosition && state.selectedCellPosition.x == action.position.x && state.selectedCellPosition.y == action.position.y)
            {
                return Object.assign({}, state, {showNumpad: !state.showNumpad});
            } else {
                return Object.assign({}, state, {showNumpad: true, selectedCellPosition: action.position});
            }
            //}
            //return state;
            break;
        case "SELECT NUMBER":
            const newGrid = cloneGrid(state.grid)
            newGrid[state.selectedCellPosition.x][state.selectedCellPosition.y].n = action.n

            return Object.assign({}, state, {grid : newGrid, showNumpad: false});
            break;
        default:
            return state
    }
}

function cloneGrid(grid){
    var result = []
    grid.forEach( (row, rind) => {
        let newRow = []
        row.forEach( (cell, cind) => {
            newRow.push(Object.assign({}, cell))

         })
        result.push(newRow)
    })
    return result
}

