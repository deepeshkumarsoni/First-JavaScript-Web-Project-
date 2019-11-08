/** All of the DOM Manipulation/Access
 * User_Controller : Abstraction over DOM.
 */

$(function() {
    $('#userForm').on('keyup', addUserInUserList),
    $("#addUser").attr('disabled', 'disabled')
  });
  
function addUserInUserList()
 {
    const name = $('#name').val();
    const email = $('#email').val();
    const user = new UserForm(name, email);
    console.log(ADD_USER ,':', user);
    $.publish(UPDATE_USER, user);
 }