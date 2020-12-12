import axios from 'axios';
import Cookie from 'js-cookie';
import base from '../../components/common/services/config';
import {
    SIGNIN_REQUEST,
    SIGNIN_SUCCESS,
    SIGNIN_FAIL, LOGOUT
}
    from "../../constants/Auth/signInConstants";

const SignIn = (mobilenumber, password) => async (dispatch, getState) => {
    const { userSignIn: { userInfo } } = getState();
    dispatch({ type: SIGNIN_REQUEST, payload: { mobilenumber, password } });
    try {

        const { data } = await axios.post(base + "/api/admin/signin", { mobilenumber, password });
        Cookie.set('userInfo', JSON.stringify(data));

        dispatch({ type: SIGNIN_SUCCESS, payload: data });


    } catch (error) {
        dispatch({ type: SIGNIN_FAIL, payload: error.message });
    }
}

const SignOut = () => (dispatch) => {
    Cookie.remove("userInfo");
    dispatch({ type: LOGOUT })
}

export { SignIn, SignOut }