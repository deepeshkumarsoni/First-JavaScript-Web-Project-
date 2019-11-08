$(function() {
    $('#addUser').on('click', addUserInUserList);
});

function addUserInUserList() {
    var user = store.getUserForm();
    addUserInUser_List(user);  
    alert("User Added In User List Successfully");  
    $.publish(ADD_USER_SUCCESSFULL,user);
    
}