

$(".main-menu-item").on("click",function(){
   /* $(".sub-menu").css("display","block")*/
     $('li > ul').not($(this).children("ul").toggle()).hide();
});


$(".drop-main-menu-item").on("click",function(){
   /* $(".drop-sub-menu").css("display","block")*/
     $('li > ul').not($(this).children("ul").toggle()).hide();
});
