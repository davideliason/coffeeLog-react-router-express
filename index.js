const express 		= require('express');
const path 			= require('path');

const app 			= express();

require('dotenv').config();

app.set('port', (process.env.PORT || 8080));
app.use(express.static(path.join(__dirname,'public')));



app.get("/api/coffee",(req,res) => {
    const coffee = {key: 1, text : "coffee"};
    res.json(coffee);
    console.log(`Sent ${coffee}`);
});

app.get("*", (req,res) => {
	res.sendFile(path.join(__dirname,'public','client','public','index.html'));
})

app.listen(app.get('port'), () => {
	console.log("server running at 8080");
});

