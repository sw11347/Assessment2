function showString() {

    var myInput = document.getElementById("userMessage");
    var myString = myInput.value;
    // var myString = "Hello World"; //everything in between "" is string.
    var myPara = document.getElementById("StringExample");
    myPara.innerText = myString;

}

function calculate() {

    num1Input = document.getElementById("num1Input");
    num2Input = document.getElementById("num2Input");
    var num1 = num1Input.value;
    var num2 = num2Input.value;
    var result = num1+num2;
    //result = num1 * num2;
    var resultpara = document.getElementById("showCalculationResult");
    resultpara.innerText = result;

}
