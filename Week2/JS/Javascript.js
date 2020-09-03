function ChangeHeading1Attributes() {
    //1. target element
    //.2 document get tag names
    target_elements = document.getElementsByTagName("h1")
    target_elements[0].style.color = 'red';
    target_elements[0].innerText = 'I Changed my Heading 1';
    target_elements[0].style.backgroundColor = 'gray';
    target_elements[1].style.color = 'black';
}
function ChangeHeading2Attributes() {
    target_elements = document.getElementsByTagName("h2")
    target_elements[0].style.color = 'red';
    target_elements[0].innerText = 'I Changed my Heading 2';
    target_elements[0].style.backgroundColor = 'gray';
    target_elements[1].style.color = 'black';
}
function ChangeParagraphAttributes() {
    target_elements = document.getElementsByTagName("p")
    target_elements[0].style.color = "yellow";
}
function ChangeDividerAttributes() {
    target_elements = document.getElementsByTagName("div")
    target_elements[0].style.color = "yellow";
}
function ChangeTableAttributes() {
    target_elements = document.getElementsByTagName("table")
    target_elements[0].style.color = "black";
}