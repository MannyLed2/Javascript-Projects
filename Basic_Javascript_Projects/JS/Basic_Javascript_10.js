function Call_Loop() {
    var Digit ="";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

function myFunction() {
    var str = "Hello World!";
    var n = str.length;
    document.getElementById("demo").innerHTML = n;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
    Content += Instruments [Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Array").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + ".";
}

function constant_function() {
    const Musical_Instrument = {type:"guitar ", brand:"Fender", color:"black", shape:"round"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    Musical_Instrument.brand = "yamaha"
    document.getElementById("Constant").innerHTML = "The cost of the " + 
        Musical_Instrument.type + "was " + Musical_Instrument.price +
        " it has a " + Musical_Instrument.shape + " shape, " +
        "manufactured by " + Musical_Instrument.brand + ", the color is " +
        Musical_Instrument.color;
}

var C = 82;
document.write(C); 
{
    let C = 33;
    document.write("<br>" + C);
}
document.write("<br>" + C);

function car_Function() {
let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description : function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();
}

function break_demo(){
var text = "";
var i;
for (i = 0; i < 10; i++) {
    if (i ===3) {break;}
    text += "The number is " + i + "<br>";
}
document.getElementById("break demo").innerHTML = text;
}

function continue_demo(){
    var text = "";
    var i;
    for (i = 0; i < 10; i++) {
        if (i ===3) {continue;}
        text += "The number is " + i + "<br>";
    }
    document.getElementById("continue demo").innerHTML = text;
    }
