import {

    CEO_REGISTER_FAIL,
    CEO_REGISTER_REQUEST,
    CEO_REGISTER_SUCCESS,

    CEO_PROFILE_UPDATE_FAIL,
    CEO_PROFILE_UPDATE_REQUEST,
    CEO_PROFILE_UPDATE_SUCCESS,

    CEO_PROFILE_DETAILS_SUCCESS,
    CEO_PROFILE_DETAILS_FAIL
} from "../../constants/Auth/ceoConstants";


function ceoProfileDetailsReducer(state = {}, action) {
    switch (action.type) {
        case CEO_PROFILE_DETAILS_SUCCESS:
            return { loading: false, adminInfo: action.payload };
        case CEO_PROFILE_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default: return state;
    }
}

function ceoUpdateReducer(state = {}, action) {
    switch (action.type) {
        case CEO_PROFILE_UPDATE_REQUEST:
            return { loading: true };
        case CEO_PROFILE_UPDATE_SUCCESS:
            return { loading: false, ceoInfo: action.payload };
        case CEO_PROFILE_UPDATE_FAIL:
            return { loading: false, error: action.payload };
        default: return state;
    }
}

function ceoAddReducer(state = {}, action) {
    switch (action.type) {
        case CEO_REGISTER_REQUEST:
            return { loading: true };
        case CEO_REGISTER_SUCCESS:
            return { loading: false, ceoInfo: action.payload };
        case CEO_REGISTER_FAIL:
            return { loading: false, error: action.payload };
        default: return state;
    }
}
export {
    ceoProfileDetailsReducer,
    ceoAddReducer,
    ceoUpdateReducer
}
