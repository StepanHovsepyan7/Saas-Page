'use strict';

$(function(){
    $(window).scroll(function() {

        if($(window).scrollTop() >= 2) {
            $(".parent2").css({
                background: "white",
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
            $('a').css({
                color: '#262626',
            })
        }

    })


    let modalNavV = $('.modalNavV');
    let fb = $('.fb');
    let inst = $('.inst')
    let twitr = $('.twitr')
    let book = $('.book'); 
    let a = $('a');
    let homeA = $('.homeA');
    let port = $('.port');
    let aboutA = $('.aboutA')
    let galleryA = $('.galleryA')
    let serviceA = $('.serviceA')
    let contactA = $('.contactA')
    // let modalNav = $('.modalNav');
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
        


        fax.click(function (){
            modalNavV.css({
                display: 'none',
            })
        })
    }


aboutA.click(function(){
    aboutA.css({
        color:'#34e3c9' ,
    })   
    homeA.css({
        color: '#292d36',
    })
    port.css({
        color: '#292d36',
    })
    galleryA.css({
        color:'#292d36', 
    })
    serviceA.css({
        color: '#292d36',
    })
    contactA.css({
        color: '#292d36',
    })

})

homeA.click(function () {
    homeA.css({
        color:'#34e3c9',
    }) 
    aboutA.css({
        color:'#292d36' ,
    })   
    port.css({
        color: '#292d36',
    })
    galleryA.css({
        color:'#292d36', 
    })
    serviceA.css({
        color: '#292d36',
    })
    contactA.css({
        color: '#292d36',
    })
})

port.click(function () {
    homeA.css({
        color:'#292d36',
    }) 
    aboutA.css({
        color:'#292d36' ,
    })   
    port.css({
        color: '#34e3c9',
    })
    galleryA.css({
        color:'#292d36', 
    })
    serviceA.css({
        color: '#292d36',
    })
    contactA.css({
        color: '#292d36',
    })
})


galleryA.click(function () {
    homeA.css({
        color:'#292d36',
    }) 
    aboutA.css({
        color:'##292d36',
    })   
    port.css({
        color: '#292d36',
    })
    galleryA.css({
        color:'#34e3c9', 
    })
    serviceA.css({
        color: '#292d36',
    })
    contactA.css({
        color: '#292d36',
    })
})


serviceA.click(function () {
    homeA.css({
        color:'#292d36',
    }) 
    aboutA.css({
        color:'#292d36' ,
    })   
    port.css({
        color: '#292d36',
    })
   galleryA.css({
    color: '#292d36',
    })
    serviceA.css({
        color: '#34e3c9',
    })
    contactA.css({
        color: '#292d36',
    })
})

contactA.click(function () {
    homeA.css({
        color:'#292d36',
    }) 
    aboutA.css({
        color:'#292d36' ,
    })   
    port.css({
        color: '#292d36',
    })
    galleryA.css({
        color:'#292d36' , 
    })
    serviceA.css({
        color: '#292d36',
    })
    contactA.css({
        color: '#34e3c9',
    })
})

})

// .fa-x