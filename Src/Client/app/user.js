/**
 * It wil store user status state
 */

function UserForm(name,email)
{
    this.id = Date.now().toString();    //randonNo();
    this.name = name;
    this.emailId = email;                                                
}

function User(name,email)
{
    this.id = Date.now().toString();        
    this.name = name;
    this.emailId = email;
}

// function randonNo() {
//     return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
//       var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
//       return v.toString(16);
//     });
//   }
