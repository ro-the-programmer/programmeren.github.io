function main() {
    // array vullen met willekeurige waardes tussen de 0 en 100
    let counter;
    let array = createArray(50);

    for (counter = 1; counter <= 50; counter++) {
        array[counter - 1] = Math.floor(Math.random() * 100);
    }
    let bcounter;

    bcounter = 0;
    counter = 0;
    window.alert("Voor welke waarde wil je zoeken?");
    bcounter = Number(window.prompt('Enter a value for bcounter'));
    counter = 0;

    // checken of het getal in de array zit
    while (array[counter] != bcounter) {
        if (counter == 49) {
            if (array[49] != bcounter) {
                window.alert("Dat getal kon niet gevonden worden.");
            }
        }

        // als hij niet de huidige array waarde is, dan gaat hij naar de volgende array waarde
        counter = counter + 1;
    }
    window.alert("Er is een " + bcounter + ".");
}
