function myFirstFunction() {
    var str="This text is Green!";
    var result=str.fontcolor ("Green");
    document.getElementById("Green_Text").innerHTML = result;
}

function myFunction() {
    var sentence = "I am learning";
    sentence += " a lot from this book!";
    document.getElementById("Concatenate").innerHTML = sentence;
}

function mySecondFunction() {
    var saiyan = "I was raised on Earth";
    var result = saiyan.fontsize ("13");
    document.getElementById("Goku").innerHTML = result;
}