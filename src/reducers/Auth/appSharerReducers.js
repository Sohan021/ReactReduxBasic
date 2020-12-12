import {
    APPSHARER_REGISTER_FAIL,
    APPSHARER_REGISTER_REQUEST,
    APPSHARER_REGISTER_SUCCESS,

    APPSHARER_PROFILE_UPDATE_FAIL,
    APPSHARER_PROFILE_UPDATE_REQUEST,
    APPSHARER_PROFILE_UPDATE_SUCCESS,

    APPSHARER_PROFILE_DETAILS_SUCCESS,
    APPSHARER_PROFILE_DETAILS_FAIL,

    APPSHARER_DOWNLINE_LIST_REQUEST,
    APPSHARER_DOWNLINE_LIST_SUCCESS,
    APPSHARER_DOWNLINE_LIST_FAIL,
} from "../../constants/Auth/appSharerConstants";

let initialState = {
    userInfo: false

}


function appSharerUpdateReducer(state = initialState, action) {
    switch (action.type) {

        case APPSHARER_PROFILE_UPDATE_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case APPSHARER_PROFILE_UPDATE_FAIL:
            return { loading: false, error: action.payload };
        default: return state;
    }
}

function appSharerProfileDetailsReducer(state = { sharer: {} }, action) {

    switch (action.type) {
        case APPSHARER_PROFILE_DETAILS_SUCCESS:
            return { loading: false, sharer: action.payload };
        case APPSHARER_PROFILE_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}
function appSharerAddDownlineReducer(state = {}, action) {
    switch (action.type) {
        case APPSHARER_REGISTER_REQUEST:
            return { loading: true };
        case APPSHARER_REGISTER_SUCCESS:
            return { loading: false, appSharerInfo: action.payload };
        case APPSHARER_REGISTER_FAIL:
            return { loading: false, error: action.payload };
        default: return state;
    }
}

// function appSharerProfileDetailsReducer(state = {}, action) {
//     switch (action.type) {
//         case APPSHARER_PROFILE_DETAILS_SUCCESS:
//             return { loading: false, userInfo: action.payload };
//         case APPSHARER_PROFILE_DETAILS_FAIL:
//             return { loading: false, error: action.payload };
//         default: return state;
//     }
// }

function appSharerGetFirstDownlineListReducer(state = { downlines: [] }, action) {
    switch (action.type) {
        case APPSHARER_DOWNLINE_LIST_REQUEST:
            return { loading: true };
        case APPSHARER_DOWNLINE_LIST_SUCCESS:
            return { loading: false, downlines: action.payload };
        case APPSHARER_DOWNLINE_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}


export {
    appSharerAddDownlineReducer,
    appSharerUpdateReducer,
    appSharerProfileDetailsReducer,
    appSharerGetFirstDownlineListReducer
}
