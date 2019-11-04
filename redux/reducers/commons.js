import produce from "immer";

export const initialState = {
  logginError: false,
  userInfo: {},
  provinces: [],
  products: [],
  mainSource: [],
  bankRegion: []
};
const commonsReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case "LOGIN":
        draft.logginError = false;
        break;
      case "LOGIN_ERROR":
        draft.logginError = true;
        break;
      case "SET_USER_INFO":
        draft.userInfo = action.payload ? action.payload : {};
        draft.logginError = false;
        break;
      case "GET_PROVINCES_SUCCESS":
        draft.provinces = action.payload;
        break;
      case "GET_LEAD_LIST_PRODUCT_SUCCESS":
        draft.products = action.payload;
        break;
      case "GET_MAIN_SOURCE_SUCCESS":
        draft.mainSource = action.payload;
        break;
      case "GET_BANK_REGION_SUCCESS":
        draft.bankRegion = action.payload;
        break;
      default:
        return state;
    }
  });
export default commonsReducer;
