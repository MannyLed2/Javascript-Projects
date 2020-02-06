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