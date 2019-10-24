/**
 * All User Validations.
 */

$.subscribe(message.addUserFormUpdated,validate);

function validate()
{
  console.log('user-validator received: ', message.addUserFormUpdated);
   
  var form = getUserFromStore();  // Give the form from the store

  var valid = isFormValid(form);  // Give whether the input is valid or not
    
  checkIsFormValid(valid);    // Give whether the Form is valid or not and also Publish the Message     
}

function getUserFromStore()     
{
    return store.getUserForm();
}

function checkIsFormValid(valid)
{
    if (valid){

        console.log('User Validator Recieved',
        message.addUserFormValidatedSuccessfully);

        $.publish(message.addUserFormValidatedSuccessfully);
    }
    else{
        
        console.log('User Validator Recieved',
        message.addUserFormValidationFailed);
        
        $.publish(message.addUserFormValidationFailed);
    }
}

function isFormValid(form)
{
    var isFormValid = isNameIsValid(form.name) && 
    isEmailIsValid(form.emailId);
    return isFormValid;
}

function isNameIsValid(name)
{
    return !(name == null || name.trim() === '');  
}

function isEmailIsValid(emailId)
{
    return !(emailId == null || emailId.trim() === ''); 
}