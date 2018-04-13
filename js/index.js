$(document).ready(function(){
    $("#dropdown").click(function(){
        if($("#navMenu").hasClass("responsive")){
            $("#navMenu").removeClass("responsive");
        } else{
            $("#navMenu").addClass("responsive");
        }
    });

    $(".content").css({
        "position":"relative",
        "top":$("header").outerHeight(true)
    });
});