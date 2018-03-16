module.exports = {
    character: function(payload) {
        this.name = payload.name
        this.hp = payload.hp
        this.status = []
        this.modifier = []
        this.skill = payload.skill
    },
    skill: function(payload) {
        this.name = payload.name
        this.type = payload.type        
        this.cooldown = 2
        this.val = payload.val
        this.move = payload.move        
    },
    modifier: function(payload) {
        this.name = payload.name
        this.active = 2    
        this.val = payload.val    
        this.modify = payload.modify
        this.type = payload.type        
    },
    status: function(payload) {
        this.name = payload.name
        this.active = 2    
        this.val = payload.val    
        this.modify = payload.modify
        this.type = payload.type        
    }
}