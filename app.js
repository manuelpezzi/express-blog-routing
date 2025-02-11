const express = require('express');
const app = express();
const port = 3000;
const postRouter = require('./routers/posts')

app.use(express.static('public'));


app.get('/'), (reg, res) => {
    res.send("Server del mio blog")

}

app.use('/post', postRouter)

app.listen(port, () => {
    console.log(`example app listening on port ${port}`)
})