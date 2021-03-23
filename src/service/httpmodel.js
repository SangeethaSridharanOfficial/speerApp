const axios = require('axios');
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

//setting Default Configuration
axios.defaults.baseURL = '';

axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    config.headers = {
        // 'Authorization' : '',
        // 'Content-Type': 'application/json'
    };
    config.validateStatus = function (status) {
        return status >= 200 && status < 600; // default
    }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

/**
 * @param {*} param0 
 * @param {*} url 
 * @returns the axios response 
 * Here we have all the basic http methods
 */

const get = ({url,params}) =>{
    try{
        const options = {
            method: 'GET',
            url,
            params
        };
        return axios(options);
    }catch(err){
        console.error('Error in get model ', err.stack);
    }
};

const post = ({url,payload}) =>{
    try{
        const options = {
            method: 'POST',
            data: JSON.stringify(payload),
            url,
        };
        return axios(options);
    }catch(err){
        console.error('Error in post model ', err.stack);
    }
};

const put = ({url,payload}) =>{
    try{
        const options = {
            method: 'PUT',
            data: JSON.stringify(payload),
            url,
        };
        return axios(options);
    }catch(err){
        console.error('Error in put model ', err.stack);
    }
};

const remove = ({url,params}) =>{
    try{
        const options = {
            method: 'DELETE',
            url
        };
        return axios(options);
    }catch(err){
        console.error('Error in remove model ',err.stack);
    }
}

export {get,post,put,remove}

