
$(function(){
    // if user scroll down,emerge topscroll button

    $(window).scroll(function(){
        var currentPosition =$(this).scrollTop();

        if(currentPosition>$(window).height()) {
            $(".sidebar-left").css("opacity","1").css("transition","all 0.5s")
            $(".sidebar-right").css("opacity","1").css("transition","all 0.5s")
            $("header").css("display","none")
        }else{
            $(".sidebar-left").css("opacity","0").css("transition","all 0.5s")
            $(".sidebar-right").css("opacity","0").css("transition","all 0.5s")
            $("header").css("display","block")
        }
    });

    // click to scrolltop

    // $(".top").click(function(){
    //     $('html,body').animate({scrollTop:0},1000);
    //     return false;
    // });

    // smooth scroll
    $('a[href^="#"]').click(function(){
        var speed = 500;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
      });
    //   fadein with scroll

    // $(window).scroll(function (){
    //     $('.mosha').each(function(){
    //         var targetElement = $(this).offset().top;
    //         var scroll = $(window).scrollTop();
    //         var windowHeight = $(window).height();
    //         if (scroll > targetElement - windowHeight + 200){
    //             $(this).css('opacity','1');
    //             $(this).css('transform','translateY(0)');
    //         }
    //     });
    // });

});