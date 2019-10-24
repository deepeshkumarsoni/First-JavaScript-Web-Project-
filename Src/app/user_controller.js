/** All of the DOM Manipulation/Access */

$(function () {
    $(".form").on('keyup', onFormUpdate);
    $("#submit").attr('disabled', 'disabled'),
    $.subscribe(message.addUserFormValidatedSuccessfully,
        onSuccessfullyValidation),
    $.subscribe(message.addUserFormValidationFailed,
        onValidationFailed)
   
        
});

var $name = $('#name');
var $emailId = $('#emailId');


function onSuccessfullyValidation() {
    $('#submit').removeAttr('disabled');
    console.log("Click Submitt To Add USer");

}

function addUser() {
    store.addUserInStore(user);
    console.log("user controller publish", message.addUserSuccessfully);
}


function onValidationFailed() {
    $('#submit').attr('disable', true);
    console.log("user controller publish",
        message.addUserFormValidationFailed);
}


function onFormUpdate(event) {
    var user = new UserForm($name.val(), $emailId.val());

    console.log("onkeyup", user);

    store.updateForm(user);

    afterUpdate();
}

function afterUpdate() {
    console.log('user_controller Publish', message.addUserFormUpdated);
    $.publish(message.addUserFormUpdated);
}