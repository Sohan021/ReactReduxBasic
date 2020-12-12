//#region import
import axios from 'axios'
import base from '../../components/common/services/config';
import {

    FUND_LIST_REQUEST_AGENT,
    FUND_LIST_SUCCESS_AGENT,
    FUND_LIST_FAIL_AGENT,

    FUND_REQUEST_AGENT,
    FUND_SUCCESS_AGENT,
    FUND_FAIL_AGENT,

    FUND_LIST_REQUEST_APPSHARER,
    FUND_LIST_SUCCESS_APPSHARER,
    FUND_LIST_FAIL_APPSHARER,

    FUND_LIST_REQUEST_SHOPER,
    FUND_LIST_SUCCESS_SHOPER,
    FUND_LIST_FAIL_SHOPER,

    FUND_LIST_REQUEST_KARROT,
    FUND_LIST_SUCCESS_KARROT,
    FUND_LIST_FAIL_KARROT,

    FUND_LIST_REQUEST_CEO,
    FUND_LIST_SUCCESS_CEO,
    FUND_LIST_FAIL_CEO,
    FUND_LIST_REQUEST_OFARZ,
    FUND_LIST_SUCCESS_OFARZ,
    FUND_LIST_FAIL_OFARZ,
    FUND_REQUEST_APPSHARER,
    FUND_SUCCESS_APPSHARER,
    FUND_FAIL_APPSHARER,
    FUND_REQUEST_SHOPER,
    FUND_SUCCESS_SHOPER,
    FUND_FAIL_SHOPER,
    FUND_REQUEST_KARROT,
    FUND_SUCCESS_KARROT,
    FUND_FAIL_KARROT,
    FUND_REQUEST_CEO,
    FUND_SUCCESS_CEO,
    FUND_FAIL_CEO,
    FUND_REQUEST_OFARZ,
    FUND_SUCCESS_OFARZ,
    FUND_FAIL_OFARZ
} from '../../constants/Fund/fundConstants';
//#endregion

//#region Fund list
const listFundsAgent = () => async (dispatch) => {

    try {

        dispatch({ type: FUND_LIST_REQUEST_AGENT });
        const { data } = await axios.get(base + "/api/funds/GetAgentFundList");
        dispatch({ type: FUND_LIST_SUCCESS_AGENT, payload: data });

    }
    catch (error) {
        dispatch({ type: FUND_LIST_FAIL_AGENT, payload: error.message });
    }
}
const listFundsAppSharer = () => async (dispatch) => {
    try {
        dispatch({ type: FUND_LIST_REQUEST_APPSHARER });
        const { data } = await axios.get(base + "/api/funds/GetAppSharerFundList");
        dispatch({ type: FUND_LIST_SUCCESS_APPSHARER, payload: data });

    }
    catch (error) {
        dispatch({ type: FUND_LIST_FAIL_APPSHARER, payload: error.message });
    }
}
const listFundsShoper = () => async (dispatch) => {
    try {
        dispatch({ type: FUND_LIST_REQUEST_SHOPER });
        const { data } = await axios.get(base + "/api/funds/GetShoperFundList");
        dispatch({ type: FUND_LIST_SUCCESS_SHOPER, payload: data });

    }
    catch (error) {
        dispatch({ type: FUND_LIST_FAIL_SHOPER, payload: error.message });
    }
}

const listFundKarrot = () => async (dispatch) => {

    try {

        dispatch({ type: FUND_LIST_REQUEST_KARROT });
        const { data } = await axios.get(base + "/api/funds/GetKarrotFunds");
        dispatch({ type: FUND_LIST_SUCCESS_KARROT, payload: data });

    }
    catch (error) {
        dispatch({ type: FUND_LIST_FAIL_KARROT, payload: error.message });
    }
}
const listFundCeo = () => async (dispatch) => {

    try {

        dispatch({ type: FUND_LIST_REQUEST_CEO });
        const { data } = await axios.get(base + "/api/funds/GetCeoFunds");
        dispatch({ type: FUND_LIST_SUCCESS_CEO, payload: data });

    }
    catch (error) {
        dispatch({ type: FUND_LIST_FAIL_CEO, payload: error.message });
    }
}

