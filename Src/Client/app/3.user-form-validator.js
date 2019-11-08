/**
 * All Validations Done Here.
 * User_Validator : Abstraction over 
 */

$.subscribe(ADD_USER_FORM_UPDATED,validateUpdatedForm);

function validateUpdatedForm(user)
 {
     var valid = isUpdatedFormValid(user);  // check whether user name & email are valid or not.
     checkIsFormValid(valid);   // check whether the Form is valid or not.
   
     //console.log('User_Validator_Subscribe :', message.addUserFormUpdated);
     //var form = getUserFromStore();  // Give the form from the store
 }

function checkIsFormValid(valid)
{
    if (valid){
        console.log(UPDATED_USER_FORM_IS_VALID);
        $.publish(UPDATED_USER_FORM_IS_VALID);
        // console.log('User_Validator_Publish :',
        // message.addUserFormValidatedSuccessfully);
        // $.publish(message.addUserFormValidatedSuccessfully);
    }

    else {
        console.log(UPDATED_USER_FORM_IS_INVALID);
        $.publish(UPDATED_USER_FORM_IS_INVALID);       
        // console.log('User_Validator_Publish :',
        // message.addUserFormValidationFailed);        
        // $.publish(message.addUserFormValidationFailed);
    }
}

function isUpdatedFormValid(user)
 {
     var isUpdatedFormValid = isNameIsValid(user.name) && 
     isEmailIsValid(user.email);
     return isUpdatedFormValid;
 }

function isEmailValid(email) 
 {
     if (
         email.trim() !== '' &&
         email.indexOf('@') > -1 &&
         email.indexOf('.') > -1
       )
       {
           return true;
       }
    return 'Email is invalid';
 }
  
  function isNameValid(name) {
    if (name.trim() !== '' && name.length > 4) {
      return true;
    }
    return 'Name is invalid';
  }
// function isNameIsValid(name)
// {
//     return !(name == null || name.trim() === '');  
// }

// function isEmailIsValid(emailId)
// {
//     return !(emailId == null || emailId.trim() === ''); 
// }