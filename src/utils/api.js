import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1";

const params = {
    // key: process.env.API_KEY,
    // cx: process.env.CX_KEY,
    key: "AIzaSyC3ITXNJAzvvTyDG8fl78Ehebj2C6j7c-E",
    cx: "d23a5475a891a49d2",
};
// key: "YOUR_API_KEY",
// cx: "YOUR_CX_KEY",

export const fetchDataFromApi = async (payload) => {
    const { data } = await axios.get(BASE_URL, {
        params: { ...params, ...payload },
    });
    return data;
};
