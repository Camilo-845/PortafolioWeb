export const POST_MAIL = "POST_MAIL";
export const SET_IDIOM = "SET_IDIOM";

import axios from "axios";

export const postMail = (data) =>{
    return async function (dispatch){
        try{
            return await axios.post("/mail",data)
            .then(res=>{
                return {
                    type:POST_MAIL,
                    payload:"",
                }
            })
        }catch(err){
            console.error(new Error(err).message)
        }
    }
}

export const setIdiom = (idiom) =>{
    return {
        type:SET_IDIOM,
        payload:idiom,
    }
}