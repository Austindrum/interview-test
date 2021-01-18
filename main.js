$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 200){
            $("#back-to-top").fadeIn();
        }else{
            $("#back-to-top").fadeOut();
        }
    })
})