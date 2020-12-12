import {
    LOGOUT,
    SIGNIN_FAIL,
    SIGNIN_REQUEST,
    SIGNIN_SUCCESS
} from "../../constants/Auth/signInConstants";

function SigninReducer(state = {}, action) {
    
    switch (action.type) {
        case SIGNIN_REQUEST:
            return { loading: true };
        case SIGNIN_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case SIGNIN_FAIL:
            return { loading: false, error: action.payload };
        case LOGOUT:
            return {};
        default: return state;
    }
}

export { SigninReducer }