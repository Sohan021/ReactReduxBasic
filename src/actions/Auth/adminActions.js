import Axios from "axios";
import Cookie from 'js-cookie';
import base from "../../components/common/services/config";
import {

    ADMIN_PASSWORD_UPDATE_FAIL,
    ADMIN_PASSWORD_UPDATE_REQUEST,
    ADMIN_PASSWORD_UPDATE_SUCCESS,
    ADMIN_REGISTER_FAIL,
    ADMIN_REGISTER_REQUEST,
    ADMIN_REGISTER_SUCCESS, S,
    ADMIN_PROFILE_UPDATE_FAIL,
    ADMIN_PROFILE_UPDATE_REQUEST,
    ADMIN_PROFILE_UPDATE_SUCCESS,
    ADMIN_PROFILE_DETAILS_REQUEST,
    ADMIN_PROFILE_DETAILS_SUCCESS,
    ADMIN_PROFILE_DETAILS_FAIL
} from "../../constants/Auth/adminConstants";

const adminUpdate = (currentuser, firstname, lastname, profilephoto, email, mobilenumber) => async (dispatch, getState) => {
    const { adminSignin: { adminInfo } } = getState();
    dispatch({
        type: ADMIN_PROFILE_UPDATE_REQUEST, payload: { currentuser, firstname, lastname, profilephoto, email, mobilenumber }
    });

    try {
        const { data } = await Axios.put(base + "/api/admin/adminprofileUpdate",
            { currentuser, firstname, lastname, profilephoto, email, mobilenumber }, {
            headers: {
                Authorization: 'Bearer ' + adminInfo.item2
            }
        });
        dispatch({ type: ADMIN_PROFILE_UPDATE_SUCCESS, payload: data });
        Cookie.set('adminInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({ type: ADMIN_PROFILE_UPDATE_FAIL, payload: error.message });
    }
}

const adminPasswordUpdate = (currentuserId, currentPassword, newPassword, confirmPassword) => async (dispatch, getState) => {
    const { userSignIn: { userInfo } } = getState();
    dispatch({
        type: ADMIN_PASSWORD_UPDATE_REQUEST, payload: { currentuserId, currentPassword, newPassword, confirmPassword }
    });
    try {

        const { data } = await Axios.put(base + "/api/admin/changepassword",
            { currentuserId, currentPassword, newPassword, confirmPassword });
        dispatch({ type: ADMIN_PASSWORD_UPDATE_SUCCESS, payload: data });
        Cookie.set('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({ type: ADMIN_PASSWORD_UPDATE_FAIL, payload: error.message });
    }
}


const adminProfileDetail = (currentuserId) => async (dispatch, getState) => {

    try {
        dispatch({ type: ADMIN_PROFILE_DETAILS_REQUEST, payload: currentuserId });
        const { data } = await Axios.get(base + "/api/admin/adminprofile/" + currentuserId);
        dispatch({ type: ADMIN_PROFILE_DETAILS_SUCCESS, payload: data });
        Cookie.set('adminInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({ type: ADMIN_PROFILE_DETAILS_FAIL, payload: error.message });
    }
}


const adminRegister = (firstname, lastname, mobilenumber, nid_number, email, postalcode, profilephoto, countryId, divisionId, districtId, upozilaId, unionOrWardId, password, confirmpassword) => async (dispatch, getState) => {

    dispatch({
        type: ADMIN_REGISTER_REQUEST, payload: { firstname, lastname, mobilenumber, nid_number, email, postalcode, profilephoto, countryId, divisionId, districtId, upozilaId, unionOrWardId, password, confirmpassword }
    });
    try {
        const { data } = await Axios.post(base + "/api/admin/adminregistration", { firstname, lastname, mobilenumber, nid_number, email, postalcode, profilephoto, countryId, divisionId, districtId, upozilaId, unionOrWardId, password, confirmpassword });
        dispatch({ type: ADMIN_REGISTER_SUCCESS, payload: data });
        Cookie.set('adminInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({ type: ADMIN_REGISTER_FAIL, payload: error.message });
    }
}

export { adminUpdate, adminRegister, adminPasswordUpdate, adminProfileDetail };