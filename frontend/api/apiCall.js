import axios from 'axios'
// import setting from '../setting'
var baseURL = 'https://ipfs-chameleon.xyz/'
function apiCall(url, method, data, successCallback, errorCallback){
    axios({
        method: method,
        url: url,
        data: data,
        headers: {},
        baseURL: baseURL
    })
    .then(successCallback)
    .catch(errorCallback)
}
export default apiCall