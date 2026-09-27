import axios from "axios";
import { host, protocol } from "./Config"

export const Login = (user) => {
    const config = {
        method: "POST",
        url: protocol + host + "/login",
        data: user
    }

    return axios(config);
}

export const Register = (user) => {
    const config = {
        method: "POST",
        url: protocol + host + "/register",
        data: user
    }

    return axios(config);
}