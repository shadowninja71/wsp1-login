import express from "express"
import session from "express-session"

const router = express.Router()

router.get("/", (req, res) => {
    res.render("index.njk",
        { title: "Node js startrepo", message: "Använd det här repot som en grund för dina projekt." }
    )
})

router.get("/login", (req, res) => {
    res.render("login.njk",
        { title: "Login" }
    )
})

router.post("/login", (req, res) => {
    const username = req.body.username
    const password = req.body.password

    if(username === "admin" && password === "123") {
        console.log("Login true")
        req.session.login = "true"
    }else {
        console.log("fiiiil")
    }

    res.json({username, password, session: req.session.login})
})

router.get('/error', (req, res) => {
    throw new Error('Test error')
})

export default router