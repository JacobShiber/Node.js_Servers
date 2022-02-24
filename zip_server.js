const httpServer = require('http').Server;
const fs = require('fs');
const zlib = require('zlib');


class ZipServer extends httpServer {
    constructor() {
        super();
        this.listen('4000');
        this.on('request', this.handleRequest);
    }

    handleRequest(req, res) {
        const readStream = fs.createReadStream('./my_text.txt');
        const writeStream = fs.createWriteStream('./mike.gz');
        const gzip = zlib.createGzip();
        readStream.pipe(gzip).pipe(writeStream);
    }
}

module.exports = new ZipServer();