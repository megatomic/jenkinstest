const express = require('express');

const app = express();

app.get('/',(req,res) => {
	res.send('hello world6');
})

app.listen(3500,()=>{
	console.log('listening on 3500!!!');
});

module.exports = app;
