'use strict'

let midi = require('midi');

// Set up a new output.
let output = new midi.output();

const CONNECT_MIDI_DEVICE_NAME = "V-1SDI 1";

module.exports = class OutputMidi {
    constructor() {

        console.log("OutputMidi constructor");
// Count the available output ports.
        console.log(output.getPortCount());

        let portCount = output.getPortCount();
        let targetPortId = NaN;

        for(let i = 0; i < portCount; ++i)
        {
            if( output.getPortName(i) === CONNECT_MIDI_DEVICE_NAME)
            {
                targetPortId = i;
            }
        }

        if(isNaN(targetPortId) )
        {
            console.error(`Don't found ${CONNECT_MIDI_DEVICE_NAME} devices... check MIDI device connection.` ) ;
            return;
        }

        // Get the name of a specified output port.
        console.log(`Target MIDI Device Port ID : ${targetPortId}`);

        // Open the first available output port.
        output.openPort(targetPortId);

        // Send a MIDI message.

        // Close the port when done.
       // console.log(output.closePort());

        output.sendMessage([176, 22, 127]);
    }


    sendMassage(messsageValue)
    {
        // output.sendMessage(messsageValue);
        output.sendMessage([176, 22, 127]);
        console.log("send Midi");
    }

};
