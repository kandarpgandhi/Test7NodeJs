const express = require('express')
const app = express()

// app.use((req, res, next) => {
//     console.log("Authentication middleware called.")
//     next()
// })

// app.use("/library-2", (req, res, next) => {
//     console.log("Book Recommendations")
//     next()
// })

// app.use("/library-3", (req, res, next) => {
//     console.log("Special access to research papers from professors and seniors")
//     next()
// })

// app.get("/library-2", (req, res) => {
//     res.send("<h1>library 2 Entered</h1>")
// })

// app.get("/library-3", (req, res) => {
//     res.send("<h1>library 3 entered</h1>")
// })

// server.listen(3200, () => {
//     console.log("Server is running");
// })


app.use("/welcome", (req, res, next) => {
    req.user = "Guest"
    next()
})

app.get('/welcome', (req, res) => {
    res.send(`<h1>Welcome, ${req.user}!</h1>`)
})

app.listen(3000, () => {
    console.log("Server is running")
})