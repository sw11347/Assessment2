$(document).ready(function () {
    // if you use id, add # in front
    $("#button").click(function () {
        $("p").toggle();
    });
    $("#button2").click(function () {
        // class group 1 will be my selector, hide is the action.
        // . means class
        $(".group1").toggle();
    });
    $("#button3").click(function () {
        // class group 1 will be my selector, hide is the action.
        // . means class
        $("#p5").toggle();
    });
    $("#double_click").dblclick(function () {
        $("p").toggle();
    });
    $("#mouse_over").mouseenter(function () {
        $("p").show();
    });
    $("#mouse_over").mouseleave(function () {
        $("p").hide();
    });
});