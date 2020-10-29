radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber >= 21) {
        pins.servoWritePin(AnalogPin.P0, 0)
    } else {
        pins.servoWritePin(AnalogPin.P0, 180)
    }
})
basic.forever(function () {
    radio.sendNumber(input.temperature())
})
