function full_Sentence() {
    var part_1 = "I have";
    var part_2 = " made this";
    var part_3 = " into a complete";
    var part_4 = " sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice (27,33);
    document.getElementById("Slice").innerHTML = Section;
}

function myFunction() {
    var str = "Hello World!";
    var res = str.toUpperCase();
    document.getElementById("demo").innerHTML = res;
}

function search_Function() {
    var str = "Mr. Blue has a blue house";
    var N = str.search("blue");
    document.getElementById("Search").innerHTML = N;
}

function string_Method() {
    var X = 182;
    document.getElementById("Numbers to string").innerHTML = X.toString();
}

function precision_Method() {
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

function fixed_Function() {
    var num = 5.56789;
    var n = num.toFixed(2);
    document.getElementById("Fix").innerHTML = n;
}

function value_Function() {
    var str = "Hello World!";
    var res = str.valueOf();
    document.getElementById("Value").innerHTML = res;
}