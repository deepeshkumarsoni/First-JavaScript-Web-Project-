
$.subscribe(DELETE_USER_SUCCESS, deleteUserFromTable);

function deleteUserFromTable(message,userId)
{
    $('#userList tbody') // go to body of table
    .find(`tr[data-userid=${userId}]`) // find row by userid
    .remove(); // remove entry
    alert("User Deleted From Table Successfully");
    $.publish(SHOW_INFO, `User Deleted From Table Successfully!`);
}