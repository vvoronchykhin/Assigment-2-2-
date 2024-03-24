$(document).ready(function(){
    // Toggle answers on question click
    $('.question').click(function(){
        $(this).next('.answer').slideToggle();
    });

    // Back button 
    $('#backButton').click(function(){
        window.history.back();
    });
});
