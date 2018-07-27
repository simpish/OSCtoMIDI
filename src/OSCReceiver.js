'use strict'

let osc = require("node-osc");
let EventEmitter = require("events").EventEmitter;
// const OSC_RECEIVE_EVENT = require("./Event").OSC_RECEIVE_EVENT;
import { OSC_RECEIVE_EVENT } from './Event';

const PORT = 5000;

module.exports = class OSCReceiver extends EventEmitter{

    constructor() {
        super();
        // this.createOscServer();
    }

    createOscServer(){
        this.oscServer = new osc.Server(PORT);

        this.oscServer.on("message", function (msg, rinfo) {
            console.log(msg, rinfo);
            for (let i = 0; i < msg.length; i++) {
                console.log("msg:",msg[i]);
            }

            this.emit(OSC_RECEIVE_EVENT, msg);

        });
    }

    get dispatcher()
    {
        return this.dispatcher;
    }

};