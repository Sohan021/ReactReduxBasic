import {
    PRODUCTTYPE_DELETE_FAIL,
    PRODUCTTYPE_DELETE_REQUEST,
    PRODUCTTYPE_DELETE_SUCCESS,

    PRODUCTTYPE_DETAILS_FAIL,
    PRODUCTTYPE_DETAILS_SUCCESS,

    PRODUCTTYPE_LIST_FAIL,
    PRODUCTTYPE_LIST_REQUEST,
    PRODUCTTYPE_LIST_SUCCESS,

    PRODUCTTYPE_SAVE_FAIL,
    PRODUCTTYPE_SAVE_REQUEST,
    PRODUCTTYPE_SAVE_SUCCESS,

    PRODUCTTYPE_UPDATE_FAIL,
    PRODUCTTYPE_UPDATE_SUCCESS
} from "../../constants/Regular/productTypeConstants";

let initialState = {
    productType: false

}

function productTypeListReducer(state = { productTypes: [] }, action) {

    switch (action.type) {
        case PRODUCTTYPE_LIST_REQUEST:
            return { loading: true };
        case PRODUCTTYPE_LIST_SUCCESS:
            return { loading: false, productTypes: action.payload };
        case PRODUCTTYPE_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

function productTypeDetailsReducer(state = { productType: false }, action) {

    switch (action.type) {
        case PRODUCTTYPE_DETAILS_SUCCESS:
            return { loading: false, productType: action.payload };
        case PRODUCTTYPE_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}


function productTypeDeleteReducer(state = { productType: {} }, action) {

    switch (action.type) {
        case PRODUCTTYPE_DELETE_REQUEST:
            return { loading: true };
        case PRODUCTTYPE_DELETE_SUCCESS:
            return { loading: false, productType: action.payload, success: true };
        case PRODUCTTYPE_DELETE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}


function productTypeSaveReducer(state = initialState, action) {

    switch (action.type) {
        case PRODUCTTYPE_SAVE_REQUEST:
            return { loading: true };
        case PRODUCTTYPE_SAVE_SUCCESS:
            return { loading: false, success: true, productType: action.payload };
        case PRODUCTTYPE_SAVE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}


function productTypeUpdateReducer(state = initialState, action) {

    switch (action.type) {

        case PRODUCTTYPE_UPDATE_SUCCESS:
            return { loading: false, success: true, productType: action.payload };
        case PRODUCTTYPE_UPDATE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

export { productTypeListReducer, productTypeDetailsReducer, productTypeDeleteReducer, productTypeUpdateReducer, productTypeSaveReducer }