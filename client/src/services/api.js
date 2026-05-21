import axios from "axios"

const api = axios.create({
 baseURL: "https://livebid-app.onrender.com/api"
})

export default api