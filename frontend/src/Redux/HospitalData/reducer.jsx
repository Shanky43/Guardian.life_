import {
    GET_GUARDIANS_DATA_FAILURE,
    GET_GUARDIANS_DATA_REQUEST,
    GET_GUARDIANS_DATA_SUCCESSFULL,
    PATCH_USER_DATA_FAILURE,
    PATCH_USER_DATA_REQUEST,
    PATCH_USER_DATA_SUCCESS,
    POST_USER_DATA_FAILURE,
    POST_USER_DATA_REQUEST,
    POST_USER_DATA_SUCCESSFUL,
    GET_USER_DATA_REQUEST,
    GET_USER_DATA_SUCCESSFUL,
    GET_USER_DATA_FAILURE,
} from "./actionTypes";

const initialState = {
    isLoading: false,
    isError: false,
    guardiansdata: [],
    userData: [],
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        // REQUESTS CASES HANDLED HERE
        case GET_GUARDIANS_DATA_REQUEST:
        case POST_USER_DATA_REQUEST:
        case PATCH_USER_DATA_REQUEST:
        case GET_USER_DATA_REQUEST:
            return { ...state, isLoading: true };

        // SUCCESS CASES HANDLED HERE
        case GET_GUARDIANS_DATA_SUCCESSFULL:
            return { ...state, isLoading: false, guardiansdata: payload };

        case POST_USER_DATA_SUCCESSFUL:
        case PATCH_USER_DATA_SUCCESS:
            return { ...state, isLoading: false, guardiansdata: payload };

        case GET_USER_DATA_SUCCESSFUL:
            return { ...state, isLoading: false, userData: payload };

        // FAILURE CASES HANDLED HERE
        case GET_GUARDIANS_DATA_FAILURE:
        case POST_USER_DATA_FAILURE:
        case PATCH_USER_DATA_FAILURE:
        case GET_USER_DATA_FAILURE:
            return { ...state, isLoading: false, isError: true };

        default:
            return state;
    }
};

export { reducer };
