import axios from "axios";
import Cookie from 'js-cookie';
import base from "../../components/common/services/config";
import {
    KARROT_PROFILE_DETAILS_FAIL,
    KARROT_PROFILE_DETAILS_REQUEST,
    KARROT_PROFILE_DETAILS_SUCCESS,

    KARROT_PROFILE_UPDATE_FAIL,
    KARROT_PROFILE_UPDATE_REQUEST,
    KARROT_PROFILE_UPDATE_SUCCESS,

    KARROT_REGISTER_FAIL,
    KARROT_REGISTER_REQUEST,
    KARROT_REGISTER_SUCCESS
} from "../../constants/Auth/karrotConstants";

const karrotProfileDetail = (currentUserId) => async (dispatch, getState) => {
    const { userSignIn: { userInfo } } = getState();
    try {
        dispatch({ type: KARROT_PROFILE_DETAILS_REQUEST, payload: currentUserId });
        const { data } = await axios.get(base + "/api/appsharer/GetProfileDetails/" + currentUserId, {
            headers: {
                Authorization: 'Bearer ' + userInfo.item3
            }
        });
        Cookie.set('userInfo', JSON.stringify(userInfo));

        dispatch({ type: KARROT_PROFILE_DETAILS_SUCCESS, payload: data });
    }
    catch (error) {
        dispatch({ type: KARROT_PROFILE_DETAILS_FAIL, payload: error.message })
    }
}



const karrotUpdate = (userId, firstname, mobilenumber, password) => async (dispatch, getState) => {
    const { agentSignin: { agentInfo } } = getState();
    dispatch({ type: KARROT_PROFILE_UPDATE_REQUEST, payload: { userId, firstname, mobilenumber, password } });
    try {
        const { data } = await axios.put(base + "/api/users/" + userId,
            { firstname, mobilenumber, password }, {
            headers: {
                Authorization: 'Bearer ' + agentInfo.token
            }
        });
        dispatch({ type: KARROT_PROFILE_UPDATE_SUCCESS, payload: data });
        Cookie.set('agentInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({ type: KARROT_PROFILE_UPDATE_FAIL, payload: error.message });
    }
}


const karrotRegister = (name, mobileNumber, email, karrotLogo, password, confirmpassword) => async (dispatch) => {

    dispatch({
        type: KARROT_REGISTER_REQUEST, payload: { name, mobileNumber, email, karrotLogo, password, confirmpassword }
    });

    try {
        const { data } = await axios.post(base + "/api/karrot/addkarrot", { name, mobileNumber, email, karrotLogo, password, confirmpassword });
        dispatch({ type: KARROT_REGISTER_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: KARROT_REGISTER_FAIL, payload: error.message });
    }
}


export { karrotProfileDetail, karrotUpdate, karrotRegister };