const express = require('express'); //
const port = 4444;

const app=express();

app.set('view engine', 'ejs');
app.use(express.static('public'));



app.listen(port, () =>{
    console.log('listening on port: ' + port);
})