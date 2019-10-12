import axios from 'axios';
import {GET_ERRORS} from './types';

export const createProject = (project, history) => {
    return async function (dispatch){
        try{
            const response = await axios.post('/api/project', project);
            history.push('/dashboard');
            //console.log(response);
        } catch(error){
            dispatch( { type: GET_ERRORS, payload: response.data } );
        }
    }
};