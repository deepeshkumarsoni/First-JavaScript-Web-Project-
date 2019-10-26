/** All of the DOM Manipulation/Access */

$(function () 
{
    $(".form").on('keyup', onFormUpdate);
    $("#submit").attr('disabled', 'disabled'),
    $.subscribe(message.addUserFormValidatedSuccessfully,
    onSuccessfullValidation),
    $.subscribe(message.addUserFormValidationFailed,onValidationFailed)
});

var $name = $('#name');
var $emailId = $('#emailId');


function onSuccessfullValidation() 
{
    $('#submit').removeAttr('disabled');
    console.log("User_Controller_Subscribe :",message.addUserFormValidatedSuccessfully);
    console.log("Click Submitt To Add USer");

}

function addUser() 
{
    store.addUserInStore(user);
    console.log("User_Controller_Publish :", message.addUserSuccessfully);
}


function onValidationFailed() 
{
    $('#submit').attr('disable', true);
    console.log("User_Controller_Publish :",message.addUserFormValidationFailed);
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