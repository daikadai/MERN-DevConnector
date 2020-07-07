import Axios from "axios"

import axios from 'axios';
import { GET_POSTS, POST_ERROR } from "./types";

// Get Posts
export const getPosts = () => async dispatch => {
  try {
    const res = await axios.get('http://localhost:5000/api/posts');

    dispatch({
      type: GET_POSTS,
      payload: res.data
    })
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    })
  }
}