'use strict'

let osc = require("node-osc");
const EventEmitter = require("events");
// const OSC_RECEIVE_EVENT = require("./Event").OSC_RECEIVE_EVENT;
// import { OSC_RECEIVE_EVENT } from './Event';
const OSC_RECEIVE_EVENT = "osc_receive_event";
const PORT = 5000;



module.exports = class OSCReceiver extends EventEmitter{
    createOscServer(){
        this.oscServer = new osc.Server(PORT);

        this.oscServer.on("message", (msg, rinfo) => {
            console.log(msg, rinfo);
            for (let i = 0; i < msg.length; i++) {
                console.log("msg:",msg[i]);
            }
           console.log("emit", this.emit(OSC_RECEIVE_EVENT, msg));
        });
    }
};


