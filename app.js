const _ = require('lodash')

function character(payload) {
    this.name = payload.name
    this.hp = payload.hp
    this.status = []
    this.skill = payload.skill
}

function skill(payload) {
    this.type = payload.type
    this.damage = payload.damage
    this.cooldown = 2
    this.val = 20
    this.move = payload.move
    this.apply = function (payload) {
        console.log('apply', payload.target.name, payload.target.hp, this.damage)
        let package = {            
            offense: payload.offense,
            target: payload.target,
            damage: this.damage
        }
        if(payload.offense.status.length > 0){   
            console.log('hi')     
            payload.offense.status[0].apply(package, this.move, 'offense')            
        }
        else{
            if(payload.target.status.length > 0){   
                console.log('hi')     
                payload.target.status[0].apply(package, this.move, 'target')            
            }
            else {
                payload.target = this.move(package)
            }            
        }
        // payload.target.hp = payload.target.hp - this.damage
        
        return payload.target
    }    
}

function status(payload) {
    this.active = 2
    this.damage = payload.damage
    this.val = 20    
    this.modify = payload.modify
    this.apply = function (payload, callback, owner) {
        console.log('stat')
        // payload.damage = payload.damage + this.val
        console.log(payload)
        if(owner === 'offense'){
            payload.offense.status[0].modify(payload, (payload)=>{
                if(payload.target.status.length > 0){   
                    console.log('hi')     
                    payload.target.status[0].modify(payload, callback)
                }
                else{
                    callback(payload)
                }
            })
        }
        else{
            payload.target.status[0].modify(payload, callback)
        }
        
    }
}

function main(payload, callback) {
    //Define
    let action = {}

    //Set State
    let boost = new status({
        damage: 10,
        modify: function (payload, callback) {
            console.log('stat')
            payload.damage = payload.damage + this.val
            console.log(payload)
            callback(payload)
        }
    })

    let protect = new status({
        damage: 10,
        modify: function (payload, callback) {            
            console.log('protect', payload.damage)
            payload.damage = payload.damage - this.val
            console.log('protect', payload.damage)
            console.log(payload)
            callback(payload)
        }
    })

    let attack = new skill({
        type: 'attack',
        damage: 10,
        move: function (payload) {
            console.log('inside', payload.target.name, payload.target.hp, payload.damage)
            payload.target.hp = payload.target.hp - payload.damage
            return payload.target
        }
    })
    let hurt = new skill({
        type: 'attack',
        damage: 20,
        apply: function (payload) {
            console.log('inside', payload.target.name, payload.target.hp, this.damage)
            payload.target.hp = payload.target.hp - this.damage
            return payload.target
        }
    })
    let heal = new skill({
        type: 'heal',
        damage: 20,
        val: 20,
        apply: function (payload) {
            console.log('inside', payload.target.name, payload.target.hp, this.damage)
            payload.target.hp = payload.target.hp + this.val
            return payload.target
        }
    })
    let protection = new skill({
        type: 'protection',
        damage: 20,
        apply: function (payload) {
            console.log('inside', payload.target.name, payload.target.hp, this.damage)
            payload.target.status.push = payload.target.hp + this.damage
            return payload.target
        }
    })
    let playerOne = new character({
        name: 'playerOne',
        hp: 100,
        skill: [attack, hurt, heal]
    })
    playerOne.status.push(boost)
    let heroOne = new character({
        name: 'heroOne',
        hp: 100,
        skill: [attack, hurt, heal]
    })

    let playerTwo = new character({
        name: 'playerTwo',
        hp: 100,
        skill: [attack, hurt, heal]
    })
    playerTwo.status.push(protect)
    let heroTwo = new character({
        name: 'heroTwo',
        hp: 100,
        skill: [attack, hurt, heal]
    })
    let heroThree = new character({
        name: 'heroThree',
        hp: 100,
        skill: [attack, hurt, heal]
    })
    let playerThree = new character({
        name: 'playerThree',
        hp: 100,
        skill: [attack, hurt, heal]
    })

    let state = {
        teamA: [
            playerOne,
            heroOne,
            heroThree,
        ],
        teamB: [
            playerTwo,
            heroTwo,
            playerThree,
        ],
        turn: 1,
        myTeam: ''
    }
    state.teamA.forEach((x, i) => x.id = i)
    state.teamB.forEach((x, i) => x.id = i)
    let store = [state]
    action.store = store[store.length - 1]

    function move(payload) {
        let state = _.cloneDeep(store[store.length - 1])
        state.turn = state.turn + 1

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
        store.push(state)
        action.view(store[store.length - 1])
    }
    action.move = move
    callback(action)
}

module.exports = {
    main: main
}