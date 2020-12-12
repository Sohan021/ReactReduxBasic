//#region Import
import {
    WITHDRAW_LIST_REQUEST,
    WITHDRAW_LIST_SUCCESS,
    WITHDRAW_LIST_FAIL,


    WITHDRAW_REQUEST_KARROT_TO_AGENT,
    WITHDRAW_SUCCESS_KARROT_TO_AGENT,
    WITHDRAW_FAIL_KARROT_TO_AGENT,

    WITHDRAW_REQUEST_APPSHARER_TO_AGENT,
    WITHDRAW_SUCCESS_APPSHARER_TO_AGENT,
    WITHDRAW_FAIL_APPSHARER_TO_AGENT,

    WITHDRAW_REQUEST_AGENT_TO_OFARZ,
    WITHDRAW_SUCCESS_AGENT_TO_OFARZ,
    WITHDRAW_FAIL_AGENT_TO_OFARZ,
    WITHDRAW_REQUEST_APPSHARER_TO_OFARZ,
    WITHDRAW_SUCCESS_APPSHARER_TO_OFARZ,
    WITHDRAW_FAIL_APPSHARER_TO_OFARZ,
    WITHDRAW_REQUEST_KARROT_TO_OFARZ,
    WITHDRAW_SUCCESS_KARROT_TO_OFARZ,
    WITHDRAW_FAIL_KARROT_TO_OFARZ,
    WITHDRAW_REQUEST_CEO_TO_AGENT,
    WITHDRAW_SUCCESS_CEO_TO_AGENT,
    WITHDRAW_FAIL_CEO_TO_AGENT,
    WITHDRAW_REQUEST_CEO_TO_OFARZ,
    WITHDRAW_SUCCESS_CEO_TO_OFARZ,
    WITHDRAW_FAIL_CEO_TO_OFARZ,
    WITHDRAW_LIST_REQUEST_AGENT_TO_OFARZ,
    WITHDRAW_LIST_SUCCESS_AGENT_TO_OFARZ,
    WITHDRAW_LIST_FAIL_AGENT_TO_OFARZ,
    WITHDRAW_LIST_REQUEST_APPSHARER_TO_AGENT,
    WITHDRAW_LIST_SUCCESS_APPSHARER_TO_AGENT,
    WITHDRAW_LIST_FAIL_APPSHARER_TO_AGENT,
    WITHDRAW_LIST_REQUEST_KARROT_TO_AGENT,
    WITHDRAW_LIST_SUCCESS_KARROT_TO_AGENT,
    WITHDRAW_LIST_FAIL_KARROT_TO_AGENT,
    WITHDRAW_LIST_REQUEST_CEO_TO_AGENT,
    WITHDRAW_LIST_SUCCESS_CEO_TO_AGENT,
    WITHDRAW_LIST_FAIL_CEO_TO_AGENT,
    WITHDRAW_LIST_REQUEST_CEO_TO_OFARZ,
    WITHDRAW_LIST_SUCCESS_CEO_TO_OFARZ,
    WITHDRAW_LIST_FAIL_CEO_TO_OFARZ,
    WITHDRAW_LIST_REQUEST_KARROT_TO_OFARZ,
    WITHDRAW_LIST_SUCCESS_KARROT_TO_OFARZ,
    WITHDRAW_LIST_FAIL_KARROT_TO_OFARZ,
    WITHDRAW_LIST_REQUEST_APPSHARER_TO_OFARZ,
    WITHDRAW_LIST_SUCCESS_APPSHARER_TO_OFARZ,
    WITHDRAW_LIST_FAIL_APPSHARER_TO_OFARZ,
    WITHDRAW_LIST_REQUEST_AGENT_FROM_USER,
    WITHDRAW_LIST_SUCCESS_AGENT_FROM_USER,
    WITHDRAW_LIST_FAIL_AGENT_FROM_USER,
    WITHDRAW_LIST_REQUEST_OFARZ_FROM_APPSHARER,
    WITHDRAW_LIST_SUCCESS_OFARZ_FROM_APPSHARER,
    WITHDRAW_LIST_FAIL_OFARZ_FROM_APPSHARER,
    WITHDRAW_LIST_REQUEST_OFARZ_FROM_KARROT,
    WITHDRAW_LIST_SUCCESS_OFARZ_FROM_KARROT,
    WITHDRAW_LIST_FAIL_OFARZ_FROM_KARROT,
    WITHDRAW_LIST_REQUEST_OFARZ_FROM_CEO,
    WITHDRAW_LIST_SUCCESS_OFARZ_FROM_CEO,
    WITHDRAW_LIST_FAIL_OFARZ_FROM_CEO
} from "../../constants/Fund/withdrawConstants";

