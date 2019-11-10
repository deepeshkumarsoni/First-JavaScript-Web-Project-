
$.subscribe(DELETE_USER, deleteUserFromStore);

function deleteUserFromStore(topic, userId) {
  
  //store.list.delete(userId);
  //alert("User Deleted Successfully From Store");
  store.deleteUser(userId);
  $.publish(DELETE_USER_SUCCESS, userId);  
}