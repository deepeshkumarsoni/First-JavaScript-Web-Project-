
$.subscribe(UPDATE_USER,updatedUserForm);

function updatedUserForm(user)
 {     
    store.updateForm(user);
    console.log(ADD_USER_FORM_UPDATED, user);
    $.publish(ADD_USER_FORM_UPDATED,user);    
 }