const listFundOfarz = () => async (dispatch) => {

    try {
        debugger
        dispatch({ type: FUND_LIST_REQUEST_OFARZ });
        const { data } = await axios.get(base + "/api/funds/GetOfarzFunds");
        dispatch({ type: FUND_LIST_SUCCESS_OFARZ, payload: data });
    }
    catch (error) {
        dispatch({ type: FUND_LIST_FAIL_OFARZ, payload: error.message });
    }
}

//#endregion

//#region Get One Fund
const fundAgent = (agentPhoneNumber) => async (dispatch) => {
    try {
        dispatch({ type: FUND_REQUEST_AGENT, payload: { agentPhoneNumber } });
        const { data } = await axios.get(base + "/api/funds/GetAgentFund/" + agentPhoneNumber);
        dispatch({ type: FUND_SUCCESS_AGENT, payload: data });
    }
    catch (error) {
        dispatch({ type: FUND_FAIL_AGENT, Tayload: error.message });
    }
}

const fundAppSharers = (appSharerPhoneNumber) => async (dispatch) => {
    try {
        dispatch({ type: FUND_REQUEST_APPSHARER, payload: { appSharerPhoneNumber } });
        const { data } = await axios.get(base + "/api/funds/GetAppSharerFund/" + appSharerPhoneNumber);
        dispatch({ type: FUND_SUCCESS_APPSHARER, payload: data });
    }
    catch (error) {
        dispatch({ type: FUND_FAIL_APPSHARER, payload: error.message });
    }
}
const fundShoper = (shoperPhoneNumber) => async (dispatch) => {

    try {

        dispatch({ type: FUND_REQUEST_SHOPER, payload: { shoperPhoneNumber } });
        const { data } = await axios.get(base + "/api/funds/GetShoperFund/" + shoperPhoneNumber);
        dispatch({ type: FUND_SUCCESS_SHOPER, payload: data });
    }
    catch (error) {
        dispatch({ type: FUND_FAIL_SHOPER, Rayload: error.message });
    }
}
const fundKarrot = (karrotPhoneNumber) => async (dispatch) => {

    try {

        dispatch({ type: FUND_REQUEST_KARROT, payload: { karrotPhoneNumber } });
        const { data } = await axios.get(base + "/api/funds/GetKarrotFund/" + karrotPhoneNumber);
        dispatch({ type: FUND_SUCCESS_KARROT, payload: data });

    }
    catch (error) {
        dispatch({ type: FUND_FAIL_KARROT, payload: error.message });
    }
}
const fundCeo = (ceoPhoneNumber) => async (dispatch) => {

    try {

        dispatch({ type: FUND_REQUEST_CEO, payload: { ceoPhoneNumber } });
        const { data } = await axios.get(base + "/api/funds/GetCeoFund/" + ceoPhoneNumber);
        dispatch({ type: FUND_SUCCESS_CEO, payload: data });

    }
    catch (error) {
        dispatch({ type: FUND_FAIL_CEO, payload: error.message });
    }
}

const fundOfarz = (ofarzPhonNumber) => async (dispatch) => {

    try {
        debugger
        dispatch({ type: FUND_REQUEST_OFARZ, payload: { ofarzPhonNumber } });
        const { data } = await axios.get(base + "/api/funds/GetOfarzFund/" + ofarzPhonNumber);
        dispatch({ type: FUND_SUCCESS_OFARZ, payload: data });
    }
    catch (error) {
        dispatch({ type: FUND_FAIL_OFARZ, payload: error.message });
    }
}
//#endregion

//#region Export
export {
    listFundsAgent,
    listFundsAppSharer,
    listFundsShoper,
    listFundKarrot,
    listFundCeo,
    listFundOfarz,

    fundAgent,
    fundAppSharers,
    fundShoper,
    fundKarrot,
    fundCeo,
    fundOfarz
}
//#endregion