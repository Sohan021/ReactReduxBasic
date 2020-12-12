import {
    PAYMENTTYPE_DELETE_FAIL,
    PAYMENTTYPE_DELETE_REQUEST,
    PAYMENTTYPE_DELETE_SUCCESS,
    PAYMENTTYPE_DETAILS_FAIL,
    PAYMENTTYPE_DETAILS_SUCCESS,
    PAYMENTTYPE_LIST_FAIL,
    PAYMENTTYPE_LIST_REQUEST,
    PAYMENTTYPE_LIST_SUCCESS,
    PAYMENTTYPE_SAVE_FAIL,
    PAYMENTTYPE_SAVE_REQUEST,
    PAYMENTTYPE_SAVE_SUCCESS,
    PAYMENTTYPE_UPDATE_FAIL,
    PAYMENTTYPE_UPDATE_SUCCESS
} from '../../constants/Fund/paymentTypeConstants';

let initialState = {
    paymentType: false
}

function paymentTypeListReducer(state = { paymentTypes: [] }, action) {

    switch (action.type) {
        case PAYMENTTYPE_LIST_REQUEST:
            return { loading: true };
        case PAYMENTTYPE_LIST_SUCCESS:
            return { loading: false, paymentTypes: action.payload };
        case PAYMENTTYPE_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

function paymentTypeDetailsReducer(state = { paymentType: {} }, action) {

    switch (action.type) {
        case PAYMENTTYPE_DETAILS_SUCCESS:
            return { loading: false, paymentType: action.payload };
        case PAYMENTTYPE_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

function paymentTypeDeleteReducer(state = { paymentType: {} }, action) {

    switch (action.type) {
        case PAYMENTTYPE_DELETE_REQUEST:
            return { loading: true };
        case PAYMENTTYPE_DELETE_SUCCESS:
            return { loading: false, paymentType: action.payload, success: true };
        case PAYMENTTYPE_DELETE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

function paymentTypeSaveReducer(state = initialState, action) {

    switch (action.type) {
        case PAYMENTTYPE_SAVE_REQUEST:
            return { loading: true };
        case PAYMENTTYPE_SAVE_SUCCESS:
            return { loading: false, success: true, paymentType: action.payload };
        case PAYMENTTYPE_SAVE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

function paymentTypeUpdateReducer(state = initialState, action) {

    switch (action.type) {
        case PAYMENTTYPE_UPDATE_SUCCESS:
            return { loading: false, success: true, paymentType: action.payload };
        case PAYMENTTYPE_UPDATE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

export { paymentTypeListReducer, paymentTypeDetailsReducer, paymentTypeDeleteReducer, paymentTypeUpdateReducer, paymentTypeSaveReducer }