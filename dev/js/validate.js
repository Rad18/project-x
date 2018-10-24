$(document).ready(function() {
			
	  $('.form')
	  .bootstrapValidator({
	      feedbackIcons: {
	          valid: 'glyphicon glyphicon-ok',
	          invalid: 'glyphicon glyphicon-remove',
	          validating: 'glyphicon glyphicon-refresh'
	      },
	      fields: {
	      	'entry.1813816602': {
	           
	            validators: {
	                notEmpty: {
	                      // message: 'The username is required and can\'t be empty'
	                  },
	                  stringLength: {
	                      min: 3,
	                      max: 30,
	                      // message: 'The username must be more than 6 and less than 30 characters long'
	                  }
	            }
	        },
	         'entry.1871595322': {
	              
	              validators: {
	                  notEmpty: {
	                      // message: 'The password is required and can\'t be empty'
	                  },
	                  emailAddress: {
	                      // message: 'The input is not a valid email address'
	                  }
	              }
	          },
	        
	          'entry.1196908696': {
	          	  
	              validators: {
	                  notEmpty: {
	                      // message: 'The email address is required and can\'t be empty'
	                  },
	                   regexp: {
	                      regexp: /^[0-9\s\-()+\.]+$/,
	                      message: 'Пожалуйста, введите правильный номер телефона'
	                  },
	              }
	          },

	      }
	  })
 


	});

  //    $(function(){                       
  //    $('#send22').click(function(){
  //         $('.modal').hide('slow');
  //         $('.modal-backdrop').hide('slow');
  //     });
  // });

  //  $(function(){                       
  //    $('#send1').click(function(){
  //         $('.modal').hide('slow');
  //         $('.modal-backdrop').hide('slow');
  //     });
  // });

   $ ("#hidden_iframe3").load(function(){

  if(submitted){
   
     $('#myModal2').modal('show');
     $('#myModal34').hide('slow');
     $('.modal-backdrop.in').hide('slow');
     $('#ajaxform3').trigger( 'reset' );
    submitted=false; 
  }
 
});

   $ ("#hidden_iframe2").load(function(){

  if(submitted){
   
     $('#myModal2').modal('show');
     $('#myModal').hide('slow');
     $('.modal-backdrop.in').hide('slow');
     $('#ajaxform2').trigger( 'reset' );
    submitted=false; 
  }
 
});

   $ ("#hidden_iframe").load(function(){

  if(submitted){
   
     $('#myModal2').modal('show');
     $('#ajaxform').trigger( 'reset' );
    submitted=false; 
  }
 
});

    $ ("#hidden_iframe4").load(function(){

  if(submitted){
   
     $('#myModal2').modal('show');
     $('#ajaxform4').trigger( 'reset' );
    submitted=false; 
  }
 
});