//#endregion
let initialState = {
    withdraw: false
}
//#region Withdraw List

function withdrawListReducer(state = { withdraws: [] }, action) {
    switch (action.type) {
        case WITHDRAW_LIST_REQUEST:
            return { loading: true };
        case WITHDRAW_LIST_SUCCESS:
            return { loading: false, withdraws: action.payload };
        case WITHDRAW_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

//#region List Agent

function withdrawListAgentToOfarzReducer(state = { withdraws: [] }, action) {
    switch (action.type) {
        case WITHDRAW_LIST_REQUEST_AGENT_TO_OFARZ:
            return { loading: true };
        case WITHDRAW_LIST_SUCCESS_AGENT_TO_OFARZ:
            return { loading: false, withdraws: action.payload };
        case WITHDRAW_LIST_FAIL_AGENT_TO_OFARZ:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

function withdrawListAgentFromUserReducer(state = { withdraws: [] }, action) {
    switch (action.type) {
        case WITHDRAW_LIST_REQUEST_AGENT_FROM_USER:
            return { loading: true };
        case WITHDRAW_LIST_SUCCESS_AGENT_FROM_USER:
            return { loading: false, withdraws: action.payload };
        case WITHDRAW_LIST_FAIL_AGENT_FROM_USER:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

//#endregion

//#region 

function withdrawListOfarzFromAppSharerReducer(state = { withdraws: [] }, action) {
    switch (action.type) {
        case WITHDRAW_LIST_REQUEST_OFARZ_FROM_APPSHARER:
            return { loading: true };
        case WITHDRAW_LIST_SUCCESS_OFARZ_FROM_APPSHARER:
            return { loading: false, withdraws: action.payload };
        case WITHDRAW_LIST_FAIL_OFARZ_FROM_APPSHARER:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

function withdrawListOfarzFromKarrotReducer(state = { withdraws: [] }, action) {
    switch (action.type) {
        case WITHDRAW_LIST_REQUEST_OFARZ_FROM_KARROT:
            return { loading: true };
        case WITHDRAW_LIST_SUCCESS_OFARZ_FROM_KARROT:
            return { loading: false, withdraws: action.payload };
        case WITHDRAW_LIST_FAIL_OFARZ_FROM_KARROT:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

function withdrawListOfarzFromCeoReducer(state = { withdraws: [] }, action) {
    switch (action.type) {
        case WITHDRAW_LIST_REQUEST_OFARZ_FROM_CEO:
            return { loading: true };
        case WITHDRAW_LIST_SUCCESS_OFARZ_FROM_CEO:
            return { loading: false, withdraws: action.payload };
        case WITHDRAW_LIST_FAIL_OFARZ_FROM_CEO:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

//#endregion


//#region List AppSharer
function withdrawListAppSharerToAgentReducer(state = { withdraws: [] }, action) {
    switch (action.type) {
        case WITHDRAW_LIST_REQUEST_APPSHARER_TO_AGENT:
            return { loading: true };
        case WITHDRAW_LIST_SUCCESS_APPSHARER_TO_AGENT:
            return { loading: false, withdraws: action.payload };
        case WITHDRAW_LIST_FAIL_APPSHARER_TO_AGENT:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}


function withdrawListAppSharerToOfarzReducer(state = { withdraws: [] }, action) {
    switch (action.type) {
        case WITHDRAW_LIST_REQUEST_APPSHARER_TO_OFARZ:
            return { loading: true };
        case WITHDRAW_LIST_SUCCESS_APPSHARER_TO_OFARZ:
            return { loading: false, withdraws: action.payload };
        case WITHDRAW_LIST_FAIL_APPSHARER_TO_OFARZ:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

//#endregion
//#region List Karrot
function withdrawListKarrotToAgentReducer(state = { withdraws: [] }, action) {
    switch (action.type) {
        case WITHDRAW_LIST_REQUEST_KARROT_TO_AGENT:
            return { loading: true };
        case WITHDRAW_LIST_SUCCESS_KARROT_TO_AGENT:
            return { loading: false, withdraws: action.payload };
        case WITHDRAW_LIST_FAIL_KARROT_TO_AGENT:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

function withdrawListKarrotToOfarzReducer(state = { withdraws: [] }, action) {
    switch (action.type) {
        case WITHDRAW_LIST_REQUEST_KARROT_TO_OFARZ:
            return { loading: true };
        case WITHDRAW_LIST_SUCCESS_KARROT_TO_OFARZ:
            return { loading: false, withdraws: action.payload };
        case WITHDRAW_LIST_FAIL_KARROT_TO_OFARZ:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}
//#endregion
//#region List CEO
function withdrawListCeoToAgentReducer(state = { withdraws: [] }, action) {
    switch (action.type) {
        case WITHDRAW_LIST_REQUEST_CEO_TO_AGENT:
            return { loading: true };
        case WITHDRAW_LIST_SUCCESS_CEO_TO_AGENT:
            return { loading: false, withdraws: action.payload };
        case WITHDRAW_LIST_FAIL_CEO_TO_AGENT:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

function withdrawListCeoToOfarzReducer(state = { withdraws: [] }, action) {
    switch (action.type) {
        case WITHDRAW_LIST_REQUEST_CEO_TO_OFARZ:
            return { loading: true };
        case WITHDRAW_LIST_SUCCESS_CEO_TO_OFARZ:
            return { loading: false, withdraws: action.payload };
        case WITHDRAW_LIST_FAIL_CEO_TO_OFARZ:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}
//#endregion

//#region Withdraw Agent
function withdrawAgentToOfarzReducer(state = initialState, action) {

    switch (action.type) {
        case WITHDRAW_REQUEST_AGENT_TO_OFARZ:
            return { loading: true };
        case WITHDRAW_SUCCESS_AGENT_TO_OFARZ:
            return { loading: false, success: true, withdraw: action.payload };
        case WITHDRAW_FAIL_AGENT_TO_OFARZ:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}
//#endregion

//#region App Sharer
function withdrawAppSharerToAgentReducer(state = initialState, action) {

    switch (action.type) {
        case WITHDRAW_REQUEST_APPSHARER_TO_AGENT:
            return { loading: true };
        case WITHDRAW_SUCCESS_APPSHARER_TO_AGENT:
            return { loading: false, success: true, withdraw: action.payload };
        case WITHDRAW_FAIL_APPSHARER_TO_AGENT:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

function withdrawAppSharerToOfarzReducer(state = initialState, action) {

    switch (action.type) {
        case WITHDRAW_REQUEST_APPSHARER_TO_OFARZ:
            return { loading: true };
        case WITHDRAW_SUCCESS_APPSHARER_TO_OFARZ:
            return { loading: false, success: true, withdraw: action.payload };
        case WITHDRAW_FAIL_APPSHARER_TO_OFARZ:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

//#endregion
//#region Karrot
function withdrawKarrotToAgentReducer(state = initialState, action) {

    switch (action.type) {
        case WITHDRAW_REQUEST_KARROT_TO_AGENT:
            return { loading: true };
        case WITHDRAW_SUCCESS_KARROT_TO_AGENT:
            return { loading: false, success: true, withdraw: action.payload };
        case WITHDRAW_FAIL_KARROT_TO_AGENT:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

function withdrawKarrotToOfarzReducer(state = initialState, action) {

    switch (action.type) {
        case WITHDRAW_REQUEST_KARROT_TO_OFARZ:
            return { loading: true };
        case WITHDRAW_SUCCESS_KARROT_TO_OFARZ:
            return { loading: false, success: true, withdraw: action.payload };
        case WITHDRAW_FAIL_KARROT_TO_OFARZ:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

//#endregion

//#region Ceo
function withdrawCeoToAgentReducer(state = initialState, action) {

    switch (action.type) {
        case WITHDRAW_REQUEST_CEO_TO_AGENT:
            return { loading: true };
        case WITHDRAW_SUCCESS_CEO_TO_AGENT:
            return { loading: false, success: true, withdraw: action.payload };
        case WITHDRAW_FAIL_CEO_TO_AGENT:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

function withdrawCeoToOfarzReducer(state = initialState, action) {

    switch (action.type) {
        case WITHDRAW_REQUEST_CEO_TO_OFARZ:
            return { loading: true };
        case WITHDRAW_SUCCESS_CEO_TO_OFARZ:
            return { loading: false, success: true, withdraw: action.payload };
        case WITHDRAW_FAIL_CEO_TO_OFARZ:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}
//#endregion

//#region Export
export {
    withdrawListReducer,

    withdrawListAgentFromUserReducer,
    withdrawListAgentToOfarzReducer,

    withdrawListOfarzFromAppSharerReducer,
    withdrawListOfarzFromKarrotReducer,
    withdrawListOfarzFromCeoReducer,

    withdrawListAppSharerToAgentReducer,
    withdrawListAppSharerToOfarzReducer,

    withdrawListKarrotToAgentReducer,
    withdrawListKarrotToOfarzReducer,

    withdrawListCeoToAgentReducer,
    withdrawListCeoToOfarzReducer,

    withdrawAgentToOfarzReducer,

    withdrawAppSharerToAgentReducer,
    withdrawAppSharerToOfarzReducer,

    withdrawKarrotToAgentReducer,
    withdrawKarrotToOfarzReducer,

    withdrawCeoToAgentReducer,
    withdrawCeoToOfarzReducer
}

//#endregion