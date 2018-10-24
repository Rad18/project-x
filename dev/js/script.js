  
$( document ).ready(function() {

$ ("#hidden_iframe").load(function(){

  if(submitted){
   
     $('#myModal2').modal('show');
     $('#ajaxform').trigger( 'reset' );
     submitted=false; 
     ga('send', 'event', 'Заявка', 'Anex');
  }
 
});

$ ("#hidden_iframe2").load(function(){

  if(submitted){
   
     $('#myModal2').modal('show');
     $('#ajaxform2').trigger( 'reset' );
     submitted=false; 
     ga('send', 'event', 'Реєстрація', 'Anex');
  }
 
});


$ ("#hidden_iframe3").load(function(){

  if(submitted){
   
     $('#myModal2').modal('show');
     $('#ajaxform3').trigger( 'reset' );
     submitted=false; 
     ga('send', 'event', 'Реєстрація', 'Anex');
  }
 
});

$ ("#hidden_iframe4").load(function(){

  if(submitted){
   
     $('#myModal2').modal('show');
     $('#ajaxform4').trigger( 'reset' );
     submitted=false; 
     ga('send', 'event', 'Реєстрація', 'Anex');
  }
 
});


  });

 
 

 


