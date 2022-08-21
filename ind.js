let jokes = require("give-me-a-joke");
// console.dir(jokes)
const colors = require("colors");
const cowsay = require("cowsay");
jokes.getRandomDadJoke(function (joke) {
   console.log(joke.red);
});
console.log(cowsay.say({
   text: "aasdfwww eeeeww",
   e: "oO",
   T: "U "
}));
