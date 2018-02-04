/*$.ajax({
    url: "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl",
    
    dataType: "json",
    success: function (resultJSON) {
        console.log(resultJSON);
        
        
        
        
    },
    
    onerror:function(msg) {
        console.log(msg);
    }
});*/



/*
$.getJSON(
    "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl", function(data) {
        console.log(data)
    }
);
*/

$('button').click(function () {
    $.getJSON(
        "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl",
        function (data) {
            /*console.log(data); tego nie musi być*/

            $('body').append($('<p>').text(data.userId));
            $('body').append($('<p>').text(data.userName));
            $('body').append($('<p>').text(data.userURL));
        }
    );
});