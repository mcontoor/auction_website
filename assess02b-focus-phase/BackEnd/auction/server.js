const express = require('express')
const mongoose = require('mongoose');

const app = express();

const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/auction', {useNewUrlParser : true})
.then(() => console.log('database connected'))
.catch(err => console.log(err))

app.use('/', (req,res) =>
    res.send('Server running')
)


app.listen(PORT, function() {
    console.log('server listening to port ', PORT)
})