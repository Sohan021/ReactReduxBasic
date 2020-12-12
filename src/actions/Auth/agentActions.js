import axios from "axios";
import Cookie from 'js-cookie';
import base from "../../components/common/services/config";
import {

    AGENT_REGISTER_FAIL,
    AGENT_REGISTER_REQUEST,
    AGENT_REGISTER_SUCCESS,

    AGENT_PROFILE_UPDATE_FAIL,
    AGENT_PROFILE_UPDATE_REQUEST,
    AGENT_PROFILE_UPDATE_SUCCESS,

    AGENT_LIST_REQUEST,
    AGENT_LIST_SUCCESS,
    AGENT_LIST_FAIL,
    FIND_AGENT_REQUEST,
    FIND_AGENT_SUCCESS,
    FIND_AGENT_FAIL
} from "../../constants/Auth/agentConstants";

const agentsList = () => async (dispatch) => {
    try {
        dispatch({ type: AGENT_LIST_REQUEST });
        const { data } = await axios.get(base + "/api/agent/GetAllAgents");
        dispatch({ type: AGENT_LIST_SUCCESS, payload: data });
    }
    catch (error) {
        dispatch({ type: AGENT_LIST_FAIL, payload: error.message });
    }
}

const agentUpdate = (userId, firstname, mobilenumber, password) => async (dispatch, getState) => {
    const { agentSignin: { agentInfo } } = getState();
    dispatch({ type: AGENT_PROFILE_UPDATE_REQUEST, payload: { userId, firstname, mobilenumber, password } });
    try {
        const { data } = await axios.put(base + "/api/users/" + userId,
            { firstname, mobilenumber, password }, {
            headers: {
                Authorization: 'Bearer ' + agentInfo.token
            }
        });
        dispatch({ type: AGENT_PROFILE_UPDATE_SUCCESS, payload: data });
        Cookie.set('agentInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({ type: AGENT_PROFILE_UPDATE_FAIL, payload: error.message });
    }
}


const agentRegister = (firstname, lastname, mobilenumber, nid_number, postalcode, profilephoto, password, confirmpassword) => async (dispatch) => {

    dispatch({
        type: AGENT_REGISTER_REQUEST, payload: { firstname, lastname, mobilenumber, nid_number, profilephoto, postalcode, password, confirmpassword }
    });

    try {
        const { data } = await axios.post(base + "/api/agent/addagent", { firstname, lastname, mobilenumber, nid_number, postalcode, profilephoto, password, confirmpassword });

        dispatch({ type: AGENT_REGISTER_SUCCESS, payload: data });
        Cookie.set('agentInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({ type: AGENT_REGISTER_FAIL, payload: error.message });
    }
}


const agentFind = (agentCode) => async (dispatch) => {

    try {
        dispatch({ type: FIND_AGENT_REQUEST, payload: agentCode });
        const { data } = await axios.get(base + "/api/agent/FindAgent/" + agentCode )
        dispatch({ type: FIND_AGENT_SUCCESS, payload: data });
    }
    catch (error) {
        dispatch({ type: FIND_AGENT_FAIL, payload: error.message })
    }
}


export {
    agentsList,
    agentUpdate,
    agentRegister,
    agentFind
};