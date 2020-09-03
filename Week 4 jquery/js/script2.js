$(document).ready(function () {
    $("#toggle").click(function () {
        $("#demo").toggle("fast", function(){
            alert("done")
    });
    });


    $("#fade_in").click(function () {
        $("#demo").fadeToggle("slow");
    });

    $("#enlarge").click(function () {
        $("#demo").animate({width: "250px", height: "250px"})
    });

        $("#slide").click(function () {
            $("#slide_div").slideDown(2000).slideUp(2000).slideDown(2000)
    });

        $("#change_text_value").click(function () {
            currentText = $("#change_text_here").text();
            alert("Current Text: " + currentText);
            $("#change_text_here").text("Hello Simon");
            currentValue = $("#change_value_here").val();
            alert("Current Value: " +currentValue);
            $("#change_value_here").val("Hello Woods");
        });

        $("#add_html_button").click(function () {
            alert($("#demo_table").html()); // collect html code in id element, show as alert.
            $("#demo_table" ).html("<tr><td>Simon Woods</td><td>22</td><td>Male</td></tr>" + "<tr><td>Simon Woods</td><td>22</td><td>Male</td></tr>");
        });

        $("#show_table_attributes").click(function () {
            alert($("#demo_table").attr("price"));
            alert($("#demo_table").attr("age"));
            alert($("#demo_table").attr("attr1"));
        });
        $("#append_button").click(function () {
            $("#demo_table").append("<tr><td>Simon Woods</td><td>22</td><td>Male</td></tr>");
        });

    $("#prepend_button").click(function () {
        $("#demo_table").prepend("<tr><td>Simon Woods</td><td>22</td><td>Male</td></tr>");
    });

    $("#remove_heading").click(function () {
        $("#table_heading").remove();
    });

    $("#empty_table").click(function () {
        $("#demo_table").empty();
    });

    $("#add_class").click(function () {
        $("#demo_table").addClass("table1");
    });
});

