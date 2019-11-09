
$.subscribe(UPDATED_USER_FORM_IS_VALID, onSuccessfullValidation);

function onSuccessfullValidation() 
   {
       $('#addUser').removeAttr('disabled');
     //  console.log("User_Controller_Subscribe :",message.addUserFormValidatedSuccessfully);
      console.log(VALIDATION_SUCCESSFULL);
      alert("Click On Submitt Button To Add User In User List");
        
   }
   //  var user = store.getUserForm();
   //  store.addUserInUser_List(user);
   //  $publish(ADD_USER_SUCCESSFULL);
 
 $.subscribe(UPDATED_USER_FORM_IS_INVALID, onValidationFailed);

 function onValidationFailed() 
{
    $('#addUser').attr('disabled','disabled');
 // console.log("User_Controller_Subscribe :",message.addUserFormValidationFailed);
    console.log(VALIDATION_FAILED);
    alert("Becarefull While Entering The Data");
}
