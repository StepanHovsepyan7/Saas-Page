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
        color: 'white',
    })
    port.css({
        color: 'white',
    })
    galleryA.css({
        color:'white' , 
    })
    serviceA.css({
        color: 'white',
    })
    contactA.css({
        color: 'white',
    })

})

homeA.click(function () {
    homeA.css({
        color:'#34e3c9',
    }) 
    aboutA.css({
        color:'white' ,
    })   
    port.css({
        color: 'white',
    })
    galleryA.css({
        color:'white' , 
    })
    serviceA.css({
        color: 'white',
    })
    contactA.css({
        color: 'white',
    })
})

port.click(function () {
    homeA.css({
        color:'white',
    }) 
    aboutA.css({
        color:'white' ,
    })   
    port.css({
        color: '#34e3c9',
    })
    galleryA.css({
        color:'white' , 
    })
    serviceA.css({
        color: 'white',
    })
    contactA.css({
        color: 'white',
    })
})


galleryA.click(function () {
    homeA.css({
        color:'white',
    }) 
    aboutA.css({
        color:'white' ,
    })   
    port.css({
        color: 'white',
    })
    galleryA.css({
        color:'#34e3c9' , 
    })
    serviceA.css({
        color: 'white',
    })
    contactA.css({
        color: 'white',
    })
})


serviceA.click(function () {
    homeA.css({
        color:'white',
    }) 
    aboutA.css({
        color:'white' ,
    })   
    port.css({
        color: 'white',
    })
    galleryA.css({
        color:'wihite' , 
    })
    serviceA.css({
        color: '#34e3c9',
    })
    contactA.css({
        color: 'white',
    })
})

contactA.click(function () {
    homeA.css({
        color:'white',
    }) 
    aboutA.css({
        color:'white' ,
    })   
    port.css({
        color: 'white',
    })
    galleryA.css({
        color:'wihite' , 
    })
    serviceA.css({
        color: 'white',
    })
    contactA.css({
        color: '#34e3c9',
    })
})

})

let  aboutClass = $('.aboutClass')
   

$(window).scroll(function(){
    $(".aboutClass").each(function(){ 
      var x = $(window).scrollTop() + $(window).height(); 
      var y = $(this).offset().top + $(this).height() / 2; 

      if (x >= y) { 
        $(this).addClass('active');
        aboutClass.css({
            display: 'block',
        })
      };
    });
  });

  let allBTN = $('.allBTN');
  let foodsBTN = $('.foodsBTN')
  let drinksBTN = $('.drinksBTN');
  let eventsBTN = $('.eventsBTN');
  let pastiresBTN = $('.pastiresBTN');


 
// .fa-x