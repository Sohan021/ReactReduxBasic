import axios from "axios";
import Cookie from 'js-cookie';
import base from "../../components/common/services/config";
import {
    OFARZ_REGISTER_FAIL,
    OFARZ_REGISTER_REQUEST,
    OFARZ_REGISTER_SUCCESS
} from "../../constants/Auth/ofarzConstants";



const ofarzRegister = (name, mobileNumber, email, karrotLogo, password, confirmpassword) => async (dispatch) => {

    dispatch({
        type: OFARZ_REGISTER_REQUEST, payload: { name, mobileNumber, email, karrotLogo, password, confirmpassword }
    });

    try {
        const { data } = await axios.post(base + "/api/ofarz/addofarz", { name, mobileNumber, email, karrotLogo, password, confirmpassword });
        dispatch({ type: OFARZ_REGISTER_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: OFARZ_REGISTER_FAIL, payload: error.message });
    }
}


export { ofarzRegister };