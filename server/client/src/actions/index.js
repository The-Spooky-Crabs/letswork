import axios from 'axios';
import { FETCH_USER } from './types';
import { GET_ERRORS } from './types';

export const fetchUser = () => async (dispatch) => {
    const response = await axios.get('/api/current_user');
    dispatch({type: FETCH_USER, payload: response.data});
};


export const createProject = (project, history) => async (dispatch) => {
    const response = await axios.post('/api/project', project);
    history.push('/dashboard');
    dispatch({ type: GET_ERRORS, payload: response.data });
}