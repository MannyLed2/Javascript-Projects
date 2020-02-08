document.write(typeof "word");
document.write(typeof 3);

function my_Function() {
    document.getElementById("Test").innerHTML = 0/0;
}

function false_Function() {
    document.getElementById("False").innerHTML = isNaN('007');
}

function true_Function() {
    document.getElementById("True").innerHTML = isNaN('This is a string');
}

document.write (2E310);
document.write (-3E310);
document.write (10>2);
document.write (10<2);

console.log(2+2);
console.log(10<2);
document.write("10" +5);
document.write(10 == 10);
document.write(3 == 10);

X = 10;
Y = 10;
document.write(X === Y);

A = 1;
B = "yes";
document.write(A === B);

C = 2;
D = "2";
document.write(C === D);

E = "No";
F = "Yes";
document.write(E === F);

document.write(5>2 && 10>4);
document.write(5>10 && 10>4);

document.write(5>10 || 10>4);
document.write(5>10 || 10>20);

function not_Function() {
    document.getElementById("Not").innerHTML = !(5>10);
}