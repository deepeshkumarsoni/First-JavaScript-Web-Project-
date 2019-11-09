
$.subscribe(DELETE_USER, deleteUserFromStore);

function deleteUserFromStore(message, userId) {
  
  store.list.delete(userId);
  alert("User Deleted Successfully From Store");
  $.publish(DELETE_USER_SUCCESS, {userId});
  
}