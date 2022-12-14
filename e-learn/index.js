const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000
app.use(cors())
const allCourses = require('./data/generated.json')
app.get('/', (req, res) => {
    res.send("Hello this is e-learn platform API ")
})
app.get('/courses', (req, res) => {
    res.send(allCourses)
})
app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const courseDetails = allCourses.find(course => course._id === id)
    res.send(courseDetails)
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})