
async function authReducer(state, action){
    switch (action.type) {
        case "AUTHENTICATE":
            return { state : action.payload }
        case "AUTHORISE":
            return state;
        default:
            break;
    }
};

export default authReducer;
