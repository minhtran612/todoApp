import axios from 'axios';
import { ADD_PRODUCT_SUCCESS } from './types';

export function addCategorySuccess({ data }) {
  return {
    type: 'ADD_PRODUCT_SUCCESS',
    data,
  };
}

export function addNewCategory(data) {
  return dispatch => {
    return axios.post('/api/category/addCategory', {data});
  }
}

export function fetchCategoryList() {
  return dispatch => {
    return axios.get('/api/category/getCategoryList');
  }
}

export function addNewItemToCategory(id,data) {
  return dispatch => {
    return axios.post(`/api/category/${id}/addItem`,{data});
  }
}

export function fetchItemOfCategory(id) {
  return dispatch => {
    return axios.get(`/api/category/${id}/showItem`);
  }
}



