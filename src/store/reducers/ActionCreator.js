import axios from "axios";
import { catSlice } from "./CatSlice";

const key = "live_FJ9Ahkp2QNLYpNPTM7jI9W2nSmQC0J4JqU1EFNcbb5098QvRScbXBMnhLdKSmIZG";

//According to TheCatAPI Documentation number of images to return between 1-100
const limit = 56;
// const breeds = ['abys', 'aege', 'abob', 'acur', 'asho', 'awir', 'amau', 'amis', 'bali', 'bamb', 'beng', 'birm', 'bomb', 'bslo', 'bsho', 'bure', 'buri', 'cspa'];
// &breed_ids=${breeds.join(",")}
const url = `https://api.thecatapi.com/v1/images/search?limit=${limit}&has_breeds=true&api_key=${key}`;


export const fetchCats = () => async (dispatch) => {
    try{
        dispatch(catSlice.actions.catsFetching());
        const response = await axios.get(url);
        dispatch(catSlice.actions.catsFetchingSuccess(response.data));

    } catch (e) {
        dispatch(catSlice.actions.catsFetchingError(e.message));
    }
}




