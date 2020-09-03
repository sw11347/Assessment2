function calculate_sum() {
    sum = 0; //my sum will start from 0, numbers will be added to sum
    number = Number(document.getElementById("number_from").value); //number start from one. This number will record loop amount
    while (number <= Number(document.getElementById("number_to").value)){ //this is the condition
        sum = sum + number; // actions
        console.log("number: "+ number + " sum: " + sum); //we need to print them out zs a string
        number = number + 1; //add on one to number, to update condition.

    }
    document.getElementById("sum_result").innerHTML = sum;
}
function go_next_step() {
    inputText = document.getElementById("user_input").value;
    if (inputText != "yes"){
        alert("type again");
    }else{
        alert("you type right");
    }
}