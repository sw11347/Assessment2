function changeAllTagText() {
    tagElements = document.getElementsByTagName("h1");
    //Searching all elements with tag name "h1".
    //If searching elements, does not only give one element back.
    //If I have many elements, I will have an array, not only one element.
    // assigns number eg [0], [1]....
    //If I dont know how many, we loop.


    i = 0; // start from 0
    while (i<tagElements.length){ //each array has an attribute length.
        tagElements[i].innerText = "I changed all text in heading 1"; // change to this text.
        tagElements[i].style.fontFamily = "Agency";
        i++; // add 1 on, same as i = i + 1
    }
}
function changeAllClassText() {
    classElements = document.getElementsByClassName("group1");
    i = 0;
    while (i<classElements.length){
        classElements[i].innerText = "I have changed all text in class group1";
        i = i + 1;
    }
}
function changeIDText() {
    idElement = document.getElementById("heading5");
    idElement.innerText = "Hello";
}