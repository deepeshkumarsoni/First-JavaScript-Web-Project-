/**
 * Add User In Store List.
 */

$.subscribe(message.onAddUser,onAddUserInStoreList);

function onAddUserInStoreList()
{
    console.log("Add_User_Subscribe :",message.onAddUser);

    var user = getUserFromStore();
    
    store.onAddUserInUser_List(user);
    console.log("onClick :",user);
    
    console.log('Add_User_Publish :',message.onAddUserSuccessfully);

    $.publish("Add_User_Publish :",message.onAddUserSuccessfully);
}

function getUserFromStore()     
{
    return store.getUserForm();
}
