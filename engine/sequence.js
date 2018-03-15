const _ = require('lodash')

function sequence(payload) {
    let state = _.cloneDeep(store[store.length - 1])
    state.turn = state.turn + 1

    //Apply Global Func

    payload.forEach(payload => {
        function team(owner) {
            let index = state.teamB.findIndex(x => x.name === owner)
            if (index > -1) {
                console.log(state)
                return state.teamB[index]
            } else {
                return state.teamA[state.teamA.findIndex(x => x.name === owner)]
            }
        }
        let offense = team(payload.offense)
        let target = team(payload.target)
        target = offense.skill[payload.skill].apply({
            offense: offense,
            target: target
        })
    })        

    state.teamA.forEach(x => {
        if(x.status.length > 0){ 
            console.log('teamA')     
            x.status[0].apply({offense: x})
        } 
    })
    state.teamB.forEach(x => {
        if(x.status.length > 0){ 
            console.log('teamB')     
            x.status[0].apply({offense: x})
        } 
    })

    store.push(state)
    action.view(store[store.length - 1])
}

module.exports = sequence