'use strict'

const OSC_RECEIVE_EVENT = require("./Event.js");
const OutputMidi = require("./OutputMidi.js");
let OSCReceiver = require("./OSCReceiver");



let OutputMidiInstance  = new OutputMidi();
let OSCReceiverInstance = new OSCReceiver();

OSCReceiverInstance.dispatcher.addEventListener(OSC_RECEIVE_EVENT,(value)=>{
    console.log("value",value);
    OutputMidiInstance.sendMassage([]);
});

OSCReceiverInstance.createOscServer();


