basic.forever(function on_forever() {
    // serial.write_number(input.compass_heading())
    // serial.write_number(input.temperature())
    // serial.write_number(input.acceleration(Dimension.Y))
    if (input.pinIsPressed(TouchPin.P0)) {
        serial.writeNumber(1)
    } else {
        serial.writeNumber(0)
    }
    
    serial.writeLine("")
})
