/**
 * User Object : Abstraction Over Input Data
 */

$.subscribe(DELETE_USER, deleteUserFromStore);    //subscribe the published message.

function deleteUserFromStore(topic, userId)     //passing the user object in a function.
{  
  store.deleteUser(userId);      //calling function and passing value.
  $.publish(DELETE_USER_SUCCESS, userId);   //publishing the message and passing the user object as "userId".
}