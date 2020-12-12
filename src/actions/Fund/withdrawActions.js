//#region  Import
import axios from 'axios'
import Cookie from 'js-cookie';
import base from '../../components/common/services/config';
import {

    WITHDRAW_FAIL_AGENT_TO_OFARZ,
    WITHDRAW_FAIL_APPSHARER_TO_AGENT,
    WITHDRAW_FAIL_APPSHARER_TO_OFARZ,

    WITHDRAW_FAIL_CEO_TO_AGENT,
    WITHDRAW_FAIL_CEO_TO_OFARZ,


    WITHDRAW_FAIL_KARROT_TO_AGENT,
    WITHDRAW_FAIL_KARROT_TO_OFARZ,

    WITHDRAW_LIST_FAIL,

    WITHDRAW_LIST_FAIL_AGENT_FROM_USER,

    WITHDRAW_LIST_FAIL_AGENT_TO_OFARZ,

    WITHDRAW_LIST_FAIL_APPSHARER_TO_AGENT,

    WITHDRAW_LIST_FAIL_APPSHARER_TO_OFARZ,

    WITHDRAW_LIST_FAIL_CEO_TO_AGENT,


    WITHDRAW_LIST_FAIL_CEO_TO_OFARZ,


    WITHDRAW_LIST_FAIL_KARROT_TO_AGENT,

    WITHDRAW_LIST_FAIL_KARROT_TO_OFARZ,

    WITHDRAW_LIST_FAIL_OFARZ_FROM_APPSHARER,

    WITHDRAW_LIST_FAIL_OFARZ_FROM_CEO,

    WITHDRAW_LIST_FAIL_OFARZ_FROM_KARROT,

    WITHDRAW_LIST_REQUEST,

    WITHDRAW_LIST_REQUEST_AGENT_FROM_USER,

    WITHDRAW_LIST_REQUEST_AGENT_TO_OFARZ,

    WITHDRAW_LIST_REQUEST_APPSHARER_TO_AGENT,

    WITHDRAW_LIST_REQUEST_APPSHARER_TO_OFARZ,

    WITHDRAW_LIST_REQUEST_CEO_TO_AGENT,


    WITHDRAW_LIST_REQUEST_CEO_TO_OFARZ,


    WITHDRAW_LIST_REQUEST_KARROT_TO_AGENT,

    WITHDRAW_LIST_REQUEST_KARROT_TO_OFARZ,

    WITHDRAW_LIST_REQUEST_OFARZ_FROM_APPSHARER,

    WITHDRAW_LIST_REQUEST_OFARZ_FROM_CEO,

    WITHDRAW_LIST_REQUEST_OFARZ_FROM_KARROT,

    WITHDRAW_LIST_SUCCESS,

    WITHDRAW_LIST_SUCCESS_AGENT_FROM_USER,

    WITHDRAW_LIST_SUCCESS_AGENT_TO_OFARZ,

    WITHDRAW_LIST_SUCCESS_APPSHARER_TO_AGENT,

    WITHDRAW_LIST_SUCCESS_APPSHARER_TO_OFARZ,

    WITHDRAW_LIST_SUCCESS_CEO_TO_AGENT,


    WITHDRAW_LIST_SUCCESS_CEO_TO_OFARZ,


    WITHDRAW_LIST_SUCCESS_KARROT_TO_AGENT,


    WITHDRAW_LIST_SUCCESS_KARROT_TO_OFARZ,


    WITHDRAW_LIST_SUCCESS_OFARZ_FROM_APPSHARER,


    WITHDRAW_LIST_SUCCESS_OFARZ_FROM_CEO,


    WITHDRAW_LIST_SUCCESS_OFARZ_FROM_KARROT,


    WITHDRAW_REQUEST_AGENT_TO_OFARZ,

    WITHDRAW_REQUEST_APPSHARER_TO_AGENT,
    WITHDRAW_REQUEST_APPSHARER_TO_OFARZ,

    WITHDRAW_REQUEST_CEO_TO_AGENT,
    WITHDRAW_REQUEST_CEO_TO_OFARZ,


    WITHDRAW_REQUEST_KARROT_TO_AGENT,

    WITHDRAW_REQUEST_KARROT_TO_OFARZ,


    WITHDRAW_SUCCESS_AGENT_TO_OFARZ,

    WITHDRAW_SUCCESS_APPSHARER_TO_AGENT,
    WITHDRAW_SUCCESS_APPSHARER_TO_OFARZ,

    WITHDRAW_SUCCESS_CEO_TO_AGENT,
    WITHDRAW_SUCCESS_CEO_TO_OFARZ,

    WITHDRAW_SUCCESS_KARROT_TO_AGENT,
    WITHDRAW_SUCCESS_KARROT_TO_OFARZ
} from '../../constants/Fund/withdrawConstants';
//#endregion

