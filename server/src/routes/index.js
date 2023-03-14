/* import { send_mail } from "../utils/mailHandler.js"; */

const {send_mail} = require("../utils/mailHandler.js")
const { Router } = require("express");

/* require("dotenv").config();*/
const {GOOGLE_ACCOUNT} = process.env;

const router = Router();

router.post("/mail", async (req, res) => {
  try {
    var { name, email, message } = req.body;
    const html1 = `
        <h2>Your message:</h2>
        <br>
        <p>${message}</p>
        <br>
        <h2>was sent correctly</h2>
        <br>
        <br>
        <span>Att: CamiloSarmientoPortfolio</span>
    `
    const html2 = `
        <h2>recibiste un mensaje de parte de ${name} ( <a href="">${email}</a> ) :</h2>
        <br>
        <p>${message}</p>
        <span>Att: CamiloSarmientoPortfolio</span>
    `

    if (!name) name = "No name";
    if (!message) return res.status(404).json({ error: "Message is not provided" });
    if (!email) return res.status(404).json({ error: "Email is not provided" });



    const userEmail = await send_mail(email,"Message sent successfully", html2)
    await send_mail(GOOGLE_ACCOUNT,"New Conctact Message", html1)
    console.log(userEmail)
    res.status(204);
  } catch (err) {
    res.status(400).send(new Error(err).message);
  }
});

module.exports = router;
