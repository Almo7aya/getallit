
const { app } = require('./app');

const port = process.env.PORT || 3000;

// setting the port as an exprees global varable
app.set('port', port);


app.listen(port, () => console.log(`The server is running at port ${port}`));

app.on('error', error => {
    console.log(error);
});