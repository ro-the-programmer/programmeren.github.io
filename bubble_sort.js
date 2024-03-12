
    // array vullen met willekeurige waardes tussen de 0 en 100
    var counter;
    var arraysize;

    window.alert("hoeveel getalen wil je sorteren?");
    arraysize = Number(window.prompt('Enter a value for arraysize'));
    var array = new Array(arraysize);

    for (counter = 0; counter <= arraysize - 1; counter++) {
        array[counter] = Math.floor(Math.random() * 100);
    }
    counter = 0;
    var tempmem = new Array(2);

    // arraysorteren
    var bcounter;

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
bcounter = 0;
    for (bcounter = 0; bcounter <= arraysize; bcounter++) { 
        document.getElementById("output").innerHTML +=  " "   
        document.getElementById("output").innerHTML +=  array[bcounter]
    }


