/**
 * User Object : Abstraction Over Input Data
 */

$.subscribe(UPDATE_USER,updatedUserForm);  //subscribing the published message.  

function updatedUserForm(topic,user)    //passing the user object in a function.
 {     
    store.updateForm(user);       //calling function and passing value to the userform.
    console.log(ADD_USER_FORM_UPDATED, user);
    $.publish(ADD_USER_FORM_UPDATED,user);    //publishing the message and passing the user object as "user".
 }

