
$(function() {
    $('#addUser').on('click', addUserInUser_List);
});

function addUserInUser_List() {
    var user = store.getUserForm();
    addUserInUserList(user);  
    alert("User Added In User List Successfully");  
    $.publish(ADD_USER_SUCCESSFULL,user); 
}