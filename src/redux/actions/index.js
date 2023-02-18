export const POST_MAIL = "POST_MAIL"

export const postMail = (data) =>{
    return {
        type:POST_MAIL,
        payload:data
    }
}