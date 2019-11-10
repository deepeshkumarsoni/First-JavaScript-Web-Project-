/**
 * Controller : Abstraction over DOM.
 */

$.subscribe(ADD_USER_SUCCESSFULL,showUserInTable);   //subscribing the published message.

function showUserInTable(topic,user) {     //passing the user object in a function.
    // get the body of table
    
    const $tableBody = $('#userList').find('tbody');  //fetching table from DOM.
  
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
  
    $.publish(SHOW_SUCCESS,`Congrats ${user.name} added successfully!`);   //publish the message on console. 
}