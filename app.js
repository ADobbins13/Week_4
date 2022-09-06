// Objective: We are going to create an object Radio! 
// How to begin: 
// Create a new HTML/CSS/JS and complete the following in your .js file
// Make a radio Object.Give it a property called stations and make the value an array of station objects
// Give each station object a property called name and songs. Name should be a string and should be an array of song objects.
// Song object should have two properties: title and artist
// Create a method on your radio object that changes the station randomly. 
// When the station is changed, pick a song from that station console.log("Now Playing:" + song,title + "by" + song.artist)
 

// Submission: Submit a share link of your repl file here! 

 

// Happy coding!

let song1 = {
    title:"Cross My Mind",
    artist:"Jill Scott"
}

let song2 = {
    title:"Playa Playa",
    artist:"D'angelo"
}

let song3 = {
    title:"Rock The Boat",
    artist:"Aaliyah"
}

let song4 = {
    title:"Magic",
    artist:"Vince Staples"
}

let song5 = {
    title:"Aliens",
    artist:"Outkast"
}

let song6 = {
    title:"Black Star",
    artist:"Respiration"
}

let song7 = {
    title:"The Thrill Is Gone",
    artist:"Chet Baker"
}

let song8 = {
    title:"Blue In Green",
    artist:"Miles Davis"
}

let song9 = {
    title:"A Loosing Game",
    artist:"James Carr"
}

let station1 = {
    name:"R&B",
    songs:[song1, song2, song3]
}
let station2 = {
    name:"Hip-Hop",
    songs:[song4, song5, song6]
}
let station3 = {
    name:"Blues",
    songs:[song7, song8, song9]
}

let radio = {
    stations:[station1, station2, station3],

    changeRadio: function() {
        let channel = Math.floor(Math.random()*3)
        let track = Math.floor(Math.random()*3)
        console.log(`Now Playing: ${radio.stations[channel].songs[track].title} by ${radio.stations[channel].songs[track].artist}`)
    }
}    


radio.changeRadio()