function changeParaText()
{
    // after . you will see attributes and methods of this object
    // . means mine, his, her, your
    // document is my file
    // getElementById is one method belongs to document
    targetpara = document.getElementById("mypara");
    //my paragraph is an object
    //my paragraph has attribute innerText
    a = 5;
    b = 6;
    c = a+ b;
    
    targetpara.innerText = "Hello World";
    targetpara.style.fontSize="50px";
    targetpara.style.color="grey";
}
function changeMyValue(e) {
    e.innerHTML = "I changed";
}