$(document).ready(function(){
    $("#skills-link").on("click",function(event){
        event.preventDefault();
        $("#skills").addClass("shown");
    })
    $("#skill-remove-link").on("click",function(event){
        event.preventDefault();
        $("#skills").removeClass("shown");
    })
});