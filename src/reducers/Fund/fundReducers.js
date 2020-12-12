//#region  Import
import {
    FUND_LIST_FAIL_AGENT,
    FUND_LIST_FAIL_APPSHARER,
    FUND_LIST_FAIL_CEO,

    FUND_REQUEST_AGENT,
    FUND_SUCCESS_AGENT,
    FUND_FAIL_AGENT,

    FUND_LIST_FAIL_KARROT,
    FUND_LIST_FAIL_OFARZ,
    FUND_LIST_FAIL_SHOPER,

    FUND_LIST_REQUEST_AGENT,
    FUND_LIST_REQUEST_APPSHARER,
    FUND_LIST_REQUEST_CEO,
    FUND_LIST_REQUEST_KARROT,
    FUND_LIST_REQUEST_OFARZ,
    FUND_LIST_REQUEST_SHOPER,

    FUND_LIST_SUCCESS_AGENT,
    FUND_LIST_SUCCESS_APPSHARER,
    FUND_LIST_SUCCESS_CEO,
    FUND_LIST_SUCCESS_KARROT,
    FUND_LIST_SUCCESS_OFARZ,
    FUND_LIST_SUCCESS_SHOPER,
    FUND_SUCCESS_APPSHARER,
    FUND_FAIL_APPSHARER,
    FUND_SUCCESS_SHOPER,
    FUND_FAIL_SHOPER,
    FUND_SUCCESS_KARROT,
    FUND_FAIL_KARROT,
    FUND_SUCCESS_CEO,
    FUND_FAIL_CEO,
    FUND_SUCCESS_OFARZ,
    FUND_FAIL_OFARZ,

} from "../../constants/Fund/fundConstants";
//#endregion
let initialState = {
    fund: false
}

//#region Fund List

function fundListAgentReducer(state = { funds: [] }, action) {
    switch (action.type) {
        case FUND_LIST_REQUEST_AGENT:
            return { loading: true };
        case FUND_LIST_SUCCESS_AGENT:
            return { loading: false, funds: action.payload };
        case FUND_LIST_FAIL_AGENT:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}



function fundListAppSharerReducer(state = { funds: [] }, action) {
    switch (action.type) {
        case FUND_LIST_REQUEST_APPSHARER:
            return { loading: true };
        case FUND_LIST_SUCCESS_APPSHARER:
            return { loading: false, funds: action.payload };
        case FUND_LIST_FAIL_APPSHARER:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

function fundListShoperReducer(state = { funds: [] }, action) {
    switch (action.type) {
        case FUND_LIST_REQUEST_SHOPER:
            return { loading: true };
        case FUND_LIST_SUCCESS_SHOPER:
            return { loading: false, funds: action.payload };
        case FUND_LIST_FAIL_SHOPER:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

function fundListKarrotReducer(state = { funds: [] }, action) {
    switch (action.type) {
        case FUND_LIST_REQUEST_KARROT:
            return { loading: true };
        case FUND_LIST_SUCCESS_KARROT:
            return { loading: false, funds: action.payload };
        case FUND_LIST_FAIL_KARROT:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

function fundListCeoReducer(state = { funds: [] }, action) {
    switch (action.type) {
        case FUND_LIST_REQUEST_CEO:
            return { loading: true };
        case FUND_LIST_SUCCESS_CEO:
            return { loading: false, funds: action.payload };
        case FUND_LIST_FAIL_CEO:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

function fundListOfarzReducer(state = { funds: [] }, action) {
    switch (action.type) {
        case FUND_LIST_REQUEST_OFARZ:
            return { loading: true };
        case FUND_LIST_SUCCESS_OFARZ:
            return { loading: false, funds: action.payload };
        case FUND_LIST_FAIL_OFARZ:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

//#endregion

function fundAgentReducer(state = { fund: {} }, action) {

    switch (action.type) {
        case FUND_SUCCESS_AGENT:
            return { loading: false, fund: action.payload };
        case FUND_FAIL_AGENT:
            return { loading: false, erfundror: action.payload }
        default:
            return state;
    }
}


function fundAppSharerReducer(state = { fund: {} }, action) {

    switch (action.type) {
        case FUND_SUCCESS_APPSHARER:
            return { loading: false, fund: action.payload };
        case FUND_FAIL_APPSHARER:
            return { loading: false, erfundror: action.payload }
        default:
            return state;
    }
}

function fundShoperReducer(state = { fund: {} }, action) {

    switch (action.type) {
        case FUND_SUCCESS_SHOPER:
            return { loading: false, fund: action.payload };
        case FUND_FAIL_SHOPER:
            return { loading: false, erfundror: action.payload }
        default:
            return state;
    }
}

function fundKarrotReducer(state = { fund: {} }, action) {

    switch (action.type) {
        case FUND_SUCCESS_KARROT:
            return { loading: false, fund: action.payload };
        case FUND_FAIL_KARROT:
            return { loading: false, erfundror: action.payload }
        default:
            return state;
    }
}

function fundCEOReducer(state = { fund: {} }, action) {

    switch (action.type) {
        case FUND_SUCCESS_CEO:
            return { loading: false, fund: action.payload };
        case FUND_FAIL_CEO:
            return { loading: false, erfundror: action.payload }
        default:
            return state;
    }
}

function fundOfarzReducer(state = { fund: {} }, action) {

    switch (action.type) {
        case FUND_SUCCESS_OFARZ:
            return { loading: false, fund: action.payload };
        case FUND_FAIL_OFARZ:
            return { loading: false, erfundror: action.payload }
        default:
            return state;
    }
}


//#region Export
export {

    fundListAgentReducer,
    fundListAppSharerReducer,
    fundListShoperReducer,
    fundListKarrotReducer,
    fundListCeoReducer,
    fundListOfarzReducer,

    fundAgentReducer,
    fundAppSharerReducer,
    fundShoperReducer,
    fundKarrotReducer,
    fundCEOReducer,
    fundOfarzReducer

}

//#endregion