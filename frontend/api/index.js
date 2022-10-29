import apiCall from './apiCall'

export default () => ({
    apiTest(data, cb, error){apiCall('/api/v1/test', 'POST', data, cb, error)},
    userSignUp(data, cb, error){apiCall('/api/v1/user/sign-up', 'POST', data, cb, error)},
    userSignIn(data, cb, error){apiCall('/api/v1/user/sign-in', 'POST', data, cb, error)},
    saveUserData(data, cb, error){apiCall('/api/v1/user/saveUserData', 'POST', data, cb, error)},
    getUserData(data, cb, error){apiCall('/api/v1/user/getUserData', 'POST', data, cb, error)},
    // apiTest(data, cb, error){
    //     console.log('ajfioefjeij')
    // },


})