$("[data-trigger]").on("click", function(){
    var trigger_id =  $(this).attr('data-trigger');
    $(trigger_id).toggleClass("show");
    $('body').toggleClass("offcanvas-active");
});

// close button 
$(".btn-close").click(function(e){
    $(".navbar-collapse").removeClass("show");
    $("body").removeClass("offcanvas-active");
});



// $( ".fa-index" ).mouseover(function()
// {
//     $(this).addClass("fa-times");
// $(this).removeClass("fa-angle-down");
// });

// $( ".fa-index" ).mouseout(function()
// {
//     $(this).removeClass("fa-times");
//     $(this).addClass("fa-angle-down");

// });


// $(function(){   
//     $(".fa-index").hover(     
//     function () {       
//     $(this).toggleClass('fa-times fa-angle-down hovered');
//     },
//           function ()
//     {       
//     $(this).toggleClass('fa-times fa-angle-down hovered');     
//     }    );});
