
    let input1;
    let input2;
    let functie;

    window.alert("vul je som zo in:");
    window.alert("x");
    window.alert("+");
    window.alert("y");
    input1 = Number(window.prompt('Enter a value for input1'));
    functie = window.prompt('Enter a value for functie');
    input2 = Number(window.prompt('Enter a value for input2'));

    // hiermee defineren we de eerste input de functie en de tweede input (x+y)
    if (functie == "+") {
        window.alert(input1 + input2);
    } else {
        if (functie == "*") {
            window.alert(input1 * input2);
        } else {
            if (functie == "/") {
                window.alert( input1 / input2);
            } else {
                if (functie == "-") {
                    window.alert(input1 - input2);
                }
            }
        }
    }

