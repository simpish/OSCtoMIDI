'use strict'

// const OSC_RECEIVE_EVENT = require("./Event.js");
const OutputMidi = require("./OutputMidi.js");
let OSCReceiver = require("./OSCReceiver");
const OSC_RECEIVE_EVENT = "osc_receive_event";

let OutputMidiInstance  = new OutputMidi();
let OSCReceiverInstance = new OSCReceiver();

//event listen
OSCReceiverInstance.on(OSC_RECEIVE_EVENT, (msg) =>
{
    console.log("value", msg);
    OutputMidiInstance.sendMassage([]);
});

OSCReceiverInstance.createOscServer();


// OSCReceiverInstance.emit(OSC_RECEIVE_EVENT, "test");