//#region Withdraw List
const listWithdraw = () => async (dispatch) => {
    try {
        dispatch({ type: WITHDRAW_LIST_REQUEST });
        const { data } = await axios.get(base + "/api/funds/GetAllWithdrawList");
        dispatch({ type: WITHDRAW_LIST_SUCCESS, payload: data });

    }
    catch (error) {
        dispatch({ type: WITHDRAW_LIST_FAIL, payload: error.message });
    }
}

//#region Withdraw list Agent
const listWithdrawAgentToOfarz = (agentPhoneNumber) => async (dispatch) => {

    try {

        dispatch({ type: WITHDRAW_LIST_REQUEST_AGENT_TO_OFARZ, payload: { agentPhoneNumber } });
        const { data } = await axios.get(base + "/api/funds/GetAgentWithdrawListToOfarz/" + agentPhoneNumber);
        dispatch({ type: WITHDRAW_LIST_SUCCESS_AGENT_TO_OFARZ, payload: data });

    }
    catch (error) {
        dispatch({ type: WITHDRAW_LIST_FAIL_AGENT_TO_OFARZ, payload: error.message });
    }
}

const listWithdrawAgentFromUser = (agentPhoneNumber) => async (dispatch) => {

    try {
        dispatch({ type: WITHDRAW_LIST_REQUEST_AGENT_FROM_USER, payload: { agentPhoneNumber } });
        const { data } = await axios.get(base + "/api/funds/GetAgentWithdrawListFromUser/" + agentPhoneNumber);
        dispatch({ type: WITHDRAW_LIST_SUCCESS_AGENT_FROM_USER, payload: data });

    }
    catch (error) {
        dispatch({ type: WITHDRAW_LIST_FAIL_AGENT_FROM_USER, payload: error.message });
    }
}
//#endregion
//#region Withdraw List Ofarz

const listWithdrawOfarzFromAppSharer = (ofarzPhoneNumber) => async (dispatch) => {

    try {
        dispatch({ type: WITHDRAW_LIST_REQUEST_OFARZ_FROM_APPSHARER, payload: { ofarzPhoneNumber } });
        const { data } = await axios.get(base + "/api/funds/GetAgentWithdrawListFromUser/" + ofarzPhoneNumber);
        dispatch({ type: WITHDRAW_LIST_SUCCESS_OFARZ_FROM_APPSHARER, payload: data });

    }
    catch (error) {
        dispatch({ type: WITHDRAW_LIST_FAIL_OFARZ_FROM_APPSHARER, payload: error.message });
    }
}

const listWithdrawOfarzFromKarrot = (ofarzPhoneNumber) => async (dispatch) => {

    try {
        dispatch({ type: WITHDRAW_LIST_REQUEST_OFARZ_FROM_KARROT, payload: { ofarzPhoneNumber } });
        const { data } = await axios.get(base + "/api/funds/GetAgentWithdrawListFromUser/" + ofarzPhoneNumber);
        dispatch({ type: WITHDRAW_LIST_SUCCESS_OFARZ_FROM_KARROT, payload: data });

    }
    catch (error) {
        dispatch({ type: WITHDRAW_LIST_FAIL_OFARZ_FROM_KARROT, payload: error.message });
    }
}

const listWithdrawOfarzFromCeo = (ofarzPhoneNumber) => async (dispatch) => {

    try {
        dispatch({ type: WITHDRAW_LIST_REQUEST_OFARZ_FROM_CEO, payload: { ofarzPhoneNumber } });
        const { data } = await axios.get(base + "/api/funds/GetAgentWithdrawListFromUser/" + ofarzPhoneNumber);
        dispatch({ type: WITHDRAW_LIST_SUCCESS_OFARZ_FROM_CEO, payload: data });

    }
    catch (error) {
        dispatch({ type: WITHDRAW_LIST_FAIL_OFARZ_FROM_CEO, payload: error.message });
    }
}

//#endregion

//#region Withdraw List AppSharer
const listWithdrawAppSharerToAgent = (appSharerPhoneNumber) => async (dispatch) => {
    try {
        dispatch({ type: WITHDRAW_LIST_REQUEST_APPSHARER_TO_AGENT, payload: { appSharerPhoneNumber } });
        const { data } = await axios.get(base + "/api/funds/GetAppSharerWithdrawListToAgent/" + appSharerPhoneNumber);
        dispatch({ type: WITHDRAW_LIST_SUCCESS_APPSHARER_TO_AGENT, payload: data });
    }
    catch (error) {
        dispatch({ type: WITHDRAW_LIST_FAIL_APPSHARER_TO_AGENT, payload: error.message });
    }
}


