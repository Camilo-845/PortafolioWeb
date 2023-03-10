export const POST_MAIL = "POST_MAIL"
export const SET_IDIOM = "SET_IDIOM"

export const postMail = (data) =>{
    return {
        type:POST_MAIL,
        payload:data
    }
}

export const setIdiom = (idiom) =>{
    return {
        type:SET_IDIOM,
        payload:idiom,
    }
}