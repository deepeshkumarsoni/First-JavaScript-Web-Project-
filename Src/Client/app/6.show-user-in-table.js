
$.subscribe(ADD_USER_SUCCESSFULL,showUserInTable);

function showUserInTable() {
    // get the body of table
    var user = store.onGetUserFromList();
    const $tableBody = $('#userList').find('tbody');
  
    // create a tr
    const $tr = $(
      `<tr data-userid="${user.id}">
         <th scope="row"> ${user.id} </th>  
         <td> ${user.name} </td> 
         <td> ${user.email} </td> 
         <td>   
            <button type="button" class="btn btn-danger delete-user" data-userid="${user.id}">
              <span class="glyphicon glyphicon-trash" ></span> Trash 
            </button> 
        </td>
      </tr>`
    );
  
    // append tr
    $tableBody.append($tr);
  
    // clear input
    $('#name,#email').val('');
  
    $.publish(SHOW_SUCCESS, `Congrats ${user.name} added successfully!`);
}