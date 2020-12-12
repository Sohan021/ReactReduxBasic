import axios from 'axios'
import base from '../../components/common/services/config';
import {
    PRODUCT_DELETE_AGENT_FAIL,
    PRODUCT_DELETE_AGENT_REQUEST,
    PRODUCT_DELETE_AGENT_SUCCESS,
    PRODUCT_DELETE_FAIL,
    PRODUCT_DELETE_REQUEST,
    PRODUCT_DELETE_SUCCESS,
    PRODUCT_DETAILS_FAIL,

    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_GALERY_FOR_AGENT_AND_CUSTOMER_FAIL,
    PRODUCT_GALERY_FOR_AGENT_AND_CUSTOMER_REQUEST,
    PRODUCT_GALERY_FOR_AGENT_AND_CUSTOMER_SUCCESS,
    PRODUCT_LIST_FAIL,

    PRODUCT_LIST_FOR_APPSHARER_AND_SHOPER_FAIL,
    PRODUCT_LIST_FOR_APPSHARER_AND_SHOPER_REQUEST,
    PRODUCT_LIST_FOR_APPSHARER_AND_SHOPER_SUCCESS,

    PRODUCT_LIST_PRODUCTTYPE_CATEGORY_AGENT_FAIL,
    PRODUCT_LIST_PRODUCTTYPE_CATEGORY_AGENT_REQUEST,
    PRODUCT_LIST_PRODUCTTYPE_CATEGORY_AGENT_SUCCESS,

    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_SAVE_FAIL,

    PRODUCT_SAVE_REQUEST,
    PRODUCT_SAVE_SUCCESS,

    PRODUCT_UPDATE_REQUEST,
    PRODUCT_UPDATE_SUCCESS
} from '../../constants/Regular/productConstants';

const listProducts = () => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST });
        const { data } = await axios.get(base + "/api/products/GetAllAsync");
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });

    }
    catch (error) {
        dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
    }
}

const listProductsAgentAndCustomer = (agentCode) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_GALERY_FOR_AGENT_AND_CUSTOMER_REQUEST, payload: { agentCode } });
        const { data } = await axios.get(base + "/api/products/GetProductsForAgentAndCustomer/" + agentCode);
        dispatch({ type: PRODUCT_GALERY_FOR_AGENT_AND_CUSTOMER_SUCCESS, payload: data });

    }
    catch (error) {
        dispatch({ type: PRODUCT_GALERY_FOR_AGENT_AND_CUSTOMER_FAIL, payload: error.message });
    }
}

const listProductsByProductTypeCategory = (productTypeId, categoryId, subCategoryId) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST_PRODUCTTYPE_CATEGORY_AGENT_REQUEST });
        const { data } = await axios.get(base + "/api/products/getproductsbyproducttypeandcategory/" + productTypeId + "/" + categoryId + "/" + subCategoryId);
        dispatch({ type: PRODUCT_LIST_PRODUCTTYPE_CATEGORY_AGENT_SUCCESS, payload: data });
    }
    catch (error) {
        dispatch({ type: PRODUCT_LIST_PRODUCTTYPE_CATEGORY_AGENT_FAIL, payload: error.message });
    }
}

const listProductsForAppSharerAndShoper = (agentCode, productTypeId, categoryId, subCategoryId) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST_FOR_APPSHARER_AND_SHOPER_REQUEST });
        const { data } = await axios.get(base + "/api/products/GetProductsForCustomer/" + agentCode + "/" + productTypeId + "/" + categoryId + "/" + subCategoryId);
        dispatch({ type: PRODUCT_LIST_FOR_APPSHARER_AND_SHOPER_SUCCESS, payload: data });

    }
    catch (error) {
        dispatch({ type: PRODUCT_LIST_FOR_APPSHARER_AND_SHOPER_FAIL, payload: error.message });
    }
}


const saveProduct = (product) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_SAVE_REQUEST, payload: product });
        const { data } = await axios.post(base + '/api/products/postasync', product)
        dispatch({ type: PRODUCT_SAVE_SUCCESS, payload: data });
    } catch (error) {

        dispatch({ type: PRODUCT_SAVE_FAIL, payload: error.message });
    }
}

const updateProduct = (product, productId) => async (dispatch) => {

    try {
        dispatch({ type: PRODUCT_UPDATE_REQUEST, payload: product });
        const { data } = await axios.put(base + '/api/products/putasync/' + productId, product)
        dispatch({ type: PRODUCT_UPDATE_SUCCESS, payload: data });
    } catch (error) {

        dispatch({ type: PRODUCT_SAVE_FAIL, payload: error.message });
    }
}

const detailsProduct = (productId) => async (dispatch) => {

    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId });
        const { data } = await axios.get(base + "/api/products/getoneasync/" + productId)
        dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
    }
    catch (error) {
        dispatch({ type: PRODUCT_DETAILS_FAIL, payload: error.message })
    }
}

const deleteProduct = (id) => async (dispatch, getState) => {

    try {
        dispatch({ type: PRODUCT_DELETE_REQUEST, payload: id });
        const { data } = await axios.delete(base + "/api/products/deleteasync/" + id)
        dispatch({ type: PRODUCT_DELETE_SUCCESS, payload: data, success: true });
    } catch (error) {
        dispatch({ type: PRODUCT_DELETE_FAIL, payload: error.message });

    }
}

const deleteAgentProduct = (id) => async (dispatch) => {
    debugger
    try {
        dispatch({ type: PRODUCT_DELETE_AGENT_REQUEST, payload: id });
        const { data } = await axios.delete(base + "/api/products/RemoveAgentProduct/" + id)
        dispatch({ type: PRODUCT_DELETE_AGENT_SUCCESS, payload: data, success: true });
    } catch (error) {
        dispatch({ type: PRODUCT_DELETE_AGENT_FAIL, payload: error.message });

    }
}

export {
    listProducts,
    listProductsAgentAndCustomer,
    listProductsByProductTypeCategory,
    listProductsForAppSharerAndShoper,
    detailsProduct,
    saveProduct,
    updateProduct,
    deleteProduct,
    deleteAgentProduct
}


