import axios from 'axios';

axios.defaults.baseURL = 'https://svitcms.tech/cmsdbapi';
const token = JSON.parse(localStorage.getItem('token'))
console.log("inside....",token)
if(token) {
    axios.defaults.headers.common['Content-Type']='text/html'
    axios.defaults.headers.common.Authorization = `${token}`
}
export default axios