import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;


const apiKey =import.meta.env.VITE_API_KEY;
const cxKey = import.meta.env.VITE_CX_KEY;

// Create the params object
const params = {
    key: apiKey,
    cx: cxKey,
};


// const params = {
//     key: process.env.REACT_APP_API_KEY,
//     cx: process.env.REACT_APP_CX_KEY,
//     // key: "AIzaSyC3ITXNJAzvvTyDG8fl78Ehebj2C6j7c-E",
//     // cx: "d23a5475a891a49d2",
// };
// // key: "YOUR_API_KEY",
// // cx: "YOUR_CX_KEY",

export const fetchDataFromApi = async (payload) => {
    const { data } = await axios.get(BASE_URL, {
        params: { ...params, ...payload },
    });
    return data;
};
