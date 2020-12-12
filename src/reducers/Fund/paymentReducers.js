//#region Import
import {
    PAYMENT_DETAILS_FAIL,
    PAYMENT_DETAILS_SUCCESS,

    PAYMENT_LIST_BACKSHOPPING_OFFER_PRODUCT_FAIL,
    PAYMENT_LIST_BACKSHOPPING_OFFER_PRODUCT_REQUEST,
    PAYMENT_LIST_BACKSHOPPING_OFFER_PRODUCT_SUCCESS,

    PAYMENT_LIST_BACKSHOPPING_PROMOTIONAL_PRODUCT_FAIL,
    PAYMENT_LIST_BACKSHOPPING_PROMOTIONAL_PRODUCT_REQUEST,
    PAYMENT_LIST_BACKSHOPPING_PROMOTIONAL_PRODUCT_SUCCESS,

    PAYMENT_LIST_REQUEST,
    PAYMENT_LIST_SUCCESS,
    PAYMENT_LIST_FAIL,

    PAYMENT_LIST_MAINACCOUNT_OFFER_PRODUCT_FAIL,
    PAYMENT_LIST_MAINACCOUNT_OFFER_PRODUCT_REQUEST,
    PAYMENT_LIST_MAINACCOUNT_OFFER_PRODUCT_SUCCESS,

    PAYMENT_LIST_MAINACCOUNT_PROMOTIONAL_PRODUCT_FAIL,
    PAYMENT_LIST_MAINACCOUNT_PROMOTIONAL_PRODUCT_REQUEST,
    PAYMENT_LIST_MAINACCOUNT_PROMOTIONAL_PRODUCT_SUCCESS,


    PAYMENT_LIST_TABLECASH_OFFER_PRODUCT_FAIL,
    PAYMENT_LIST_TABLECASH_OFFER_PRODUCT_REQUEST,
    PAYMENT_LIST_TABLECASH_OFFER_PRODUCT_SUCCESS,

    PAYMENT_LIST_TABLECASH_PROMOTIONAL_PRODUCT_FAIL,
    PAYMENT_LIST_TABLECASH_PROMOTIONAL_PRODUCT_REQUEST,
    PAYMENT_LIST_TABLECASH_PROMOTIONAL_PRODUCT_SUCCESS,

    PAYMENT_SUBMIT_BACKSHOPPING_OFFER_FAIL,
    PAYMENT_SUBMIT_BACKSHOPPING_OFFER_REQUEST,
    PAYMENT_SUBMIT_BACKSHOPPING_OFFER_SUCCESS,

    PAYMENT_SUBMIT_BACKSHOPPING_PROMOTIONAL_FAIL,
    PAYMENT_SUBMIT_BACKSHOPPING_PROMOTIONAL_REQUEST,
    PAYMENT_SUBMIT_BACKSHOPPING_PROMOTIONAL_SUCCESS,

    PAYMENT_SUBMIT_MAINACCOUNT_OFFER_FAIL,
    PAYMENT_SUBMIT_MAINACCOUNT_OFFER_REQUEST,
    PAYMENT_SUBMIT_MAINACCOUNT_OFFER_SUCCESS,

    PAYMENT_SUBMIT_MAINACCOUNT_PROMOTIONAL_FAIL,
    PAYMENT_SUBMIT_MAINACCOUNT_PROMOTIONAL_REQUEST,
    PAYMENT_SUBMIT_MAINACCOUNT_PROMOTIONAL_SUCCESS,

    PAYMENT_SUBMIT_TABLECASH_OFFER_FAIL,
    PAYMENT_SUBMIT_TABLECASH_OFFER_REQUEST,
    PAYMENT_SUBMIT_TABLECASH_OFFER_SUCCESS,

    PAYMENT_SUBMIT_TABLECASH_PROMOTIONAL_FAIL,
    PAYMENT_SUBMIT_TABLECASH_PROMOTIONAL_REQUEST,
    PAYMENT_SUBMIT_TABLECASH_PROMOTIONAL_SUCCESS, PAYMENT_LIST_FAIL_AGENT, PAYMENT_LIST_SUCCESS_AGENT, PAYMENT_LIST_REQUEST_AGENT, PAYMENT_LIST_REQUEST_APPSHARER, PAYMENT_LIST_SUCCESS_APPSHARER, PAYMENT_LIST_FAIL_APPSHARER, PAYMENT_LIST_REQUEST_SHOPER, PAYMENT_LIST_SUCCESS_SHOPER, PAYMENT_LIST_FAIL_SHOPER
} from "../../constants/Fund/paymentConstants";
//#endregion

