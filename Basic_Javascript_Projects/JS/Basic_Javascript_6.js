function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52)? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18)? "You are not old enough to vote":"You can vote!";
    document.getElementById("Vote").innerHTML = Can_vote;
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

function Animal(Species, Breed, Color) {
    this.Animal_Species = Species;
    this.Animal_Breed = Breed;
    this.Animal_Color = Color;
}
var Betsy = new Animal("Cat", "Siamese", "White and Brown");
var Thor = new Animal("Dog", "Husky", "White and Black");
var Mikey = new Animal("Turtle", "Snapping turtle", "Green");
function animal_Function() {
    document.getElementById("New_and_This").innerHTML = 
    "Thor is a " + Thor.Animal_Species + " a type of " + Thor.Animal_Breed + ", his color is " + Thor.Animal_Color;
}

function nested_Function() {
    document.getElementById("Nested Function").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}
