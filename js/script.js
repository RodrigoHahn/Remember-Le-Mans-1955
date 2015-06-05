$( document ).ready( function() {


  $("#intro video, #intro .content, .playbutton, .i-w02, .i-w03").hide();


  $("#intro .content").delay(300).fadeIn(4000);
  $("#intro video").delay(300).fadeIn(2000);


  $('#i-c01').on('click', function() { 
    $('.i-w03, .i-w02').fadeOut(300);
    $('.i-w01').delay(300).fadeIn(300);
    $('#i-c01').addClass('i-cActive');
    $('#i-c02, #i-c03').removeClass('i-cActive');
  });

  $('#i-c02').on('click', function() { 
    $('.i-w03, .i-w01').fadeOut(300);
    $('.i-w02').delay(300).fadeIn(300);
    $('#i-c02').addClass('i-cActive');
    $('#i-c01, #i-c03').removeClass('i-cActive');
  });

    $('#i-c03').on('click', function() { 
    $('.i-w02, .i-w01').fadeOut(300);
    $('.i-w03').delay(300).fadeIn(300);
    $('#i-c03').addClass('i-cActive');
    $('#i-c01, #i-c02').removeClass('i-cActive');
  });

  $('.infoicon01').on('click', function() { 
    $('.video-box').fadeIn(500);
    $('.desaster-vid01').fadeIn(500);
  });

  $('.infoicon02').on('click', function() { 
    $('.video-box').fadeIn(500);
    $('.desaster-vid02').fadeIn(500);
  });

  $('.infoicon03').on('click', function() { 
    $('.video-box').fadeIn(500);
    $('.desaster-vid03').fadeIn(500);
  });

  $('.infoicon04').on('click', function() { 
    $('.video-box').fadeIn(500);
    $('.desaster-vid04').fadeIn(500);
  });

    $('.infoicon05').on('click', function() { 
    $('.video-box').fadeIn(500);
    $('.desaster-vid05').fadeIn(500);
  });

  $('.infoicon06').on('click', function() { 
    $('.video-box').fadeIn(500);
    $('.desaster-vid06').fadeIn(500);
  });

  $('.infoicon07').on('click', function() { 
    $('.video-box').fadeIn(500);
    $('.desaster-vid07').fadeIn(500);
  });

  $('.infoicon08').on('click', function() { 
    $('.video-box').fadeIn(500);
    $('.desaster-vid08').fadeIn(500);
  });


  $('.infoicon09').on('click', function() { 
    $('.video-box').fadeIn(500);
    $('.desaster-vid09').fadeIn(500);
  });

  $('.infoicon10').on('click', function() { 
    $('.video-box').fadeIn(500);
    $('.desaster-vid10').fadeIn(500);
  });

  $('.infoicon11').on('click', function() { 
    $('.video-box').fadeIn(500);
    $('.desaster-vid11').fadeIn(500);
  });

  $('.infoicon12').on('click', function() { 
    $('.video-box').fadeIn(500);
    $('.desaster-vid12').fadeIn(500);
  });

  $('.infoicon13').on('click', function() { 
    $('.video-box').fadeIn(500);
    $('.desaster-vid13').fadeIn(500);
  });

  $('.infoicon14').on('click', function() { 
    $('.video-box').fadeIn(500);
    $('.desaster-vid14').fadeIn(500);
  });



  $('.video-box').on('click', function() { 
    $('.video-box').fadeOut(300);
    $('.desaster-vid01, .desaster-vid02, .desaster-vid03, .desaster-vid04, .desaster-vid05, .desaster-vid06, .desaster-vid07, .desaster-vid08, .desaster-vid09, .desaster-vid10, .desaster-vid11, .desaster-vid12, .desaster-vid13, .desaster-vid14').fadeOut(300);
  });

 


    /** 
     * This part does the "fixed navigation after scroll" functionality
     * We use the jQuery function scroll() to recalculate our variables as the 
     * page is scrolled/
     */
    $(window).scroll(function(){
        var window_top = $(window).scrollTop() + 12; // the "12" should equal the margin-top value for nav.stick
        var div_top = $('#nav-anchor').offset().top;
            if (window_top > div_top) {
                $('nav').addClass('stick');
            } else {
                $('nav').removeClass('stick');
            }
    });

      /**
     * This part handles the highlighting functionality.
     * We use the scroll functionality again, some array creation and 
     * manipulation, class adding and class removing, and conditional testing
     */
    var aChildren = $("nav li").children(); // find the a children of the list items
    var aArray = []; // create the empty aArray
    for (var i=0; i < aChildren.length; i++) {    
        var aChild = aChildren[i];
        var ahref = $(aChild).attr('href');
        aArray.push(ahref);
    } // this for loop fills the aArray with attribute href values

      var $video_crash = $('#startmov');
      var $play_button = $('.playbutton');
      var $video_crash_pos = $video_crash.offset();
      console.log($video_crash_pos);
      var $video_already_played = false;


      $video_crash_src = $video_crash.get(0);


      
window.onresize = function(){
  $video_crash_pos = $video_crash.offset();

}

window.onload = function(){
  $video_crash_pos = $video_crash.offset();

}

$play_button.click(function(){
  $video_crash_src.currentTime = 0;
  $video_crash_src.play();
  $play_button.fadeOut(500);
});

$video_crash.bind("ended", function() {
    $play_button.fadeIn(1000);
    $video_already_played = true;
});


    $(window).scroll(function(){
        var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
        var windowHeight = $(window).height(); // get the height of the window
        var docHeight = $(document).height();


          if($video_crash_pos.top-50 <= windowPos && $video_already_played === false){
            $video_crash_src.play();
          }

          else{

            if($video_already_played === true){
              
            };
          }

        for (var i=0; i < aArray.length; i++) {
            var theID = aArray[i];
            var divPos = $(theID).offset().top; // get the offset of the div from the top of page
            var divHeight = $(theID).height(); // get the height of the div in question
            if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
                $("a[href='" + theID + "']").addClass("nav-active");
            } else {
                $("a[href='" + theID + "']").removeClass("nav-active");
            }
        }

        if(windowPos + windowHeight == docHeight) {
            if (!$("nav li:last-child a").hasClass("nav-active")) {
                var navActiveCurrent = $(".nav-active").attr("href");
                $("a[href='" + navActiveCurrent + "']").removeClass("nav-active");
                $("nav li:last-child a").addClass("nav-active");
            }
        }

      }); 
/*
        if ( $('#crashstart').hasClass( "nav-active" ) ) {
          $('#crashvideo video').attr("autoplay");
        }
*/
      $('#startmov').on(pause, function() {
        // show pause button
        $play_button.fadeIn(1000);
      });

      // Alle internen Links auswählen
    $('a[href*=#]').bind("click", function(event) {
      // Standard Verhalten unterdrücken
      event.preventDefault();
      // Linkziel in Variable schreiben
      var ziel = $(this).attr("href");
      //Scrollen der Seite animieren, body benötigt für Safari
      $('html,body').animate({
        //Zum Ziel scrollen (Variable)
        scrollTop: $(ziel).offset().top
      // Dauer der Animation und Callbackfunktion die nach der Animation aufgerufen wird, sie stellt das Standardverhalten wieder her und ergänzt die URL
      }, 1000 , function (){location.hash = ziel;});
     });
  return false;










}); 
