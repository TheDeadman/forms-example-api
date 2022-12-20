const express = require('express')
var cors = require('cors')
const app = express()
const port = 3001

app.use(cors())
app.get('/', (req, res) => {
    res.send('Hello World!')
})

const groups = ['Group One', 'Group Two', 'Group Three']

app.get('/api/groups', (req, res) => {
    let resGroups = [...groups];
    console.log(req.query.name)
    if (req.query.name) {
        resGroups = groups.filter(group => group.indexOf(req.query.name) !== -1)
    }
    res.send(resGroups)
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})