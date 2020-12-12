
import {

    KARROT_REGISTER_FAIL,
    KARROT_REGISTER_REQUEST,
    KARROT_REGISTER_SUCCESS,

    KARROT_PROFILE_UPDATE_FAIL,
    KARROT_PROFILE_UPDATE_REQUEST,
    KARROT_PROFILE_UPDATE_SUCCESS,


    KARROT_PROFILE_DETAILS_SUCCESS,
    KARROT_PROFILE_DETAILS_FAIL
} from "../../constants/Auth/karrotConstants";


function karrotProfileDetailsReducer(state = {}, action) {
    switch (action.type) {
        case KARROT_PROFILE_DETAILS_SUCCESS:
            return { loading: false, adminInfo: action.payload };
        case KARROT_PROFILE_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default: return state;
    }
}

function karrotUpdateReducer(state = {}, action) {
    switch (action.type) {
        case KARROT_PROFILE_UPDATE_REQUEST:
            return { loading: true };
        case KARROT_PROFILE_UPDATE_SUCCESS:
            return { loading: false, karrotInfo: action.payload };
        case KARROT_PROFILE_UPDATE_FAIL:
            return { loading: false, error: action.payload };
        default: return state;
    }
}

function karrotAddReducer(state = {}, action) {
    switch (action.type) {
        case KARROT_REGISTER_REQUEST:
            return { loading: true };
        case KARROT_REGISTER_SUCCESS:
            return { loading: false, karrotInfo: action.payload };
        case KARROT_REGISTER_FAIL:
            return { loading: false, error: action.payload };
        default: return state;
    }
}
export {
    karrotProfileDetailsReducer,
    karrotAddReducer,
    karrotUpdateReducer
}
