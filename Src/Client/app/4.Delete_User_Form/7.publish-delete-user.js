/**
 * Controller : Abstraction over DOM.
 */

$(function() {
  $('#userList').delegate('.delete-user', 'click', publishDeleteUser); //on "click" event calling the function.

  // Another way "$('#delete').on('click', publishDeleteUser);""
});

function publishDeleteUser() {
    const deleteSure = confirm('Are you sure?');
  
    if (!deleteSure) {          //condition checking.
      return false;
    }
  
    const userId = $(this).data('userid');
  
    $.publish(DELETE_USER, userId);  //publishing the message and passing the user object as "userId".
  }