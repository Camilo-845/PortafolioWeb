export const POST_MAIL = "POST_MAIL"

export const postMail = (data) =>{
    console.log(data)
    return {
        type:POST_MAIL,
        payload:data
    }
}