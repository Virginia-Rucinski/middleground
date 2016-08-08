$(document).ready(function(){
 
 $('.accordion-control').on('click', function(){
  $('#header').animate({height: "60vh"})
    $('.accordion-panel').toggle('slow', function(){ $('.accordion-panel').addClass('.show');
    });
  }); 

 $('.accordion-close').click(function(){
     $('.accordion-panel').slideUp('slow', function(){
      $('#header').animate({height: "30vh"})  
      $('.accordion-panel').addClass('.hide')
    });  
  }); 

}); //document end