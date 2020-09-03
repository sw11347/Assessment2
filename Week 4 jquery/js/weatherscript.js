$(document).ready(function () {

    $("#submit_button").click(function () {
    city = $("#city_name").val();
    $.ajax();
        $.ajax({
            type: 'get',
            url: 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=669e78a26f143ee9de275917ea66779c',
            dataType: 'JSON',
            success: function (data) { console.log(data);
                $("#location_place").text(data.name);
                $("#forecast_place").text(data.weather[0].description);
                $("#temp_place").text(data.main.temp);
                $("#wind_place").text(data.wind.speed);
                $("#icon").html("<img src='http://openweathermap.org/img/wn/"+data.weather[0].icon+".png'>");

            },
            error: function () { console.log('error' + data);}
        });
    });


});