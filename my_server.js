const httpServer = require('net').Server;
const fs = require('fs');

class MyServer extends httpServer {
    constructor(){
        super();
        this.listen('3000');
        this.on('connection', this.handleConnection);
    }

    handleConnection(socket){
        console.log("hello");
        this.socket = socket;
        this.doSomething();
    } 

    doSomething() {
        fs.readFile(__dirname + '/my_text.txt', (err, data) => {
            if(err) this.socket.write(err.toString());
            else this.socket.write(data.toString());
        })
    }
}

module.exports = new MyServer();