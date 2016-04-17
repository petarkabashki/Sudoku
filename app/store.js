"use strict"

const reducers = require("./reducers")

module.exports = class Store {
    constructor(){
        const subscribers = []
        var state = { showNumpad: false,
            grid: [
            [ {}, {}, {n : 6, preset: true}, {}, {}, {}, {n:4, preset: true}, {}, {}],
            [ {n:7, preset: true}, {}, {}, {}, {}, {n:3, preset: true}, {n:6, preset: true}, {}, {}],
            [ {}, {}, {}, {}, {n:9, preset: true}, {n:1, preset: true}, {}, {n:8, preset: true}, {}],
            [ {}, {}, {}, {}, {}, {}, {}, {}, {}],
            [ {}, {n:5, preset: true}, {}, {n:1, preset: true}, {n:8, preset: true}, {}, {}, {}, {n:3, preset: true}],
            [ {}, {}, {}, {n:3, preset: true}, {}, {n:6, preset: true}, {}, {n:4, preset: true}, {n:5, preset: true}],
            [ {}, {n:4, preset: true}, {}, {n:2, preset: true}, {}, {}, {}, {n:6, preset: true}, {}],
            [ {n:9, preset: true}, {}, {n:3, preset: true}, {}, {}, {}, {}, {}, {}],
            [ {}, {n:2, preset: true}, {}, {}, {}, {}, {n:1, preset: true}, {}, {}],
        ] }

        const me = this
        this.dispatch = (action) =>
        {
            if (process.browser) {
                console.log("BEFORE STATE: ", state)
                console.log("ACTION: ", action)
            }

            state = reducers.mainReducer(state, action, function(actn){ me.dispatch(actn) })


            if (process.browser) {
                console.log("AFTER STATE: ", state)
            }

            subscribers.forEach(s => s.notify(state))
        }

        this.subscribe = (subscriber) => {
            subscribers.push(subscriber)
        }

        this.getState = () => {
            return Object.assign({},state)
        }
    }
}