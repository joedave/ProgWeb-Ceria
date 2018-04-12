$(document).ready(function(){
    $("#dropdown").click(function(){
        if($("#navMenu").hasClass("responsive")){
            $("#navMenu").removeClass("responsive");
        } else{
            $("#navMenu").addClass("responsive");
        }
    });
});