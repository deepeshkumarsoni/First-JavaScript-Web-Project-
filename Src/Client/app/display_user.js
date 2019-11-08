/**
 * Displaying User_List Here.
 */

function userList() 
{
    $("#output").empty();
    var userList = store.onGetUserFromList();
    console.log(userList);
   
    userList.forEach((user)=>
    {

        var divRow = $("<div>").addClass("row");        
        var divName = $("<div>").html(user.name).addClass("col-md-4");
        var divEmail = $("<div>").html(user.emailId).addClass("col-md-4"); 
        var divBtn = $("<div>").addClass("col-md-4");        
        var delBtn = $("<button>").html("Delete")
        .addClass("btn btn-danger").attr("id",user.id).click(function()
        {
            deleteUser(this.id);  
        });

        divBtn.append(delBtn);
        divRow.append(divName);
        divRow.append(divEmail);     
        divRow.append(divBtn);
        $("#output").append(divRow);
    
    });
}    

function deleteUser(selectedUserId) 
{
    
    var userList = store.onGetUserFromList();
    userList = jQuery.grep(userList, function(user)
    {
        return user.id != selectedUserId;
    });
}