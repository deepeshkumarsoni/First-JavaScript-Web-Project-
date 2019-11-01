/**
 * It Will Keep User State.
 */

 var initialState = 
 {
     userform : {},
     userList : []
 };

 var appState = initialState;

 var store = 
 { 
    updateForm : function(form) 
    {
         appState.userform = form;
    },

    getUserForm : function()
    {
        return appState.userform; 
    },
    
    onAddUserInUser_List : function(form)
    {
        appState.userList.push(form);
                
    },

    onGetUserFromList : function()        
    {
        return appState.userList;
    }
};