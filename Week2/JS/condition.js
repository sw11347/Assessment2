function calculate_grade() {

    mark_input = document.getElementById("mark_input");
    mark = mark_input.value;
    if (mark < 50 && mark > 0){
        pass = "No";
    }
    else{
        pass = "Yes";
    }

    show_pass = document.getElementById("show_pass"); // Find ID show_pass.
    show_pass.innerText = pass; // change its value.

    show_grade = document.getElementById("show_grade");
    //grade = show_grade.value;
    //if (mark >90 && mark <=100){
    //    grade = "A";
    //}
    //if (mark >70 && mark <=90){
    //    grade = "B";
    //}
    //if (mark >50 && mark <=70){ //&& means and
    //    grade.innerText = "C";
    //}
    //if (mark >0 && mark <=50) {
    //    grade = "D";
    //}
    //if (mark >100 || mark <0) { // || means or
    //    grade = "Wrong Input";
    //}
    if (mark >100 || mark < 0){
        grade = "Wrong Input";
    }
    else if (mark >= 90){
        grade = "A";
    }
    else if (mark >= 70){
        grade = "B";
    }
    else if (mark >= 50){
        grade = "C";
    }
    else {
        grade = "D";
    }
  show_grade.innerText = grade;
}

function show_mark_range() {
    grade_selection = document.getElementById("grade_select");
    grade = grade_selection.value;

    switch (grade){
        case "A":
            range = "90 to 100";
            break;
        case "B":
            range = "70 to 90";
            break;
        case "C":
            range = "50 to 70";
            break;
        case "D":
            range = "Less than 50";
            break;
        default:
            range = "please select";
            break
    }
    show_range_place = document.getElementById("show_range");
    show_range_place.innerText = range;
}