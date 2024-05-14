const http = require('http');
const server = http.createServer()
const fs = require('fs');

server.on('request', (req, res) => {
    if (req.url === '/read-file' && req.method === 'GET') ;
        const readableStream = fs.createReadStream(process.cwd() + '/texts/read.txt')

        readableStream.on('data', (buffer) => {
            res.write(buffer)
        })
        readableStream.on('end', () => {
            res.end('hello it is me')
        })
    }
)

server.listen(5000, () => {
    console.log('server is running on port 5000')
})