var database = [
    {
        username: "jonas",
        password: "supersecret"
    },
    {
        username: "sally",
        password: "123"
    },
    {
        username: "ingrid",
        password: "123"
    }
];

var newFeed = [
    {
         username: "Bobby",
         timeline: "So tired from all that learning."
    },
    {
        username: "Sally",
        timeline: "Javascript is sooooo coool!!"
    },
    {
        username: "Mitch",
        password: "Javascript is preeeeetyyy coool!"
    }
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

var existsUser = function (user, pass) {
    database.forEach(function(data){
        if(data.username === user && data.password === pass){
            return true;
        }   
    });
    return false;
}

function signIn(){
    if(existsUser(userNamePrompt, passwordPrompt)){
        console.log(newFeed);
    } else {
        alert("Opps, wrong username or password!");
    }
}

signIn();
