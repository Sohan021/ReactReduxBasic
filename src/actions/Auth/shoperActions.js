import Axios from "axios";
import Cookie from 'js-cookie';
import base from "../../components/common/services/config";
import {
    SHOPER_REGISTER_FAIL,
    SHOPER_REGISTER_REQUEST,
    SHOPER_REGISTER_SUCCESS,
} from "../../constants/Auth/shoperConstants";

const shoperRegister = (firstname, lastname, mobilenumber, password, confirmpassword) => async (dispatch) => {

    dispatch({
        type: SHOPER_REGISTER_REQUEST, payload: { firstname, lastname, mobilenumber, password, confirmpassword }
    });

    try {
        const { data } = await Axios.post(base + "/api/shoper/shoperregistration", { firstname, lastname, mobilenumber, password, confirmpassword });
        dispatch({ type: SHOPER_REGISTER_SUCCESS, payload: data });
        Cookie.set('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({ type: SHOPER_REGISTER_FAIL, payload: error.message });
    }
}


export { shoperRegister };