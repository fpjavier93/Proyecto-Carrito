let calculadora;



while (calculadora !== "5") {
    calculadora = prompt("1. Sumar dos numeros\n" +
        "2. Restar dos numeros\n" +
        "3. Multiplicar dos numeros\n" +
        "4. Dividir dos numeros\n" +
        "5. Salir"
    );

    switch (calculadora) {
        case "1":
            let num1 = (parseFloat(prompt("ingrese el primer numero")))
            let num2 = (parseFloat(prompt("ingrese el segundo numero")));
            let suma = num1 + num2;
            if (isNaN(num1) || isNaN(num2)) {
                alert("Error al ingresar el numero");
            }
            else {
                alert(`la suma es ${suma}`)
            }

            break;
        case "2":
            let num3 = (parseFloat(prompt("ingrese el primer numero")))
            let num4 = (parseFloat(prompt("ingrese el segundo numero")));
            let resta = num3 - num4;
            if (isNaN(num3) || isNaN(num4)) {
                alert("Error al ingresar el numero");
            }
            else {
                alert(`la resta es ${resta}`)
            }
            break;
        case "3":
            let num5 = (parseFloat(prompt("ingrese el primer numero")))
            let num6 = (parseFloat(prompt("ingrese el segundo numero")));
            let multiplicacion = num5 * num6;
            if (isNaN(num5) || isNaN(num6)) {
                alert("Error al ingresar el numero");
            }
            else {
                alert(`la multiplicacion es ${multiplicacion}`)
            }
            break;
        case "4":
            let num7 = (parseFloat(prompt("ingrese el primer numero")));
            let num8;

            do {
                num8 = (parseFloat(prompt("ingrese el segundo numero")));
                if(num8 === 0) alert("no puedes dividir por 0");
            } while (num8 == 0);
            let division = num7 / num8;


            if (isNaN(num7) || isNaN(num8)) {
                alert("Error al ingresar el numero");
            }
            else {
                alert(`la division es ${division}`)
            }
            break;
        case "5": alert("Saliendo...")
            break;
        default: alert("Operacion invalida")
    }
};



