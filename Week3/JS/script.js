function show_alert() {
    // we will use alert and console.log for debugging
    // alert("hello world");
    // console.log("hello world in console");
    // setTimeout is used to pause the actions
    setTimeout(function()
    {alert("hello world");
        console.log("hello world in console");
        },3000);
}

function show_loop() {
    // setInterval is used to loop animation or functions in javascript.
    setInterval(function() {
        alert("hello world from loop");
        console.log("hello world in console");
    },3000);
}

function move_image() {
    img = document.getElementById("moving_img")
    x = 10; //left to right
    y = 10; //top to right
    speed = Number(document.getElementById("speed_input").value);
    // create a function in loop and loop it half second
    setInterval(function(){
     if(x < 500 && y <= 10){
         x=x+speed
     } if(x >= 500 && y < 500){
         y=y+speed
        } if (x > 10 && y >= 500){
         x=x-speed
         } if(x <= 10 && y > 10){
         y=y-speed
        }
        // x=x+speed;
        // y=y+speed;
        console.log("x=",x);
        console.log("y=",y);
        img.style.left = x+"px";
        img.style.top = y+"px";
    },500);
}