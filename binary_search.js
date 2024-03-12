
    // array vullen met willekeurige waardes tussen de 0 en 100
    let counter;
    let arraysize;

    window.alert("hoeveel getalen wil je sorteren?");
    arraysize = Number(window.prompt('Enter a value for arraysize'));
    let array = new Array(arraysize);

    for (counter = 0; counter <= arraysize - 1; counter++) {
        array[counter] = Math.floor(Math.random() * 100);
    }
    counter = 0;
    let tempmem = new Array(2);

    // arraysorteren
    let bcounter;

    bcounter = 0;
    for (bcounter = 0; bcounter <= arraysize; bcounter++) {
        for (counter = 0; counter <= arraysize - 1; counter++) {
            if (counter == arraysize - 1) {
            } else {

                // de twee getallen wisselen
                if (array[counter] > array[counter + 1]) {
                    tempmem[0] = array[counter + 1];
                    tempmem[1] = array[counter];
                    array[counter] = tempmem[0];
                    array[counter + 1] = tempmem[1];
                }
            }
        }
    }
    window.alert("Welke waarde wil je zoeken?");
    bcounter = Number(window.prompt('Enter a value for bcounter'));
    counter = arraysize / 2;
    let additive;

    additive = arraysize / 2;
    while (bcounter != array[counter]) {

        // als de additive minder dan 1 is krijgen we problemen, daarom checken we het
        additive = additive / 2;
        if (additive < 1) {
            additive = 1;
        }
        if (bcounter > array[counter]) {
            counter = counter + additive;
        } else {
            if (bcounter < array[counter]) {
                counter = counter - additive;
            }
        }
    }
    window.alert("ding ding ding");
    window.alert("het zit op positie " + counter);

