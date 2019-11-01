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
    $.publish(message.onAddUserSuccessfully);
}
    
    
   // console.log("test",list.name);
   // $("#tName").html(list.name);
   // $("#tEmail").html(list.emailId);
 
 /**  var userList = store.onGetUserFromList();
    console.log("User List Array",userList);
    
    userList.forEach((user)=>{
        var divRow = $("<div>").addClass("row");        
        var divName = $("<div>").html(user.name).addClass("col-md-4");
        var divEmail = $("<div>").html(user.emailId).addClass("col-md-4"); 
        var divBtn = $("<div>").addClass("col-md-4");        
        var delBtn = $("<button>").html("Delete")
        .addClass("btn btn-danger").click(function(){
            alert("delete");            
        });
        divBtn.append(delBtn);
        divRow.append(divName);
        divRow.append(divEmail);     
        divRow.append(divBtn);
        $("#output").append(divRow);
    });
    

} **/

function getUserFromStore()     
{
    return store.getUserForm();
}
