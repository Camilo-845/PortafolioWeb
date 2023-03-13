const {Router} = require("express");

require("dotenv").config();
const {GOOGLE_ACCOUNT, GOOGLE_AUTH} = process.env;

const router = Router();

router.post("/mail", async(req,res)=>{
    try{
        res.status(200).send("")
    }catch(err){
        res.status(400).send(new Error(err).message)
    }
})

module.exports = router;