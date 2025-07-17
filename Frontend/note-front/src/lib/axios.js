import axios from 'axios'
// in production there is no local host so we have to make this dynamic
const BASE_URL= import.meta.env.MODE==="developement"?
"http://localhost:5005/api":"/api";
const api=axios.create({
    baseURL:BASE_URL,
})
export default api;