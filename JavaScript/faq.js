$(function(){
    // $(".accordion-content").slideUp();
    $(".faq-item").click(function(){

        if($(this).find(".faq-content").is(":visible")){
            $(this).find(".faq-content").slideUp();
            $(this).find('.faq-header').removeClass('active');
        }else{
            $(this).find(".faq-content").slideDown();
            $(this).find('.faq-header').addClass('active');
        }
        
    })
})