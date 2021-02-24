def lanceLeDe():
    for index in range(4):
        Allume(randint(1, valeurMax))
        basic.pause(0)
    Allume(randint(1, valeurMax))

def on_button_pressed_a():
    lanceLeDe()
input.on_button_pressed(Button.A, on_button_pressed_a)

def Allume(valeur: number):
    for i in range(5):
        for j in range(5):
            led.unplot(i, j)
    if valeur == 1:
        basic.show_leds("""
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            """)
    elif valeur == 2:
        basic.show_leds("""
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            """)
    elif valeur == 3:
        basic.show_leds("""
            # . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . #
            """)
    elif valeur == 4:
        basic.show_leds("""
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            """)
    elif valeur == 5:
        basic.show_leds("""
            # . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . #
            """)
    elif valeur == 6:
        basic.show_leds("""
            # . . . #
            . . . . .
            # . . . #
            . . . . .
            # . . . #
            """)
    elif valeur == 7:
        basic.show_leds("""
            # . . . #
            . . . . .
            # . # . #
            . . . . .
            # . . . #
            """)
    elif valeur == 8:
        basic.show_leds("""
            # . # . #
            . . . . .
            # . . . #
            . . . . .
            # . # . #
            """)
    elif valeur == 9:
        basic.show_leds("""
            # . # . #
            . . . . .
            # . # . #
            . . . . .
            # . # . #
            """)
    else:
        pass

def on_button_pressed_b():
    global valeurMax
    Allume(0)
    valeurMax += 1
    if valeurMax >= 10:
        valeurMax = 1
    Allume(valeurMax)
input.on_button_pressed(Button.B, on_button_pressed_b)

valeurMax = 0
valeurMax = 6

def on_forever():
    pass
basic.forever(on_forever)
