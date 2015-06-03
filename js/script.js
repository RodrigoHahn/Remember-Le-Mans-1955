$( document ).ready( function() {


  $("#intro video").hide();

  $("#intro video").delay(300).fadeIn(7000);



  $("#intro h1").hide();

  $("#intro h1").delay(500).fadeIn(3000);


  $("#intro h2").hide();

  $("#intro h2").delay(300).fadeIn(1500);

  $("#intro h2").delay(500).fadeOut(1500);





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
