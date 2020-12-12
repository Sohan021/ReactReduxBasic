import axios from "axios";
import Cookie from 'js-cookie';
import base from "../../components/common/services/config";
import {

    APPSHARER_REGISTER_FAIL,
    APPSHARER_REGISTER_REQUEST,
    APPSHARER_REGISTER_SUCCESS,

    APPSHARER_PROFILE_UPDATE_FAIL,
    APPSHARER_PROFILE_UPDATE_REQUEST,
    APPSHARER_PROFILE_UPDATE_SUCCESS,

    APPSHARER_DOWNLINE_LIST_REQUEST,
    APPSHARER_DOWNLINE_LIST_SUCCESS,
    APPSHARER_DOWNLINE_LIST_FAIL,
    APPSHARER_PROFILE_DETAILS_REQUEST,
    APPSHARER_PROFILE_DETAILS_SUCCESS,
    APPSHARER_PROFILE_DETAILS_FAIL
} from "../../constants/Auth/appSharerConstants";

const appSharerUpdate = (currentUser, firstname, lastName, profilePhoto, nominee_PhonNumber, nominee_Name,
    nominee_Relation, countryId, divisionId, districtId, upozilaId, unionOrWardId, postalCode) => async (dispatch, getState) => {

        dispatch({
            type: APPSHARER_PROFILE_UPDATE_REQUEST, payload: {
                currentUser, firstname, lastName, profilePhoto, nominee_PhonNumber, nominee_Name,
                nominee_Relation, countryId, divisionId, districtId, upozilaId, unionOrWardId, postalCode
            }
        });
        try {
            const { data } = await axios.put(base + "/api/appsharer/AppSharerProfileUpdate/" + currentUser, {
                currentUser, firstname, lastName, profilePhoto, nominee_PhonNumber, nominee_Name,
                nominee_Relation, countryId, divisionId, districtId, upozilaId, unionOrWardId, postalCode
            });

            Cookie.set('userInfo', JSON.stringify(data));
            dispatch({ type: APPSHARER_PROFILE_UPDATE_SUCCESS, payload: data });
        } catch (error) {
            dispatch({ type: APPSHARER_PROFILE_UPDATE_FAIL, payload: error.message });
        }
    }

const appSharerProfileDetails = (currentUserId) => async (dispatch) => {
    //debugger
    try {
        dispatch({ type: APPSHARER_PROFILE_DETAILS_REQUEST, payload: currentUserId });
        const { data } = await axios.get(base + "/api/appsharer/GetProfileDetails/" + currentUserId)
        dispatch({ type: APPSHARER_PROFILE_DETAILS_SUCCESS, payload: data });
    }
    catch (error) {
        dispatch({ type: APPSHARER_PROFILE_DETAILS_FAIL, payload: error.message })
    }
}


const appSharerRegister = (mobilenumber, nid_Number, currentuser, password, confirmpassword) => async (dispatch, getState) => {
    const { userSignIn: { userInfo } } = getState();
    dispatch({
        type: APPSHARER_REGISTER_REQUEST, payload: { mobilenumber, nid_Number, currentuser, password, confirmpassword }
    });
    try {
        const { data } = await axios.post(base + "/api/appsharer/adddownline", { mobilenumber, nid_Number, currentuser, password, confirmpassword }, {
            headers: {
                Authorization: 'Bearer ' + userInfo.item3
            }
        });
        Cookie.set('userInfo', JSON.stringify(data));
        dispatch({ type: APPSHARER_REGISTER_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: APPSHARER_REGISTER_FAIL, payload: error.message });
    }
}
const appSharerFirstDownlineList = (id) => async (dispatch) => {

    try {
        dispatch({ type: APPSHARER_DOWNLINE_LIST_REQUEST, payload: id });
        const { data } = await axios.get(base + "/api/appsharer/GetDownlineList/" + id);
        dispatch({ type: APPSHARER_DOWNLINE_LIST_SUCCESS, payload: data });
    }
    catch (error) {
        dispatch({ type: APPSHARER_DOWNLINE_LIST_FAIL, payload: error.message })
    }
}
export {
    appSharerUpdate,
    appSharerRegister,
    appSharerFirstDownlineList,
    appSharerProfileDetails
};