/**
 * User_Validator : Abstraction over Business Logics.
 */

$.subscribe(ADD_USER_FORM_UPDATED, validateUpdatedForm);  //subscribing the published message.

function validateUpdatedForm(topic,user) {      //passing the user object in a function.
    
    var valid = isUpdatedFormValid(user);   // check whether user name & email are valid or not.
    checkIsFormValid(valid);    // check whether the Form is valid or not.
}

function checkIsFormValid(valid) {      //function for checking form is valid or not.

    if (valid) {
        console.log(UPDATED_USER_FORM_IS_VALID);
        $.publish(UPDATED_USER_FORM_IS_VALID);       
    }

    else {
        console.log(UPDATED_USER_FORM_IS_INVALID);
        $.publish(UPDATED_USER_FORM_IS_INVALID);        
    }
}

function isUpdatedFormValid(user) {   //function for checking name & email are valid or not.
    var isUpdatedFormValid = isNameIsValid(user.name) &&
    isEmailIsValid(user.email);
    return isUpdatedFormValid;
}

function isEmailIsValid(email)    //function for checking email is valid or not.
 {
     if (
         email.trim() !== '' &&          //logic for checking email.
         email.indexOf('@') > -1 &&      
         email.indexOf('.') > -1
       )
       {
           return true;
       }
    return false;
 }

function isNameIsValid(name)    //function for checking name is valid or not.
{
    if (name.trim() !== '' && name.length > 4) {   //logic for checking name.        
      return true;
    }
    return false;4
}
