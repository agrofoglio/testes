def on_forever():
    #serial.write_number(input.compass_heading())
    #serial.write_number(input.temperature())
    #serial.write_number(input.acceleration(Dimension.Y))
    if input.pin_is_pressed(TouchPin.P0):
        serial.write_number(1)
    else:
        serial.write_number(0)
    serial.write_line("")
basic.forever(on_forever)