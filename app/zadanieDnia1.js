//Twój kod

var http = require('http');

const srv = http.createServer((req, res) => {
    const browserInfo = req.headers['user-agent'];

    res.setHeader( 'Content-Type', 'text/plain');
    res.write(browserInfo);
    res.end();
}).listen(3000);

srv.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});