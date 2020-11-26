radio.onReceivedNumber(function (receivedNumber) {
    basic.clearScreen()
    for (let index = 0; index < 3; index++) {
        led.plot(0, 0)
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.pause(100)
        basic.clearScreen()
        basic.pause(100)
    }
})
input.onButtonPressed(Button.A, function () {
    if (n != 5) {
        n += 1
        basic.showNumber(n)
    }
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(n)
    music.playTone(262, music.beat(BeatFraction.Whole))
})
radio.onReceivedString(function (receivedString) {
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    if (n != 0) {
        n += -1
        basic.showNumber(n)
    }
})
let n = 0
radio.setGroup(45)
