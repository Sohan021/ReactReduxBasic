import axios from "axios";
import Cookie from 'js-cookie';
import base from "../../components/common/services/config";
import {
    CEO_PROFILE_DETAILS_FAIL,
    CEO_PROFILE_DETAILS_REQUEST,
    CEO_PROFILE_DETAILS_SUCCESS,

    CEO_PROFILE_UPDATE_FAIL,
    CEO_PROFILE_UPDATE_REQUEST,
    CEO_PROFILE_UPDATE_SUCCESS,

    CEO_REGISTER_FAIL,
    CEO_REGISTER_REQUEST,
    CEO_REGISTER_SUCCESS
} from "../../constants/Auth/ceoConstants";

const ceoProfileDetail = (currentUserId) => async (dispatch, getState) => {
    const { userSignIn: { userInfo } } = getState();
    try {
        dispatch({ type: CEO_PROFILE_DETAILS_REQUEST, payload: currentUserId });
        const { data } = await axios.get(base + "/api/appsharer/GetProfileDetails/" + currentUserId, {
            headers: {
                Authorization: 'Bearer ' + userInfo.item3
            }
        });
        Cookie.set('userInfo', JSON.stringify(userInfo));

        dispatch({ type: CEO_PROFILE_DETAILS_SUCCESS, payload: data });
    }
    catch (error) {
        dispatch({ type: CEO_PROFILE_DETAILS_FAIL, payload: error.message })
    }
}



const ceoUpdate = (userId, firstname, mobilenumber, password) => async (dispatch, getState) => {
    const { agentSignin: { agentInfo } } = getState();
    dispatch({ type: CEO_PROFILE_UPDATE_REQUEST, payload: { userId, firstname, mobilenumber, password } });
    try {
        const { data } = await axios.put(base + "/api/users/" + userId,
            { firstname, mobilenumber, password }, {
            headers: {
                Authorization: 'Bearer ' + agentInfo.token
            }
        });
        dispatch({ type: CEO_PROFILE_UPDATE_SUCCESS, payload: data });
        Cookie.set('agentInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({ type: CEO_PROFILE_UPDATE_FAIL, payload: error.message });
    }
}


const ceoRegister = (name, mobileNumber, email, profilephoto, password, confirmpassword) => async (dispatch) => {
    dispatch({
        type: CEO_REGISTER_REQUEST, payload: { name, mobileNumber, email, profilephoto, password, confirmpassword }
    });
    try {
        const { data } = await axios.post(base + "/api/ceo/addceo", { name, mobileNumber, email, profilephoto, password, confirmpassword });
        dispatch({ type: CEO_REGISTER_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: CEO_REGISTER_FAIL, payload: error.message });
    }
}


export { ceoProfileDetail, ceoUpdate, ceoRegister };