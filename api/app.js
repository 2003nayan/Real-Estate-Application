import express from 'express';
import postRoute from "./routes/post.route.js"

const app = express()

app.use('/api/test', function (req, res) {
    res.send('It Works!')
})
app.use('/auth/register', function (req, res) {
    res.send('It Works!')
})
app.use('/auth/login', function (req, res) {
    res.send('It Works!')
})
app.use('/auth/logout', function (req, res) {
    res.send('It Works!')
})
app.use('/api/posts', function (req, res) {
    res.send('It Works!')
})

app.use('/api/posts', postRoute)

app.listen(8800, () => {
    console.log(`Server is running on port 8800`);
});