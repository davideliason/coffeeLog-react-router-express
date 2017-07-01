const express 		= require('express');
const path 			= require('path');

const app 			= express();
app.set('port', (process.env.PORT || 8080));
app.use(express.static(path.join(__dirname,'public')));

app.get("/",(req,res) => {
	res.send("hello world");
});

app.listen(app.get('port'), () => {
	console.log("server running at 8080");
});

