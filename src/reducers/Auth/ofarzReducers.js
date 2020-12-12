import {
    OFARZ_REGISTER_FAIL,
    OFARZ_REGISTER_REQUEST,
    OFARZ_REGISTER_SUCCESS,
} from "../../constants/Auth/ofarzConstants";

function ofarzAddReducer(state = {}, action) {
    switch (action.type) {
        case OFARZ_REGISTER_REQUEST:
            return { loading: true };
        case OFARZ_REGISTER_SUCCESS:
            return { loading: false, karrotInfo: action.payload };
        case OFARZ_REGISTER_FAIL:
            return { loading: false, error: action.payload };
        default: return state;
    }
}
export {
    ofarzAddReducer,
}
