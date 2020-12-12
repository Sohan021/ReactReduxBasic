import axios from 'axios'
import base from '../../components/common/services/config';
import {
    PRODUCTTYPE_DELETE_FAIL,
    PRODUCTTYPE_DELETE_REQUEST,
    PRODUCTTYPE_DELETE_SUCCESS,
    PRODUCTTYPE_DETAILS_FAIL,
    PRODUCTTYPE_DETAILS_REQUEST,
    PRODUCTTYPE_DETAILS_SUCCESS,
    PRODUCTTYPE_LIST_FAIL,
    PRODUCTTYPE_LIST_REQUEST,
    PRODUCTTYPE_LIST_SUCCESS,
    PRODUCTTYPE_SAVE_FAIL,
    PRODUCTTYPE_SAVE_REQUEST,
    PRODUCTTYPE_SAVE_SUCCESS,
    PRODUCTTYPE_UPDATE_REQUEST,
    PRODUCTTYPE_UPDATE_SUCCESS
} from '../../constants/Regular/productTypeConstants';

const listProducttypes = () => async (dispatch) => {
 
    try {
        dispatch({ type: PRODUCTTYPE_LIST_REQUEST });
        const { data } = await axios.get(base + "/api/producttypes");
        dispatch({ type: PRODUCTTYPE_LIST_SUCCESS, payload: data });

    }
    catch (error) {
        dispatch({ type: PRODUCTTYPE_LIST_FAIL, payload: error.message });
    }
}


const saveProductType = (producType) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCTTYPE_SAVE_REQUEST, payload: producType });
        const { data } = await axios.post(base + '/api/producttypes', producType)
        dispatch({ type: PRODUCTTYPE_SAVE_SUCCESS, payload: data });
    } catch (error) {

        dispatch({ type: PRODUCTTYPE_SAVE_FAIL, payload: error.message });
    }
}

const updateProductType = (productType, productTypeId) => async (dispatch) => {

    try {
        dispatch({ type: PRODUCTTYPE_UPDATE_REQUEST, payload: productType });
        const { data } = await axios.put(base + '/api/producttypes/' + productTypeId, productType)
        dispatch({ type: PRODUCTTYPE_UPDATE_SUCCESS, payload: data });
    } catch (error) {

        dispatch({ type: PRODUCTTYPE_SAVE_FAIL, payload: error.message });
    }
}

const detailsProductType = (productTypeId) => async (dispatch) => {

    try {
        dispatch({ type: PRODUCTTYPE_DETAILS_REQUEST, payload: productTypeId });
        const { data } = await axios.get(base + "/api/producttypes/" + productTypeId)
        dispatch({ type: PRODUCTTYPE_DETAILS_SUCCESS, payload: data });
    }
    catch (error) {
        dispatch({ type: PRODUCTTYPE_DETAILS_FAIL, payload: error.message })
    }
}

const deleteProductType = (productTypeId) => async (dispatch, getState) => {

    try {
        dispatch({ type: PRODUCTTYPE_DELETE_REQUEST, payload: productTypeId });
        const { data } = await axios.delete(base + "/api/producttypes/" + productTypeId)
        dispatch({ type: PRODUCTTYPE_DELETE_SUCCESS, payload: data, success: true });
    } catch (error) {
        dispatch({ type: PRODUCTTYPE_DELETE_FAIL, payload: error.message });

    }
}

export { listProducttypes, detailsProductType, saveProductType, updateProductType, deleteProductType }


