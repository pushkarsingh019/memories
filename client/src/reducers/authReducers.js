
function authReducer(userInfo = {}, action){
    switch (action.type) {
        case "AUTHENTICATE":
            return {userInfo : action.payload}
        case "AUTHORISE":
            return userInfo
        default:
            return userInfo;
    }
};

export default authReducer;
