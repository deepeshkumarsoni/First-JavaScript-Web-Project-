/**
 * Controller : Abstraction over DOM.
 */

$(function() {
    $('#addUser').on('click', addUserInUser_List);    //on "click" event calling the function.
});

function addUserInUser_List() {      
    var user = store.getUserForm();  //fetching the data from store.
    addUserInUserList(user);    //storing the data in user list.
    alert("User Added In User List Successfully");  
    $.publish(ADD_USER_SUCCESSFULL,user);    //publishing the message and passing the user object as "user". 
}