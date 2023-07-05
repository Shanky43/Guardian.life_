import axios from "axios";
import {
    GET_GUARDIANS_DATA_FAILURE, GET_GUARDIANS_DATA_REQUEST, GET_GUARDIANS_DATA_SUCCESSFULL,
    PATCH_USER_DATA_FAILURE, PATCH_USER_DATA_REQUEST, PATCH_USER_DATA_SUCCESS, POST_USER_DATA_REQUEST,
    POST_USER_DATA_SUCCESSFUL,
    POST_USER_DATA_FAILURE
} from "./actionTypes";
// import Cookies from 'js-cookie';

const getGuardiansData = (searchTerm) => (dispatch) => {
    dispatch({ type: GET_GUARDIANS_DATA_REQUEST });

    const url = searchTerm !== "" ? `http://localhost:8080/hospital?q=${searchTerm}` : "http://localhost:8080/hospital";

    axios
        .get(url)
        .then((res) => {
            console.log(res.data);
            dispatch({ type: GET_GUARDIANS_DATA_SUCCESSFULL, payload: res.data });
        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: GET_GUARDIANS_DATA_FAILURE });
        });
};

const postGuardiansData = (data) => (dispatch) => {
    dispatch({ type: POST_USER_DATA_REQUEST });
    axios
        .post('http://localhost:8080/usersData', data)
        .then((res) => {
            console.log(res.data);
            dispatch({ type: POST_USER_DATA_SUCCESSFUL, payload: res.data });
        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: POST_USER_DATA_FAILURE });
        });
};



const patchGuardiansData = (id, updatedData) => (dispatch) => {
    dispatch({ type: PATCH_USER_DATA_REQUEST });
    return axios
        .patch(`http://localhost:8080/hospitals${id}`, updatedData)
        .then((res) => {
            dispatch({ type: PATCH_USER_DATA_SUCCESS, payload: res.data });
            return res.data;
        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: PATCH_USER_DATA_FAILURE });
            throw err;
        });
};
export { getGuardiansData, patchGuardiansData, postGuardiansData };
