const express = require('express')

const app = express();

const PORT = process.env.PORT || 5000;

app.use('/', (req,res) =>
    res.send('Server running')
)


app.listen(PORT, function() {
    console.log('server listening to port ', PORT)
})