let pikachu = {
    name: "Pikachu",
    type: "electric",
    moves: ["Iron Tail", "ThunderBolt"],
    speak: function () {
        console.log("Pika pika!");
    }
};

console.log(pikachu.name + " is an " + pikachu.type + " type.");
console.log(pikachu.move[0]);

pikachu.speak();