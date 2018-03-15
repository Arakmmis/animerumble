module.exports.constructor = {
    character: function(payload) {
        this.name = payload.name
        this.hp = payload.hp
        this.status = []
        this.modifier = []
        this.skill = payload.skill
    },
    skill: function(payload) {
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
            if(payload.offense.modifier.length > 0){   
                console.log('testhi')     
                payload.offense.modifier[0].apply(package, this.move, 'offense')            
            }
            else{
                if(payload.target.modifier.length > 0){   
                    console.log('hi')     
                    payload.target.modifier[0].apply(package, this.move, 'target')            
                }
                else {
                    payload.target = this.move(package)
                }            
            }
            // payload.target.hp = payload.target.hp - this.damage
            
            return payload.target
        }    
    },
    modifier: function(payload) {
        this.active = 2    
        this.val = payload.val    
        this.modify = payload.modify
        this.type = payload.type
        this.apply = function (payload, callback, owner) {
            console.log('stat')
            // payload.damage = payload.damage + this.val
            console.log(payload)
            if(owner === 'offense'){
                payload.offense.modifier[0].modify(payload, (payload)=>{
                    if(payload.target.modifier.length > 0){   
                        console.log('hi')     
                        payload.target.modifier[0].modify(payload, callback)
                    }
                    else{
                        callback(payload)
                    }
                })
            }
            else{
                payload.target.modifier[0].modify(payload, callback)
            }
            
        }
    },
    status: function(payload) {
        this.active = 2    
        this.val = payload.val    
        this.modify = payload.modify
        this.type = payload.type
        this.apply = function (payload) {
            console.log('stat')
            // payload.damage = payload.damage + this.val
            console.log(payload)
    
            if(payload.offense.status.length > 0){ 
                let package = {            
                    offense: payload.offense                
                }
                console.log('hi')     
                payload.offense.status[0].modify(package)
            } 
        }
    }
}

 function applySkill(payload) {
    console.log('apply', payload.target.name, payload.target.hp, this.damage)
    let package = {            
        offense: payload.offense,
        target: payload.target,
        damage: this.damage
    }
    if(payload.offense.modifier.length > 0){   
        console.log('testhi')     
        payload.offense.modifier[0].apply(package, this.move, 'offense')            
    }
    else{
        if(payload.target.modifier.length > 0){   
            console.log('hi')     
            payload.target.modifier[0].apply(package, this.move, 'target')            
        }
        else {
            payload.target = this.move(package)
        }            
    }
    // payload.target.hp = payload.target.hp - this.damage
    
    return payload.target
}