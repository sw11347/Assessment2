$(document).ready(function () {
    $.ajax({
        type: 'get',
        url: 'https://djangorestframestudy.herokuapp.com/api/leads/',
        dataType: 'JSON',
        success: function (data) {
            console.log(data);
            i = 0; // set counter i
            while (i < data.length){ // data from console, it is an array, I don't know size of array, use length
                person = data[i]; // each item in array (data), is a person record.
                $("#records").append("<tr>" +
                    "<td>"+person.id+"</td>" +
                    "<td>"+person.name+"</td>" +
                    "<td>"+person.email+"</td>" +
                    "<td>"+person.message+"</td>" +
                    "<td><button class='show_person' personID='"+person.id+"'>show</button></td>" +
                    "</tr>");
                i = i+1;
            }
            $(".show_person").click(function() {
                personID = $(this).attr("personID");
                $.ajax({
                    type: 'get',
                    url: 'https://djangorestframestudy.herokuapp.com/api/leads/'+personID+'/',
                    success:
                    function(data) {
                        console.log(data);
                        $("#person_info").empty();
                        $("#person_info").append("" +
                            "<p>ID: "+data.id+"</p>" +
                            "<p>Name: "+data.name+"</p>" +
                            "<p>Email: "+data.email+"</p>" +
                            "<p>Message: "+data.message+"</p>" +
                            "");
                    },
                    error: function () {
                        alert("error");

                    }
                })
            });
        },
        error: function () {
            console.log('error' + data);
        }
    });
});
