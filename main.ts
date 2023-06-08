let number = 0
input.onButtonPressed(Button.A, function () {
    number = 1
    while (number <= 7) {
        basic.showNumber(number)
        basic.pause(1000)
        number += 1
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 5; index++) {
        music.playMelody("G B A G C5 B A B ", 120)
    }
})
