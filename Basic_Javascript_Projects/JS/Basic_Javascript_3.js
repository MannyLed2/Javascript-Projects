function addition_Function() {
    var addition = 2+2;
    document.getElementById("Math").innerHTML = "2+2=" + addition;
}

function subtraction_Function() {
    var Subtraction = 5-2;
    document.getElementById("Sub").innerHTML = "5-2=" + Subtraction;
}

function multiplication_Function() {
    var multiply = 6*8;
    document.getElementById("Multiply").innerHTML = "6*8=" + multiply;
}

function division_Function() {
    var divide = 48/6;
    document.getElementById("Divide").innerHTML = "48/6=" + divide;
}

function more_Math() {
    var simple_Math = (1+2) *10 /2 -5;
    document.getElementById("Various").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals" + simple_Math;
}

function modulus_Operator() {
    var crazy_Math = 25% 6;
    document.getElementById ("Crazy").innerHTML = "When you divide 25 by 6 you have a remainder of: " + crazy_Math;
}

function negation_Operator() {
    var x = 10;
    document.getElementById("Neg").innerHTML = -x;
}
var X = 5;
X++;
document.write(X);

var C = 4.25;
C--;
document.write(C);

window.alert(Math.random());
window.alert(Math.random() * 100);
window.alert(Math.round(4.7));