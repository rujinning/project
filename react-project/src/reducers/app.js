import * as actionType from '../actions/actionTypes';
const initialState = {
    isAPIERROR: false,
    responseKeepAlive: '',
    responsePutApproval: '',
    responseDeleteData: '',
    responsePostOrderTag: ''
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.UPDATE_PUTAPPROVAL:
            return {
                ...state,
                responsePutApproval: action.responsePutApproval
            };
        case actionType.UPDATE_CURRENT_TIME:
            return {
                ...state,
                responseKeepAlive: action.responseKeepAlive
            };
        case actionType.UPDATE_POSTORDERTAG:
            return {
                ...state,
                responsePostOrderTag: action.responsePostOrderTag
            };
        case actionType.UPDATE_DELETEDATA:
            return {
                ...state,
                responseDeleteData: action.responseDeleteData
            };
        default:
            return state;    
    }
};
export default reducer;