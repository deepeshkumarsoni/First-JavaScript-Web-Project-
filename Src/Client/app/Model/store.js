/**
 * It Will Keep User State.
 */

var initialState =
{
    userform: {},
    userList: []
};

var appState = initialState;

var store =
{
    updateForm: function (form) {
        appState.userform = form;
    },

    getUserForm: function () {
        return appState.userform;
    },

    addUserInUser_List: function (form) {
        appState.userList.push(form);

    },

    onGetUserFromList: function () {
        return appState.userList;
    },
    deleteUser: function (userId) {
        // original list [1,2,3]
        // orignial list = [1,2]; // after filtering
        appState.userList = appState
            .userList
            //.filter(function (u) { u.userId !== userId });
            .filter((user) => user.userId !== userId);

        return appState.userList;
    }
};