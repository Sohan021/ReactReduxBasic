//#region Import
import {
    createStore,
    combineReducers,
    applyMiddleware,
    compose
} from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import Cookie from 'js-cookie';
import {
    categoryDeleteReducer,
    categoryListReducer,
    categoryUpdateReducer,
    categorySaveReducer,
    categoryDetailsReducer
} from './reducers/Regular/categoryReducers';
import {
    productTypeDeleteReducer,
    productTypeDetailsReducer,
    productTypeListReducer,
    productTypeSaveReducer,
    productTypeUpdateReducer
} from './reducers/Regular/productTypeReducers';
import {
    productDeleteAgentReducer,
    productDeleteReducer,
    productDetailsReducer,
    productLisForAgentAndCustomerReducer,
    productListByProductTypeCategoryReducer,
    productListForAppSharerAndShoperReducer,
    productListReducer,
    productSaveReducer,
    productUpdateReducer
} from './reducers/Regular/productReducers';
import {
    appSharerAddDownlineReducer,
    appSharerGetFirstDownlineListReducer,
    appSharerProfileDetailsReducer,
    appSharerUpdateReducer
} from './reducers/Auth/appSharerReducers';
import { cartReducer } from './reducers/Regular/cartReducers';
import {
    roleDeleteReducer,
    roleDetailsReducer,
    roleListReducer,
    roleSaveReducer,
    roleUpdateReducer
} from './reducers/Auth/applicationRoleReducers';
import {
    adminProfileDetailsReducer,
    adminRegistrationReducer,
    adminUpdatePasswordReducer,
    adminUpdateReducer
} from './reducers/Auth/adminReducers';
import {
    moderatorAddReducer,
    moderatorUpdateReducer
} from './reducers/Auth/moderatorReducers';
import {
    agentAddReducer,
    agentFindReducer,
    agentListReducer,
    agentUpdateReducer
} from './reducers/Auth/agentReducers';
import {
    shoperRegistrationReducer,
} from './reducers/Auth/shoperReducers';
import {
    countryDeleteReducer,
    countryDetailsReducer,
    countryListReducer,
    countrySaveReducer,
    countryUpdateReducer
} from './reducers/Area/countryReducers';
import {
    divisionDeleteReducer,
    divisionDetailsReducer,
    divisionListReducer,
    divisionSaveReducer,
    divisionUpdateReducer
} from './reducers/Area/divisionReducers';
import {
    districtDeleteReducer,
    districtDetailsReducer,
    districtListReducer,
    districtSaveReducer,
    districtUpdateReducer
} from './reducers/Area/districtReducers';
import {
    upozilaDeleteReducer,
    upozilaDetailsReducer,
    upozilaListReducer,
    upozilaSaveReducer,
    upozilaUpdateReducer
} from './reducers/Area/upozilaReducers';
import {
    unionDeleteReducer,
    unionDetailsReducer,
    unionListReducer,
    unionSaveReducer,
    unionUpdateReducer
} from './reducers/Area/unionOrWardReducers';
import {
    marketDeleteReducer,
    marketDetailsReducer,
    marketListReducer,
    marketSaveReducer,
    marketUpdateReducer
} from './reducers/Area/marketReducers';
import {
    areaCodeListReducerad,
    countryListReducerad,
    districtListReducerad,
    divisionListReducerad,
    marketListReducerad,
    unionListReducerad,
    upozilaListReducerad
} from './reducers/Area/addressReducers';
import {
    paymentTypeDeleteReducer,
    paymentTypeDetailsReducer,
    paymentTypeListReducer,
    paymentTypeSaveReducer,
    paymentTypeUpdateReducer
} from './reducers/Fund/paymentTypeReducers';
import {
    paymentListAgentReducer,
    paymentListAppSharerReducer,
    paymentListBackShoppingOfferAgentReducer,
    paymentListBackShoppingOfferAppSharerReducer,
    paymentListBackShoppingOfferReducer,
    paymentListBackShoppingOfferShoperReducer,
    paymentListBackShoppingPromotionalAgentReducer,
    paymentListBackShoppingPromotionalAppSharerReducer,
    paymentListBackShoppingPromotionalReducer,
    paymentListMainAccountOfferAgentReducer,
    paymentListMainAccountOfferAppSharerReducer,
    paymentListMainAccountOfferReducer,
    paymentListMainAccountPromotionalAgentReducer,
    paymentListMainAccountPromotionalAppSharerReducer,
    paymentListMainAccountPromotionalReducer,
    paymentListReducer, paymentListShoperReducer,
    paymentListTableCashOfferAgentReducer,
    paymentListTableCashOfferAppSharerReducer,
    paymentListTableCashOfferReducer,
    paymentListTableCashOfferShoperReducer,
    paymentListTableCashPromotionalAgentReducer,
    paymentListTableCashPromotionalAppSharerReducer,
    paymentListTableCashPromotionalReducer,
    paymentSubmitBackShoppingOfferReducer,
    paymentSubmitBackShoppingPromotionalReducer,
    paymentSubmitMainAccountOfferReducer,
    paymentSubmitMainAccountPromotionalReducer,
    paymentSubmitShoperBackshoppingOfferReducer,
    paymentSubmitShoperTableCashOfferReducer,
    paymentSubmitTableCashOfferReducer,
    paymentSubmitTableCashPromotionalReducer
} from './reducers/Fund/paymentReducers';
import {
    withdrawAgentToOfarzReducer,
    withdrawAppSharerToAgentReducer,
    withdrawAppSharerToOfarzReducer,
    withdrawCeoToAgentReducer,
    withdrawCeoToOfarzReducer,
    withdrawKarrotToAgentReducer,
    withdrawKarrotToOfarzReducer,
    withdrawListAgentFromUserReducer,
    withdrawListAgentToOfarzReducer,
    withdrawListAppSharerToAgentReducer,
    withdrawListAppSharerToOfarzReducer,
    withdrawListCeoToAgentReducer,
    withdrawListCeoToOfarzReducer,
    withdrawListKarrotToAgentReducer,
    withdrawListKarrotToOfarzReducer,
    withdrawListOfarzFromAppSharerReducer,
    withdrawListOfarzFromCeoReducer,
    withdrawListOfarzFromKarrotReducer,
    withdrawListReducer
} from './reducers/Fund/withdrawReducers';
import {
    fundAgentReducer,
    fundAppSharerReducer,
    fundCEOReducer,
    fundKarrotReducer,
    fundListAgentReducer,
    fundListAppSharerReducer,
    fundListCeoReducer,
    fundListKarrotReducer,
    fundListOfarzReducer,
    fundListShoperReducer,
    fundOfarzReducer,
    fundShoperReducer
} from './reducers/Fund/fundReducers';
import {
    SigninReducer
} from './reducers/Auth/signInReducers';
import {
    karrotAddReducer,
    karrotProfileDetailsReducer,
    karrotUpdateReducer
} from './reducers/Auth/karrotReducers';
import {
    ceoAddReducer,
    ceoProfileDetailsReducer,
    ceoUpdateReducer
} from './reducers/Auth/ceoReducers';
import { ofarzAddReducer } from './reducers/Auth/ofarzReducers';
import {
    subCategoryDeleteReducer,
    subCategoryDetailsReducer,
    subCategoryListReducer,
    subCategorySaveReducer,
    subCategoryUpdateReducer
} from './reducers/Regular/subCategoryReducers';
import {
    myOrderListReducer,
    orderCreateReducer,
    orderDeleteReducer,
    orderDetailsReducer,
    orderListReducer,
    orderPayReducer
} from './reducers/Regular/orderReducers';
//#endregion

