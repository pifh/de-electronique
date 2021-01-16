function lanceLeDe () {
    for (let index = 0; index < 4; index++) {
        Allume(randint(1, valeurMax))
        basic.pause(0)
    }
    Allume(randint(1, valeurMax))
}
input.onButtonPressed(Button.A, function () {
    lanceLeDe()
})
function Allume (valeur: number) {
    for (let i = 0; i <= 4; i++) {
        for (let j = 0; j <= 4; j++) {
            led.unplot(i, j)
        }
    }
    if (valeur == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (valeur == 2) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            `)
    } else if (valeur == 3) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . #
            `)
    } else if (valeur == 4) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            `)
    } else if (valeur == 5) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . #
            `)
    } else if (valeur == 6) {
        basic.showLeds(`
            # . . . #
            . . . . .
            # . . . #
            . . . . .
            # . . . #
            `)
    } else if (valeur == 7) {
        basic.showLeds(`
            # . . . #
            . . . . .
            # . # . #
            . . . . .
            # . . . #
            `)
    } else if (valeur == 8) {
        basic.showLeds(`
            # . # . #
            . . . . .
            # . . . #
            . . . . .
            # . # . #
            `)
    } else if (valeur == 9) {
        basic.showLeds(`
            # . # . #
            . . . . .
            # . # . #
            . . . . .
            # . # . #
            `)
    } else {
    	
    }
}
input.onButtonPressed(Button.B, function () {
    Allume(0)
    valeurMax += 1
    if (valeurMax >= 10) {
        valeurMax = 1
    }
    Allume(valeurMax)
})
let valeurMax = 0
valeurMax = 6
basic.forever(function () {
	
})
