/**
 * Displaying User_List Here.
 */

var display = 
{    
    user_Display : function()    
    {
        var userList = store.onGetUserFromList();
        console.log("List :",userList);
    }

};