const listWithdrawAppSharerToOfarz = (appSharerPhoneNumber) => async (dispatch) => {
    try {
        dispatch({ type: WITHDRAW_LIST_REQUEST_APPSHARER_TO_OFARZ, payload: { appSharerPhoneNumber } });
        const { data } = await axios.get(base + "/api/funds/GetAppSharerWithdrawListToOfarz/" + appSharerPhoneNumber);
        dispatch({ type: WITHDRAW_LIST_SUCCESS_APPSHARER_TO_OFARZ, payload: data });
    }
    catch (error) {
        dispatch({ type: WITHDRAW_LIST_FAIL_APPSHARER_TO_OFARZ, payload: error.message });
    }
}
//#endregion

//#region Withdraw List Karrot


const listWithdrawKarrotToAgent = (karrotPhoneNumber) => async (dispatch) => {
    try {
        dispatch({ type: WITHDRAW_LIST_REQUEST_KARROT_TO_AGENT, payload: { karrotPhoneNumber } });
        const { data } = await axios.get(base + "/api/funds/GetKarrotWithdrawListToAgent/" + karrotPhoneNumber);
        dispatch({ type: WITHDRAW_LIST_SUCCESS_KARROT_TO_AGENT, payload: data });
    }
    catch (error) {
        dispatch({ type: WITHDRAW_LIST_FAIL_KARROT_TO_AGENT, payload: error.message });
    }
}

const listWithdrawKarrotToOfarz = (karrotPhoneNumber) => async (dispatch) => {
    try {
        dispatch({ type: WITHDRAW_LIST_REQUEST_KARROT_TO_OFARZ, payload: { karrotPhoneNumber } });
        const { data } = await axios.get(base + "/api/funds/GetKarrotWithdrawListToOfarz/" + karrotPhoneNumber);
        dispatch({ type: WITHDRAW_LIST_SUCCESS_KARROT_TO_OFARZ, payload: data });
    }
    catch (error) {
        dispatch({ type: WITHDRAW_LIST_FAIL_KARROT_TO_OFARZ, payload: error.message });
    }
}
//#endregion

//#region Withdraw List CEO
const listWithdrawCeoToAgent = (ceoPhoneNumber) => async (dispatch) => {
    try {
        dispatch({ type: WITHDRAW_LIST_REQUEST_CEO_TO_AGENT, payload: { ceoPhoneNumber } });
        const { data } = await axios.get(base + "/api/funds/GetCeoWithdrawListToAgent/" + ceoPhoneNumber);
        dispatch({ type: WITHDRAW_LIST_SUCCESS_CEO_TO_AGENT, payload: data });
    }
    catch (error) {
        dispatch({ type: WITHDRAW_LIST_FAIL_CEO_TO_AGENT, payload: error.message });
    }
}

const listWithdrawCeoToOfarz = (ceoPhoneNumber) => async (dispatch) => {
    try {
        dispatch({ type: WITHDRAW_LIST_REQUEST_CEO_TO_OFARZ, payload: { ceoPhoneNumber } });
        const { data } = await axios.get(base + "/api/funds/GetCeoWithdrawListToOfarz/" + ceoPhoneNumber);
        dispatch({ type: WITHDRAW_LIST_SUCCESS_CEO_TO_OFARZ, payload: data });
    }
    catch (error) {
        dispatch({ type: WITHDRAW_LIST_FAIL_CEO_TO_OFARZ, payload: error.message });
    }
}
//#endregion
//#endregion

//#region Withdraw Money Agent
const withdrawAgentToOfarz = (amount, ofarzPhoneNumber, agentId) => async (dispatch) => {
    try {
        dispatch({ type: WITHDRAW_REQUEST_AGENT_TO_OFARZ, payload: { amount, ofarzPhoneNumber, agentId } });
        const { data } = await axios.post(base + "/api/agent/WithdrawMoneyToOfarz/", { amount, ofarzPhoneNumber, agentId });
        dispatch({ type: WITHDRAW_SUCCESS_AGENT_TO_OFARZ, payload: data });
    }
    catch (error) {
        dispatch({ type: WITHDRAW_FAIL_AGENT_TO_OFARZ, payload: error.message });
    }
}
//#endregion