const cartItems = Cookie.getJSON('cartItems') || [];
const userInfo = Cookie.getJSON('userInfo') || null;

const initialState = {
    cart: { cartItems },
    userSignIn: { userInfo },
};

const reducer = combineReducers({
    //#region Area
    countryList: countryListReducer,
    countryDetails: countryDetailsReducer,
    countrySave: countrySaveReducer,
    countryUpdate: countryUpdateReducer,
    countryDelete: countryDeleteReducer,

    divisionList: divisionListReducer,
    divisionDetails: divisionDetailsReducer,
    divisionSave: divisionSaveReducer,
    divisionUpdate: divisionUpdateReducer,
    divisionDelete: divisionDeleteReducer,

    districtList: districtListReducer,
    districtDetails: districtDetailsReducer,
    districtSave: districtSaveReducer,
    districtUpdate: districtUpdateReducer,
    districtDelete: districtDeleteReducer,

    upozilaList: upozilaListReducer,
    upozilaDetails: upozilaDetailsReducer,
    upozilaSave: upozilaSaveReducer,
    upozilaUpdate: upozilaUpdateReducer,
    upozilaDelete: upozilaDeleteReducer,

    unionList: unionListReducer,
    unionDetails: unionDetailsReducer,
    unionSave: unionSaveReducer,
    unionUpdate: unionUpdateReducer,
    unionDelete: unionDeleteReducer,

    marketList: marketListReducer,
    marketDetails: marketDetailsReducer,
    marketSave: marketSaveReducer,
    marketUpdate: marketUpdateReducer,
    marketDelete: marketDeleteReducer,

    countryListAd: countryListReducerad,
    divisionListAd: divisionListReducerad,
    districtListAd: districtListReducerad,
    upozilaListAd: upozilaListReducerad,
    unionListAd: unionListReducerad,
    marketListAd: marketListReducerad,
    areaCodeList: areaCodeListReducerad,
    //#endregion

    //#region Regular
    categoryList: categoryListReducer,
    categoryDetails: categoryDetailsReducer,
    categorySave: categorySaveReducer,
    categoryUpdate: categoryUpdateReducer,
    categoryDelete: categoryDeleteReducer,

    subCategoryList: subCategoryListReducer,
    subCategoryDetails: subCategoryDetailsReducer,
    subCategorySave: subCategorySaveReducer,
    subCategoryUpdate: subCategoryUpdateReducer,
    subCategoryDelete: subCategoryDeleteReducer,

    productTypeList: productTypeListReducer,
    productTypeDetails: productTypeDetailsReducer,
    productTypeSave: productTypeSaveReducer,
    productTypeUpdate: productTypeUpdateReducer,
    productTypeDelete: productTypeDeleteReducer,

    productList: productListReducer,
    productLisForAgentAndCustomer: productLisForAgentAndCustomerReducer,
    productListByProductTypeCategory: productListByProductTypeCategoryReducer,
    productListForAppSharerAndShoper: productListForAppSharerAndShoperReducer,
    productDetails: productDetailsReducer,
    productSave: productSaveReducer,
    productUpdate: productUpdateReducer,
    productDelete: productDeleteReducer,
    productDeleteAgent: productDeleteAgentReducer,

    cart: cartReducer,

    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    myOrderList: myOrderListReducer,
    orderList: orderListReducer,
    orderDelete: orderDeleteReducer,
    //#endregion

    //#region Auth

    applicationRoleList: roleListReducer,
    applicationRoleDetails: roleDetailsReducer,
    applicationRoleSave: roleSaveReducer,
    applicationRoleUpdate: roleUpdateReducer,
    applicationRoleDelete: roleDeleteReducer,

    userSignIn: SigninReducer,

    appSharerProfileDetails: appSharerProfileDetailsReducer,
    appSharerAddDownline: appSharerAddDownlineReducer,
    appSharerUpdate: appSharerUpdateReducer,

    adminRegistration: adminRegistrationReducer,
    adminUpdate: adminUpdateReducer,
    adminUpdatePassword: adminUpdatePasswordReducer,
    adminProfileDetails: adminProfileDetailsReducer,
    appSharerGetFirstDownlineList: appSharerGetFirstDownlineListReducer,

    moderatorAdd: moderatorAddReducer,
    moderatorUpdate: moderatorUpdateReducer,

    agentList: agentListReducer,
    agentAdd: agentAddReducer,
    agentUpdate: agentUpdateReducer,
    agentFind: agentFindReducer,

    karrotProfileDetails: karrotProfileDetailsReducer,
    karrotAdd: karrotAddReducer,
    karrotUpdate: karrotUpdateReducer,

    ceoProfileDetails: ceoProfileDetailsReducer,
    ceoAdd: ceoAddReducer,
    ceoUpdate: ceoUpdateReducer,

    ofarzAdd: ofarzAddReducer,

    shoperRegistration: shoperRegistrationReducer,
    //#endregion

    //#region Payment

    paymentTypeList: paymentTypeListReducer,
    paymentTypeDetails: paymentTypeDetailsReducer,
    paymentTypeSave: paymentTypeSaveReducer,
    paymentTypeUpdate: paymentTypeUpdateReducer,
    paymentTypeDelete: paymentTypeDeleteReducer,

    paymentList: paymentListReducer,
    paymentListAgent: paymentListAgentReducer,
    paymentListAppSharer: paymentListAppSharerReducer,
    paymentListShoper: paymentListShoperReducer,

    paymentListTableCashOffer: paymentListTableCashOfferReducer,
    paymentListTableCashOfferAgent: paymentListTableCashOfferAgentReducer,
    paymentListTableCashOfferAppSharer: paymentListTableCashOfferAppSharerReducer,
    paymentListTableCashOfferShoper: paymentListTableCashOfferShoperReducer,

    paymentListTableCashPromotional: paymentListTableCashPromotionalReducer,
    paymentListTableCashPromotionalAgent: paymentListTableCashPromotionalAgentReducer,
    paymentListTableCashPromotionalAppSharer: paymentListTableCashPromotionalAppSharerReducer,

    paymentListMainAccountOffer: paymentListMainAccountOfferReducer,
    paymentListMainAccountOfferAppSharer: paymentListMainAccountOfferAppSharerReducer,
    paymentListMainAccountOfferAgent: paymentListMainAccountOfferAgentReducer,

    paymentListMainAccountPromotional: paymentListMainAccountPromotionalReducer,
    paymentListMainAccountPromotionalAgent: paymentListMainAccountPromotionalAgentReducer,
    paymentListMainAccountPromotionalAppSharer: paymentListMainAccountPromotionalAppSharerReducer,

    paymentListBackShoppingOffer: paymentListBackShoppingOfferReducer,
    paymentListBackShoppingOfferAgent: paymentListBackShoppingOfferAgentReducer,
    paymentListBackShoppingOfferAppSharer: paymentListBackShoppingOfferAppSharerReducer,
    paymentListBackShoppingOfferShoper: paymentListBackShoppingOfferShoperReducer,

    paymentListBackShoppingPromotional: paymentListBackShoppingPromotionalReducer,
    paymentListBackShoppingPromotionalAgent: paymentListBackShoppingPromotionalAgentReducer,
    paymentListBackShoppingPromotionalAppSharer: paymentListBackShoppingPromotionalAppSharerReducer,

    paymentSubmitTableCashOffer: paymentSubmitTableCashOfferReducer,
    paymentSubmitTableCashPromotional: paymentSubmitTableCashPromotionalReducer,

    paymentSubmitMainAccountOffer: paymentSubmitMainAccountOfferReducer,
    paymentSubmitMainAccountPromotional: paymentSubmitMainAccountPromotionalReducer,

    paymentSubmitBackShoppingOffer: paymentSubmitBackShoppingOfferReducer,
    paymentSubmitBackShoppingPromotional: paymentSubmitBackShoppingPromotionalReducer,

    paymentSubmitShoperBackshoppingOffer: paymentSubmitShoperBackshoppingOfferReducer,
    paymentSubmitShoperTableCashOffer: paymentSubmitShoperTableCashOfferReducer,
    //#endregion

    //#region Withdraw
    withdrawList: withdrawListReducer,

    withdrawListAgentToOfarz: withdrawListAgentToOfarzReducer,
    withdrawListAgentFromUser: withdrawListAgentFromUserReducer,

    withdrawListAppSharerToAgent: withdrawListAppSharerToAgentReducer,
    withdrawListAppSharerToOfarz: withdrawListAppSharerToOfarzReducer,

    withdrawListOfarzFromAppSharer: withdrawListOfarzFromAppSharerReducer,
    withdrawListOfarzFromKarrot: withdrawListOfarzFromKarrotReducer,
    withdrawListOfarzFromCeo: withdrawListOfarzFromCeoReducer,

    withdrawListKarrotToAgent: withdrawListKarrotToAgentReducer,
    withdrawListKarrotToOfarz: withdrawListKarrotToOfarzReducer,

    withdrawListCeoToAgent: withdrawListCeoToAgentReducer,
    withdrawListCeoToOfarz: withdrawListCeoToOfarzReducer,

    withdrawAgentToOfarz: withdrawAgentToOfarzReducer,

    withdrawAppSharerToAgent: withdrawAppSharerToAgentReducer,
    withdrawAppSharerToOfarz: withdrawAppSharerToOfarzReducer,

    withdrawKarrotToAgent: withdrawKarrotToAgentReducer,
    withdrawKarrotToOfarz: withdrawKarrotToOfarzReducer,

    withdrawCeoReducer: withdrawCeoToAgentReducer,
    withdrawCeoReducer: withdrawCeoToOfarzReducer,

    //#endregion

    //#region Fund
    fundListAgent: fundListAgentReducer,
    fundListAppSharer: fundListAppSharerReducer,
    fundListShoper: fundListShoperReducer,
    fundListOfarz: fundListOfarzReducer,

    fundAgent: fundAgentReducer,
    fundAppSharer: fundAppSharerReducer,
    fundShoper: fundShoperReducer,
    fundKarrot: fundKarrotReducer,
    fundCEO: fundCEOReducer,
    fundOfarz: fundOfarzReducer,
    //#endregion

    form: formReducer
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;