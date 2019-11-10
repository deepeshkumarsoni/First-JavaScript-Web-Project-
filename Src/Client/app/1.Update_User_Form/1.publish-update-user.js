/**
 * Controller : Abstraction over DOM.
 */

$(function() {
    $('#userForm').on('keyup', addUserInUserList), //on "keyup" event calling the function.
    $("#addUser").attr('disabled', 'disabled')    //disabling the submit button.
  });
  
function addUserInUserList()
 {
  // var $name = $('#name');
    const name = $('#name').val();      //fetching the value from DOM.
    const email = $('#email').val();    //fetching the value from DOM.
    const user = new UserForm(name,email);
    console.log(UPDATE_USER ,':', user);   //publishing message on console.
    $.publish(UPDATE_USER, user);     //publishing the message and passing the user object as "user".    
 }