//#region Withdraw Money App Sharer
const withdrawAppSharerToAgent = (amount, agentPhnNumber, currentUserId) => async (dispatch, getState) => {
    const { userSignIn: { userInfo } } = getState();
    try {
        dispatch({ type: WITHDRAW_REQUEST_APPSHARER_TO_AGENT, payload: { amount, agentPhnNumber, currentUserId } });
        const { data } = await axios.post(base + "/api/appsharer/WithdrawMoneyAppSharerToAgent/", { amount, agentPhnNumber, currentUserId });
        dispatch({ type: WITHDRAW_SUCCESS_APPSHARER_TO_AGENT, payload: data });
    }
    catch (error) {
        dispatch({ type: WITHDRAW_FAIL_APPSHARER_TO_AGENT, payload: error.message });
    }
}
const withdrawAppSharerToOfarz = (amount, ofarzPhnNumber, currentUserId) => async (dispatch, getState) => {
    try {
        dispatch({ type: WITHDRAW_REQUEST_APPSHARER_TO_OFARZ, payload: { amount, ofarzPhnNumber, currentUserId } });
        const { data } = await axios.post(base + "/api/appsharer/WithdrawMoneyAppSharerToOfarz/", { amount, ofarzPhnNumber, currentUserId });
        dispatch({ type: WITHDRAW_SUCCESS_APPSHARER_TO_OFARZ, payload: data });
    }
    catch (error) {
        dispatch({ type: WITHDRAW_FAIL_APPSHARER_TO_OFARZ, payload: error.message });
    }
}
//#endregion

//#region WithdrawMoney Karrot
const withdrawKarrotToAgnet = (amount, agentPhoneNumber, karrotId) => async (dispatch) => {

    try {

        dispatch({ type: WITHDRAW_REQUEST_KARROT_TO_AGENT, payload: { amount, agentPhoneNumber, karrotId } });
        const { data } = await axios.post(base + "/api/karrot/WithdrawMoneyKarrotToAgent/", { amount, agentPhoneNumber, karrotId });
        dispatch({ type: WITHDRAW_SUCCESS_KARROT_TO_AGENT, payload: data });

    }
    catch (error) {
        dispatch({ type: WITHDRAW_FAIL_KARROT_TO_AGENT, payload: error.message });
    }
}
const withdrawKarrotToOfarz = (amount, ofarzPhoneNumber, karrotId) => async (dispatch) => {
    try {
        dispatch({ type: WITHDRAW_REQUEST_KARROT_TO_OFARZ, payload: { amount, ofarzPhoneNumber, karrotId } });
        const { data } = await axios.post(base + "/api/karrot/WithdrawMoneyKarrotToOfarz/", { amount, ofarzPhoneNumber, karrotId });
        dispatch({ type: WITHDRAW_SUCCESS_KARROT_TO_OFARZ, payload: data });
    }
    catch (error) {
        dispatch({ type: WITHDRAW_FAIL_KARROT_TO_OFARZ, payload: error.message });
    }
}

//#endregion

//#region Withdraw Money Ceo
const withdrawCeoToAgent = (amount, agentPhoneNumber, ceoId) => async (dispatch) => {
    try {
        debugger
        dispatch({ type: WITHDRAW_REQUEST_CEO_TO_AGENT, payload: { amount, agentPhoneNumber, ceoId } });
        const { data } = await axios.post(base + "/api/ceo/WithdrawMoneyCeoToAgent/", { amount, agentPhoneNumber, ceoId });
        dispatch({ type: WITHDRAW_SUCCESS_CEO_TO_AGENT, payload: data });
    }
    catch (error) {
        dispatch({ type: WITHDRAW_FAIL_CEO_TO_AGENT, payload: error.message });
    }
}
const withdrawCeoToOfarz = (amount, ofarzPhoneNumber, ceoId) => async (dispatch) => {

    try {
        dispatch({ type: WITHDRAW_REQUEST_CEO_TO_OFARZ, payload: { amount, ofarzPhoneNumber, ceoId } });
        const { data } = await axios.post(base + "/api/ceo/WithdrawMoneyCeoToOfarz/", { amount, ofarzPhoneNumber, ceoId });
        dispatch({ type: WITHDRAW_SUCCESS_CEO_TO_OFARZ, payload: data });
    }
    catch (error) {
        dispatch({ type: WITHDRAW_FAIL_CEO_TO_OFARZ, payload: error.message });
    }
}
//#endregion



//#region Export
export {
    listWithdraw,

    listWithdrawAgentToOfarz,
    listWithdrawAgentFromUser,

    listWithdrawOfarzFromAppSharer,
    listWithdrawOfarzFromKarrot,
    listWithdrawOfarzFromCeo,

    listWithdrawAppSharerToAgent,
    listWithdrawAppSharerToOfarz,

    listWithdrawKarrotToAgent,
    listWithdrawKarrotToOfarz,

    listWithdrawCeoToAgent,
    listWithdrawCeoToOfarz,

    withdrawAgentToOfarz,

    withdrawAppSharerToAgent,
    withdrawAppSharerToOfarz,

    withdrawCeoToAgent,
    withdrawCeoToOfarz,

    withdrawKarrotToAgnet,
    withdrawKarrotToOfarz


}

//#endregion