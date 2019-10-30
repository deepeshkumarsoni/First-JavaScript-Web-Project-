/** All of the DOM Manipulation/Access */

$(function () 
{
    $(".form").on('keyup', onFormUpdate),
    $("#submit").attr('disabled', 'disabled'),
    $.subscribe(message.addUserFormValidatedSuccessfully,
    onSuccessfullValidation),
    $.subscribe(message.addUserFormValidationFailed,onValidationFailed),
    $("#submit").on('click',onAddUserInList),
    $.subscribe(message.onAddUserSuccessfully,user_Added)
});

var $name = $('#name');
var $emailId = $('#emailId');

function user_Added()
{
    console.log("Add_User_Subscribe :",message.onAddUserSuccessfully);
    alert("User Added Successfully In User List");
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

function onFormUpdate(event)
 {
    var user = new UserForm($name.val(), $emailId.val());

    console.log("onkeyup", user);

    store.updateForm(user);

    afterUpdate();
}

function afterUpdate()
 {
    console.log('User_Controller_Publish :', message.addUserFormUpdated);
    $.publish(message.addUserFormUpdated);
}