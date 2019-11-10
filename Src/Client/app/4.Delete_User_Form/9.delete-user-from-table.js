/**
 * Controller : Abstraction over DOM.
 */

$.subscribe(DELETE_USER_SUCCESS, deleteUserFromTable);   //subscribe the published message.

function deleteUserFromTable(message,userId)    //passing the user object in a function.
{
    $('#userList tbody')     // go to body of table
    .find(`tr[data-userid=${userId}]`)     // find row by userid
    .remove();    // remove entry
    alert("User Deleted From Table Successfully");
    $.publish(SHOW_INFO, `User Deleted From Table Successfully!`);  //publish the message
}