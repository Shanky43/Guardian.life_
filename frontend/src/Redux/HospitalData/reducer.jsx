import {
    GET_GUARDIANS_DATA_FAILURE, GET_GUARDIANS_DATA_REQUEST, GET_GUARDIANS_DATA_SUCCESSFULL,
    PATCH_USER_DATA_FAILURE, PATCH_USER_DATA_REQUEST, PATCH_USER_DATA_SUCCESS, POST_USER_DATA_REQUEST,
    POST_USER_DATA_SUCCESSFUL,
    POST_USER_DATA_FAILURE
} from "./actionTypes";

const initialState = {
    isLoading: false,
    isError: false,
    guardiansdata: [],

}



const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        // REQUESTS CASES HANDLED HERE
        case GET_GUARDIANS_DATA_REQUEST:
            return { ...state, isLoading: true };

        case POST_USER_DATA_REQUEST:
            return { ...state, isLoading: true };

        case PATCH_USER_DATA_REQUEST:
            return { ...state, isLoading: true };

        // SUCCESS CASES HANDLED HERE
        case GET_GUARDIANS_DATA_SUCCESSFULL:
            return { ...state, isLoading: false, guardiansdata: payload }

        case POST_USER_DATA_SUCCESSFUL:
            return { ...state, isLoading: false, guardiansdata: payload }

        case PATCH_USER_DATA_SUCCESS:
            return { ...state, isLoading: false, guardiansdata: payload }

        // FAILURE CASES HANDLED HERE

        case GET_GUARDIANS_DATA_FAILURE:
            return { ...state, isLoading: false, isError: true, }

        case POST_USER_DATA_FAILURE:
            return { ...state, isLoading: false, isError: true, }

        case PATCH_USER_DATA_FAILURE:
            return { ...state, isLoading: false, isError: true, }

        default:
            return state
    }
}

export { reducer }