const _ = require('lodash')

function applySkill(payload) {
    console.log('apply', payload.target.name, payload.target.hp, payload.offense.skill[payload.skill].val)
    let package = {
        offense: payload.offense,
        target: payload.target,
        val: payload.offense.skill[payload.skill].val,
        skill: payload.skill,
        move: payload.offense.skill[payload.skill].move
    }
    if(payload.offense.modifier.length > 0){   
        console.log('testhi')     
        applyStatus(package, package.move, 'offense')
        // payload.offense.modifier[0].apply(package, package.move, 'offense')            
    }
    else{
        if(payload.target.modifier.length > 0){   
            console.log('hi')     
            applyStatus(package, package.move, 'target')            
        }
        else {
            payload.target = package.move(package)
        }            
    }
    // payload.target.hp = payload.target.hp - this.damage
    
    return payload.target
}

function applyStatus(payload, callback, owner) {
    console.log('stat')
    // payload.damage = payload.damage + this.val
    console.log(payload)
    if(owner === 'offense'){
        payload.offense.modifier[0].modify(payload, (payload)=>{
            if(payload.target.modifier.length > 0){   
                console.log('target')     
                payload.target.modifier[0].modify(payload, callback)
            }
            else{
                callback(payload)
            }
        })
    }
    else{
        console.log('target 2')     
        payload.target.modifier[0].modify(payload, callback)
    } 
}

function sequence(payload, store, callback) {
    console.log(store)
    let state = _.cloneDeep(store)
    state.turn = state.turn + 1

    //Pre Sequence

    //Sequence
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
        target = applySkill({
            offense: offense,
            target: target,
            skill: payload.skill
        })
        // target = offense.skill[payload.skill].apply({            
        //     offense: offense,
        //     target: target
        // })
    })        

    //Post Sequence
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
    callback(state)
}

module.exports = sequence