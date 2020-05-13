// reference type



// context vs scope

const object4 = {
    a: function(){
        console.log(this);
    }
}

// instatiation

class Player {
    constructor(name, type){
        this.name = name;
        this.type = type;
    }

    introduce(){
        console.log(`Hi I am ${this.name} and i'm ${this.type}`);
    }
}

class Wizard extends Player {
    constructor(name, type){
        super(name, type);
    }
    play(){
        console.log(`WEEEEEEEEEEEEE I'm a ${this.type}`);
    }
}

const wizard1 = new Wizard('Jonas', 'Healer');
const wizard2 = new Wizard('Lucas', 'Dark Magic');

