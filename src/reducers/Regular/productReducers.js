import {
    PRODUCT_DELETE_AGENT_FAIL,
    PRODUCT_DELETE_AGENT_REQUEST,
    PRODUCT_DELETE_AGENT_SUCCESS,
    PRODUCT_DELETE_FAIL,
    PRODUCT_DELETE_REQUEST,
    PRODUCT_DELETE_SUCCESS,

    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_SUCCESS,

    PRODUCT_GALERY_FOR_AGENT_AND_CUSTOMER_FAIL,

    PRODUCT_GALERY_FOR_AGENT_AND_CUSTOMER_REQUEST,

    PRODUCT_GALERY_FOR_AGENT_AND_CUSTOMER_SUCCESS,

    PRODUCT_LIST_FAIL,
    PRODUCT_LIST_FOR_APPSHARER_AND_SHOPER_FAIL,
    PRODUCT_LIST_FOR_APPSHARER_AND_SHOPER_REQUEST,
    PRODUCT_LIST_FOR_APPSHARER_AND_SHOPER_SUCCESS,
    PRODUCT_LIST_PRODUCTTYPE_CATEGORY_AGENT_FAIL,
    PRODUCT_LIST_PRODUCTTYPE_CATEGORY_AGENT_REQUEST,
    PRODUCT_LIST_PRODUCTTYPE_CATEGORY_AGENT_SUCCESS,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,

    PRODUCT_SAVE_FAIL,
    PRODUCT_SAVE_REQUEST,
    PRODUCT_SAVE_SUCCESS,

    PRODUCT_UPDATE_FAIL,
    PRODUCT_UPDATE_SUCCESS
} from "../../constants/Regular/productConstants";

let initialState = {
    product: false

}

function productListReducer(state = { products: [] }, action) {

    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return { loading: true };
        case PRODUCT_LIST_SUCCESS:
            return { loading: false, products: action.payload };
        case PRODUCT_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}


function productLisForAgentAndCustomerReducer(state = { products: [] }, action) {

    switch (action.type) {
        case PRODUCT_GALERY_FOR_AGENT_AND_CUSTOMER_REQUEST:
            return { loading: true };
        case PRODUCT_GALERY_FOR_AGENT_AND_CUSTOMER_SUCCESS:
            return { loading: false, products: action.payload };
        case PRODUCT_GALERY_FOR_AGENT_AND_CUSTOMER_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}


function productListByProductTypeCategoryReducer(state = { products: [] }, action) {

    switch (action.type) {
        case PRODUCT_LIST_PRODUCTTYPE_CATEGORY_AGENT_REQUEST:
            return { loading: true };
        case PRODUCT_LIST_PRODUCTTYPE_CATEGORY_AGENT_SUCCESS:
            return { loading: false, products: action.payload };
        case PRODUCT_LIST_PRODUCTTYPE_CATEGORY_AGENT_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

function productListForAppSharerAndShoperReducer(state = { products: [] }, action) {

    switch (action.type) {
        case PRODUCT_LIST_FOR_APPSHARER_AND_SHOPER_REQUEST:
            return { loading: true };
        case PRODUCT_LIST_FOR_APPSHARER_AND_SHOPER_SUCCESS:
            return { loading: false, products: action.payload };
        case PRODUCT_LIST_FOR_APPSHARER_AND_SHOPER_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}


function productDetailsReducer(state = { product: false }, action) {

    switch (action.type) {
        case PRODUCT_DETAILS_SUCCESS:
            return { loading: false, product: action.payload };
        case PRODUCT_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}


function productDeleteReducer(state = { product: {} }, action) {

    switch (action.type) {
        case PRODUCT_DELETE_REQUEST:
            return { loading: true };
        case PRODUCT_DELETE_SUCCESS:
            return { loading: false, product: action.payload, success: true };
        case PRODUCT_DELETE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

function productDeleteAgentReducer(state = { product: {} }, action) {

    switch (action.type) {
        case PRODUCT_DELETE_AGENT_REQUEST:
            return { loading: true };
        case PRODUCT_DELETE_AGENT_SUCCESS:
            return { loading: false, product: action.payload, success: true };
        case PRODUCT_DELETE_AGENT_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}


function productSaveReducer(state = initialState, action) {

    switch (action.type) {
        case PRODUCT_SAVE_REQUEST:
            return { loading: true };
        case PRODUCT_SAVE_SUCCESS:
            return { loading: false, success: true, product: action.payload };
        case PRODUCT_SAVE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}


function productUpdateReducer(state = initialState, action) {

    switch (action.type) {

        case PRODUCT_UPDATE_SUCCESS:
            return { loading: false, success: true, product: action.payload };
        case PRODUCT_UPDATE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

export {
    productListReducer,
    productLisForAgentAndCustomerReducer,
    productListByProductTypeCategoryReducer,
    productListForAppSharerAndShoperReducer,
    productDetailsReducer,
    productDeleteReducer,
    productUpdateReducer,
    productSaveReducer,
    productDeleteAgentReducer
}