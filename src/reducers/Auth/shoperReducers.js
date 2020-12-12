import {

    SHOPER_REGISTER_FAIL,
    SHOPER_REGISTER_REQUEST,
    SHOPER_REGISTER_SUCCESS,


} from "../../constants/Auth/shoperConstants";


function shoperRegistrationReducer(state = {}, action) {
    switch (action.type) {
        case SHOPER_REGISTER_REQUEST:
            return { loading: true };
        case SHOPER_REGISTER_SUCCESS:
            return { loading: false, shoperInfo: action.payload };
        case SHOPER_REGISTER_FAIL:
            return { loading: false, error: action.payload };
        default: return state;
    }
}
export {
        shoperRegistrationReducer
}
