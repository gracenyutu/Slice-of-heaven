$(document).ready(function(){
    $("gallery.small").click(function(){
        $("gallery.description").css("background-color", "red");
    });
    $("#medium").click(function(){
        $("#crusts").show();
    });$("#large").click(function(){
        $url("crusts.html").show();
    });

});