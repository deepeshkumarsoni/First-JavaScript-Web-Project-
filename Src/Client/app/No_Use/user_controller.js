/** All of the DOM Manipulation/Access
 * User_Controller : Abstraction over DOM.
 

$(function () 
{
    $("#userForm").on('keyup', formUpdated), // calling formUpdate function
    $("#addUser").attr('disabled', 'disabled'),
    $.subscribe(message.addUserFormValidatedSuccessfully,
    onSuccessfullValidation),
    $.subscribe(message.addUserFormValidationFailed,onValidationFailed),
    $("#submit").on('click',onAddUserInList),
    $.subscribe(message.onAddUserSuccessfully,onUserAdded)
});

var $name = $('#name');
var $email = $('#email');


function onUserAdded()
{
    console.log("User_Controller_Subscribe :",message.onAddUserSuccessfully);
    alert("User Added Successfully In User List");
    cleartext();
    userList();

}

function cleartext()
{
    $("#name").val("");
    $("#emailId").val("");
    $("#submit").attr('disabled', 'disabled');
}

function onAddUserInList()
{
    console.log("User_Controller_Publish :",message.onAddUser);
    $.publish(message.onAddUser);
}

function onSuccessfullValidation() 
{
    $('#submit').removeAttr('disabled');
    console.log("User_Controller_Subscribe :",message.addUserFormValidatedSuccessfully);
    console.log("Click On Submitt Button To Add User In List");

}

function onValidationFailed() 
{
    $('#submit').attr('disabled','disabled');
    console.log("User_Controller_Subscribe :",message.addUserFormValidationFailed);
    console.log("Becarefull While Entering The Data");

}

function formUpdated(event)
 {
    var user = new UserForm($name.val(), $email.val());

    console.log("onkeyup", user);

    //store.updateForm(user);

    afterUpdate();
}

function afterUpdate()
 {
    console.log('User_Controller_Publish :', message.userFormUpdated);
    $.publish(message.userFormUpdated);
}

*/