let initialState = {
    payment: false
}

//#region PaymentList

function paymentListReducer(state = { payments: [] }, action) {
    switch (action.type) {
        case PAYMENT_LIST_REQUEST:
            return { loading: true };
        case PAYMENT_LIST_SUCCESS:
            return { loading: false, payments: action.payload };
        case PAYMENT_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}
function paymentListAgentReducer(state = { payments: [] }, action) {
    switch (action.type) {
        case PAYMENT_LIST_REQUEST_AGENT:
            return { loading: true };
        case PAYMENT_LIST_SUCCESS_AGENT:
            return { loading: false, payments: action.payload };
        case PAYMENT_LIST_FAIL_AGENT:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}
function paymentListAppSharerReducer(state = { payments: [] }, action) {
    switch (action.type) {
        case PAYMENT_LIST_REQUEST_APPSHARER:
            return { loading: true };
        case PAYMENT_LIST_SUCCESS_APPSHARER:
            return { loading: false, payments: action.payload };
        case PAYMENT_LIST_FAIL_APPSHARER:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}
function paymentListShoperReducer(state = { payments: [] }, action) {
    switch (action.type) {
        case PAYMENT_LIST_REQUEST_SHOPER:
            return { loading: true };
        case PAYMENT_LIST_SUCCESS_SHOPER:
            return { loading: false, payments: action.payload };
        case PAYMENT_LIST_FAIL_SHOPER:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}
//#endregion

//#region PaymentListTableCashOffer
function paymentListTableCashOfferReducer(state = { payments: [] }, action) {
    switch (action.type) {
        case PAYMENT_LIST_TABLECASH_OFFER_PRODUCT_REQUEST:
            return { loading: true };
        case PAYMENT_LIST_TABLECASH_OFFER_PRODUCT_SUCCESS:
            return { loading: false, payments: action.payload };
        case PAYMENT_LIST_TABLECASH_OFFER_PRODUCT_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}
function paymentListTableCashOfferAgentReducer(state = { payments: [] }, action) {
    switch (action.type) {
        case PAYMENT_LIST_TABLECASH_OFFER_PRODUCT_REQUEST:
            return { loading: true };
        case PAYMENT_LIST_TABLECASH_OFFER_PRODUCT_SUCCESS:
            return { loading: false, payments: action.payload };
        case PAYMENT_LIST_TABLECASH_OFFER_PRODUCT_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}
function paymentListTableCashOfferAppSharerReducer(state = { payments: [] }, action) {
    switch (action.type) {
        case PAYMENT_LIST_TABLECASH_OFFER_PRODUCT_REQUEST:
            return { loading: true };
        case PAYMENT_LIST_TABLECASH_OFFER_PRODUCT_SUCCESS:
            return { loading: false, payments: action.payload };
        case PAYMENT_LIST_TABLECASH_OFFER_PRODUCT_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}
function paymentListTableCashOfferShoperReducer(state = { payments: [] }, action) {
    switch (action.type) {
        case PAYMENT_LIST_TABLECASH_OFFER_PRODUCT_REQUEST:
            return { loading: true };
        case PAYMENT_LIST_TABLECASH_OFFER_PRODUCT_SUCCESS:
            return { loading: false, payments: action.payload };
        case PAYMENT_LIST_TABLECASH_OFFER_PRODUCT_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}
//#endregion

//#region PaymentListTableCashPromotional
function paymentListTableCashPromotionalReducer(state = { payments: [] }, action) {
    switch (action.type) {
        case PAYMENT_LIST_TABLECASH_PROMOTIONAL_PRODUCT_REQUEST:
            return { loading: true };
        case PAYMENT_LIST_TABLECASH_PROMOTIONAL_PRODUCT_SUCCESS:
            return { loading: false, payments: action.payload };
        case PAYMENT_LIST_TABLECASH_PROMOTIONAL_PRODUCT_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}
function paymentListTableCashPromotionalAgentReducer(state = { payments: [] }, action) {
    switch (action.type) {
        case PAYMENT_LIST_TABLECASH_PROMOTIONAL_PRODUCT_REQUEST:
            return { loading: true };
        case PAYMENT_LIST_TABLECASH_PROMOTIONAL_PRODUCT_SUCCESS:
            return { loading: false, payments: action.payload };
        case PAYMENT_LIST_TABLECASH_PROMOTIONAL_PRODUCT_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}
function paymentListTableCashPromotionalAppSharerReducer(state = { payments: [] }, action) {
    switch (action.type) {
        case PAYMENT_LIST_TABLECASH_PROMOTIONAL_PRODUCT_REQUEST:
            return { loading: true };
        case PAYMENT_LIST_TABLECASH_PROMOTIONAL_PRODUCT_SUCCESS:
            return { loading: false, payments: action.payload };
        case PAYMENT_LIST_TABLECASH_PROMOTIONAL_PRODUCT_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}
//#endregion

//#region PaymentListMainAccountOffer
function paymentListMainAccountOfferReducer(state = { payments: [] }, action) {
    switch (action.type) {
        case PAYMENT_LIST_MAINACCOUNT_OFFER_PRODUCT_REQUEST:
            return { loading: true };
        case PAYMENT_LIST_MAINACCOUNT_OFFER_PRODUCT_SUCCESS:
            return { loading: false, payments: action.payload };
        case PAYMENT_LIST_MAINACCOUNT_OFFER_PRODUCT_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}
function paymentListMainAccountOfferAgentReducer(state = { payments: [] }, action) {
    switch (action.type) {
        case PAYMENT_LIST_MAINACCOUNT_OFFER_PRODUCT_REQUEST:
            return { loading: true };
        case PAYMENT_LIST_MAINACCOUNT_OFFER_PRODUCT_SUCCESS:
            return { loading: false, payments: action.payload };
        case PAYMENT_LIST_MAINACCOUNT_OFFER_PRODUCT_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}
function paymentListMainAccountOfferAppSharerReducer(state = { payments: [] }, action) {
    switch (action.type) {
        case PAYMENT_LIST_MAINACCOUNT_OFFER_PRODUCT_REQUEST:
            return { loading: true };
        case PAYMENT_LIST_MAINACCOUNT_OFFER_PRODUCT_SUCCESS:
            return { loading: false, payments: action.payload };
        case PAYMENT_LIST_MAINACCOUNT_OFFER_PRODUCT_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}
//#endregion

//#region PaymentListMainAccountPromotional
function paymentListMainAccountPromotionalReducer(state = { payments: [] }, action) {
    switch (action.type) {
        case PAYMENT_LIST_MAINACCOUNT_PROMOTIONAL_PRODUCT_REQUEST:
            return { loading: true };
        case PAYMENT_LIST_MAINACCOUNT_PROMOTIONAL_PRODUCT_SUCCESS:
            return { loading: false, payments: action.payload };
        case PAYMENT_LIST_MAINACCOUNT_PROMOTIONAL_PRODUCT_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}
function paymentListMainAccountPromotionalAgentReducer(state = { payments: [] }, action) {
    switch (action.type) {
        case PAYMENT_LIST_MAINACCOUNT_PROMOTIONAL_PRODUCT_REQUEST:
            return { loading: true };
        case PAYMENT_LIST_MAINACCOUNT_PROMOTIONAL_PRODUCT_SUCCESS:
            return { loading: false, payments: action.payload };
        case PAYMENT_LIST_MAINACCOUNT_PROMOTIONAL_PRODUCT_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}
function paymentListMainAccountPromotionalAppSharerReducer(state = { payments: [] }, action) {
    switch (action.type) {
        case PAYMENT_LIST_MAINACCOUNT_PROMOTIONAL_PRODUCT_REQUEST:
            return { loading: true };
        case PAYMENT_LIST_MAINACCOUNT_PROMOTIONAL_PRODUCT_SUCCESS:
            return { loading: false, payments: action.payload };
        case PAYMENT_LIST_MAINACCOUNT_PROMOTIONAL_PRODUCT_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}
//#endregion

//#region PaymentListBackShoppingOffer
function paymentListBackShoppingOfferReducer(state = { payments: [] }, action) {
    switch (action.type) {
        case PAYMENT_LIST_BACKSHOPPING_OFFER_PRODUCT_REQUEST:
            return { loading: true };
        case PAYMENT_LIST_BACKSHOPPING_OFFER_PRODUCT_SUCCESS:
            return { loading: false, payments: action.payload };
        case PAYMENT_LIST_BACKSHOPPING_OFFER_PRODUCT_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}
function paymentListBackShoppingOfferAgentReducer(state = { payments: [] }, action) {
    switch (action.type) {
        case PAYMENT_LIST_BACKSHOPPING_OFFER_PRODUCT_REQUEST:
            return { loading: true };
        case PAYMENT_LIST_BACKSHOPPING_OFFER_PRODUCT_SUCCESS:
            return { loading: false, payments: action.payload };
        case PAYMENT_LIST_BACKSHOPPING_OFFER_PRODUCT_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}
function paymentListBackShoppingOfferAppSharerReducer(state = { payments: [] }, action) {
    switch (action.type) {
        case PAYMENT_LIST_BACKSHOPPING_OFFER_PRODUCT_REQUEST:
            return { loading: true };
        case PAYMENT_LIST_BACKSHOPPING_OFFER_PRODUCT_SUCCESS:
            return { loading: false, payments: action.payload };
        case PAYMENT_LIST_BACKSHOPPING_OFFER_PRODUCT_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}
function paymentListBackShoppingOfferShoperReducer(state = { payments: [] }, action) {
    switch (action.type) {
        case PAYMENT_LIST_BACKSHOPPING_OFFER_PRODUCT_REQUEST:
            return { loading: true };
        case PAYMENT_LIST_BACKSHOPPING_OFFER_PRODUCT_SUCCESS:
            return { loading: false, payments: action.payload };
        case PAYMENT_LIST_BACKSHOPPING_OFFER_PRODUCT_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}
//#endregion

//#region PaymentListBackShoppingPromotional
function paymentListBackShoppingPromotionalReducer(state = { payments: [] }, action) {
    switch (action.type) {
        case PAYMENT_LIST_BACKSHOPPING_PROMOTIONAL_PRODUCT_REQUEST:
            return { loading: true };
        case PAYMENT_LIST_BACKSHOPPING_PROMOTIONAL_PRODUCT_SUCCESS:
            return { loading: false, payments: action.payload };
        case PAYMENT_LIST_BACKSHOPPING_PROMOTIONAL_PRODUCT_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}
function paymentListBackShoppingPromotionalAgentReducer(state = { payments: [] }, action) {
    switch (action.type) {
        case PAYMENT_LIST_BACKSHOPPING_PROMOTIONAL_PRODUCT_REQUEST:
            return { loading: true };
        case PAYMENT_LIST_BACKSHOPPING_PROMOTIONAL_PRODUCT_SUCCESS:
            return { loading: false, payments: action.payload };
        case PAYMENT_LIST_BACKSHOPPING_PROMOTIONAL_PRODUCT_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}
function paymentListBackShoppingPromotionalAppSharerReducer(state = { payments: [] }, action) {
    switch (action.type) {
        case PAYMENT_LIST_BACKSHOPPING_PROMOTIONAL_PRODUCT_REQUEST:
            return { loading: true };
        case PAYMENT_LIST_BACKSHOPPING_PROMOTIONAL_PRODUCT_SUCCESS:
            return { loading: false, payments: action.payload };
        case PAYMENT_LIST_BACKSHOPPING_PROMOTIONAL_PRODUCT_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}
//#endregion

//#region Submit Payment App Sharer

function paymentSubmitTableCashOfferReducer(state = initialState, action) {

    switch (action.type) {
        case PAYMENT_SUBMIT_TABLECASH_OFFER_REQUEST:
            return { loading: true };
        case PAYMENT_SUBMIT_TABLECASH_OFFER_SUCCESS:
            return { loading: false, success: true, payment: action.payload };
        case PAYMENT_SUBMIT_TABLECASH_OFFER_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}
function paymentSubmitTableCashPromotionalReducer(state = initialState, action) {

    switch (action.type) {
        case PAYMENT_SUBMIT_TABLECASH_PROMOTIONAL_REQUEST:
            return { loading: true };
        case PAYMENT_SUBMIT_TABLECASH_PROMOTIONAL_SUCCESS:
            return { loading: false, success: true, payment: action.payload };
        case PAYMENT_SUBMIT_TABLECASH_PROMOTIONAL_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}
function paymentSubmitMainAccountOfferReducer(state = initialState, action) {

    switch (action.type) {
        case PAYMENT_SUBMIT_MAINACCOUNT_OFFER_REQUEST:
            return { loading: true };
        case PAYMENT_SUBMIT_MAINACCOUNT_OFFER_SUCCESS:
            return { loading: false, success: true, payment: action.payload };
        case PAYMENT_SUBMIT_MAINACCOUNT_OFFER_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}
function paymentSubmitMainAccountPromotionalReducer(state = initialState, action) {

    switch (action.type) {
        case PAYMENT_SUBMIT_MAINACCOUNT_PROMOTIONAL_REQUEST:
            return { loading: true };
        case PAYMENT_SUBMIT_MAINACCOUNT_PROMOTIONAL_SUCCESS:
            return { loading: false, success: true, payment: action.payload };
        case PAYMENT_SUBMIT_MAINACCOUNT_PROMOTIONAL_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}
function paymentSubmitBackShoppingOfferReducer(state = initialState, action) {

    switch (action.type) {
        case PAYMENT_SUBMIT_BACKSHOPPING_OFFER_REQUEST:
            return { loading: true };
        case PAYMENT_SUBMIT_BACKSHOPPING_OFFER_SUCCESS:
            return { loading: false, success: true, payment: action.payload };
        case PAYMENT_SUBMIT_BACKSHOPPING_OFFER_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}
function paymentSubmitBackShoppingPromotionalReducer(state = initialState, action) {

    switch (action.type) {
        case PAYMENT_SUBMIT_BACKSHOPPING_PROMOTIONAL_REQUEST:
            return { loading: true };
        case PAYMENT_SUBMIT_BACKSHOPPING_PROMOTIONAL_SUCCESS:
            return { loading: false, success: true, payment: action.payload };
        case PAYMENT_SUBMIT_BACKSHOPPING_PROMOTIONAL_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}
//#endregion

//#region Submit Payment Shoper
function paymentSubmitShoperTableCashOfferReducer(state = initialState, action) {

    switch (action.type) {
        case PAYMENT_SUBMIT_TABLECASH_OFFER_REQUEST:
            return { loading: true };
        case PAYMENT_SUBMIT_TABLECASH_OFFER_SUCCESS:
            return { loading: false, success: true, payment: action.payload };
        case PAYMENT_SUBMIT_TABLECASH_OFFER_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

function paymentSubmitShoperBackshoppingOfferReducer(state = initialState, action) {

    switch (action.type) {
        case PAYMENT_SUBMIT_BACKSHOPPING_OFFER_REQUEST:
            return { loading: true };
        case PAYMENT_SUBMIT_BACKSHOPPING_OFFER_SUCCESS:
            return { loading: false, success: true, payment: action.payload };
        case PAYMENT_SUBMIT_BACKSHOPPING_OFFER_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}
//#endregion

//#region
function paymentDetailsReducer(state = { paymentType: {} }, action) {

    switch (action.type) {
        case PAYMENT_DETAILS_SUCCESS:
            return { loading: false, paymentType: action.payload };
        case PAYMENT_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}
//#endregion

//#region export

export {
    paymentDetailsReducer,

    paymentListReducer,
    paymentListAgentReducer,
    paymentListAppSharerReducer,
    paymentListShoperReducer,

    paymentListTableCashOfferReducer,
    paymentListTableCashOfferAgentReducer,
    paymentListTableCashOfferAppSharerReducer,
    paymentListTableCashOfferShoperReducer,

    paymentListTableCashPromotionalReducer,
    paymentListTableCashPromotionalAgentReducer,
    paymentListTableCashPromotionalAppSharerReducer,

    paymentListMainAccountOfferReducer,
    paymentListMainAccountOfferAppSharerReducer,
    paymentListMainAccountOfferAgentReducer,

    paymentListMainAccountPromotionalReducer,
    paymentListMainAccountPromotionalAgentReducer,
    paymentListMainAccountPromotionalAppSharerReducer,

    paymentListBackShoppingOfferReducer,
    paymentListBackShoppingOfferAgentReducer,
    paymentListBackShoppingOfferAppSharerReducer,
    paymentListBackShoppingOfferShoperReducer,

    paymentListBackShoppingPromotionalReducer,
    paymentListBackShoppingPromotionalAgentReducer,
    paymentListBackShoppingPromotionalAppSharerReducer,

    paymentSubmitTableCashOfferReducer,
    paymentSubmitTableCashPromotionalReducer,

    paymentSubmitMainAccountOfferReducer,
    paymentSubmitMainAccountPromotionalReducer,

    paymentSubmitBackShoppingOfferReducer,
    paymentSubmitBackShoppingPromotionalReducer,

    paymentSubmitShoperBackshoppingOfferReducer,
    paymentSubmitShoperTableCashOfferReducer
}

//#endregion