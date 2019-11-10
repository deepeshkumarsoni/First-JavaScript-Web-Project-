
$(function() {
  // $('#delete').on('click', publishDeleteUser);
  $('#userList').delegate('.delete-user', 'click', publishDeleteUser);
});

function publishDeleteUser() {
    const deleteSure = confirm('Are you sure?');
  
    if (!deleteSure) {
      return false;
    }
  
    const userId = $(this).data('userid');
  
    $.publish(DELETE_USER, userId);
  }