import axios from "axios";

export const login = async (data) => {
    try {
        const sendReq = await axios.post("http://localhost:5000/api/v1/user/login", data)
        if (sendReq) {
            const responseData = sendReq.data;

            localStorage.setItem("userData", JSON.stringify(responseData));

            return responseData
        }
    } catch (error) {
        console.log(error)
    }
}

export const register = async (data) => {
    try {
        const sendReq = await axios.post("http://localhost:5000/api/v1/user/register", data)
        if (sendReq) return sendReq.data
    } catch (error) {
        console.log(error)
    }
}


