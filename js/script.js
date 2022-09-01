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



})