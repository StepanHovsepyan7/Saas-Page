'use strict';

$(function(){
    $(window).scroll(function() {

        if($(window).scrollTop() >= 2) {
            $(".parent2").css({
                backgroundColor: "rgba(10,11,15,.9)",
            })
            $('.parent2 ul').css({
                marginBottom: "4rem",
            })
            $('.parent2 img').css({
                marginBottom: "4rem",
            })
        } else {
            $(".parent2").css({
                backgroundColor: "transparent",
            })
            
        }

    })


    let modalNavV = $('.modalNavV');
    let fb = $('.fb');
    let inst = $('.inst')
    let twitr = $('.twitr')
    let book = $('.book'); 
    let modalNav = $('.modalNav');
    let  fax = $(' .fa-x');

    if($(window).width() < 990) {


        book.click(function () {
            modalNavV.css({
                display: 'block',
            })
            fb.css({
                display: 'block', 
            })

            inst.css({
                display: 'block',
            })

            twitr.css({
                display: 'block',
            })

          

        })  
        


        fax.click(function(){
            modalNavV.css({
                display: 'none',
            })
            
        })
    }

})





// .fa-x