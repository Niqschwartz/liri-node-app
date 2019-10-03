// require("dotenv").config();

var keys = require("./keys.js");

// var Spotify = require("node-spotify-api");

var axios = require("axios");

// var moment = require ("moment");

var fs = require("fs");

// var spotify = new Spotify(keys.spotify);

// var getArtistsNames = function(artist){
    // return artist.name;
// }

// var getMeSpotify = function(songName) {
//     if (songName === undefined){
//         songName = "Whoomp there it is";
//     }
// }
var inputString = process.argv;
var userCommand = inputString[2];
var userSearch = inputString[3];

console.log(command);
 
switch (userCommand){
    case "concert-this":
        concertThis();
    break;
    case "spotify-this-song":
        spotifyThis();
    break;
    case "movie-this":
        movieThis();
    break;
    case "do-this":
        doThis()
    break;
    default: 
    console.log("Command Undefined")
    break;
}

function concertThis(){
    
}