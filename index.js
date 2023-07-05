const { spyOn } = require("expect");

function shout(string){
    return string.toUpperCase();
}

function whisper(string){
    return string.toLowerCase();
}

function logShout(string){

    console.log(string.toUpperCase());
}

function logWhisper(string){

    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string){

    // string = "Let\`s have dinner together";
    // string2 = "LET\`S HAVE DINNER TOGETHER";
    // string3 = "let\`s have dinner together";

    // if(console.log(string3.toLowerCase()) == "let\`s have dinner together")
    //     return 'I can\'t hear you!'
    // if (console.log(string2.toUpperCase()) == "LET\`S HAVE DINNER TOGETHER")
    // return "YES INDEED!"
    //  if(console.log(string) == "Let\`s have dinner together")
    //   return "I would love to!"
    if (string === string.toLowerCase()){
        // block of code
        return 'I can\'t hear you!'
    }
    if (string === string.toUpperCase()){
        //block of code
        return "YES INDEED!"
    }
    if(string === "Let's have dinner together!"){
        return  "I would love to!"
    }
}


console.log(sayHiToHeadphonedRoommate("Let's have dinner together!"));