import axios from "axios";

const baseURL = "http://localhost:2025";
// const baseURL = "https://g2c-h8zd.onrender.com";

const publicAxios= axios.create({baseURL});

// private request 
const privateReq= axios.create({baseURL});
privateReq.interceptors.request.use((config)=>{
    const jtoken=localStorage.getItem("jtoken");
    if(jtoken){
        config.headers.Authorization=`Bearer ${jtoken}`
    }
    return config;
})

export {publicAxios,privateReq}

export default baseURL;