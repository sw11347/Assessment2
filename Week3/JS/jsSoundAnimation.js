function move_div_middle() {
    h = window.innerHeight;
    myDiv = document.getElementById("animal_pictures")
    // The top of my divider will be half of my screen
    myDiv.style.top = h/2+"px";
}
function mouse_on_picture(e) {
    e.style.height = "150px";
    switch (e.id) {
        case "birds":
            Sounds = new Audio("Sounds/birds.mp3");
            Sounds.play();
                    break
        case "cow":
            Sounds = new Audio("Sounds/cow.mp3");
            Sounds.play();
                    break
        case "horse":
            Sounds = new Audio("Sounds/horse.mp3");
            Sounds.play();
                     break
        case "crickets":
            Sounds = new Audio("Sounds/crickets.mp3");
            Sounds.play();
                    break
    }
}
function mouse_leave_picture(e) {
    e.style.height="50px";
    Sounds.pause();
}