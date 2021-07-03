import axios from "axios";
axios.defaults.baseURL = 'http://localhost:7000';

const fetcher = async(method,url,...rest) =>{
    const res = await axios[method](url,...rest);
    console.log(res)
    return res.data
}

export default fetcher
