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
    
    addUserInStore : function(form)
    {
        appState.userList = form;
        
    }
 };