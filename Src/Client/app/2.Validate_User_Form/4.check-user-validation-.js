

$.subscribe(UPDATED_USER_FORM_IS_VALID, onSuccessfullValidation);

function onSuccessfullValidation(topic,user) 
   {
      $('#addUser').removeAttr('disabled');
      console.log(VALIDATION_SUCCESSFULL);
   }
   
   
$.subscribe(UPDATED_USER_FORM_IS_INVALID, onValidationFailed);

function onValidationFailed() 
{
    $('#addUser').attr('disabled','disabled');
    console.log(VALIDATION_FAILED);
}
