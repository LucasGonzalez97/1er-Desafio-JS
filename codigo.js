// Clases
class Personas {
    constructor(id, nombre, edad, profesion) {
        this.id = parseInt(id);
        this.nombre = nombre;
        this.edad = parseInt(edad);
        this.profesion = [profesion];
    }
}

/// Personas
const arraydepersona = [];
const lugar = [];
lugar.push(new Personas(1, "Antonela Chamorro", 34, arraydepersona));
lugar.push(new Personas(2, "Lucas Gonzalez", 45, arraydepersona));
lugar.push(new Personas(3, "Viviana Denegri", 30, arraydepersona));
lugar.push(new Personas(4, "Camila Lucarini", 42, arraydepersona));
lugar.push(new Personas(5, "Tamara Gonzalez", 26, arraydepersona));
lugar.push(new Personas(6, "Juana Gonzalez", 28, arraydepersona));
lugar.push(new Personas(7, "Diego Gonzalez", 40, arraydepersona));
lugar.push(new Personas(8, "Daniel Torrente", 38, arraydepersona));
lugar.push(new Personas(9, "Romina Cardona", 27, arraydepersona));
lugar.push(new Personas(10, "Lucas Ezequiel Gonzalez", 35, arraydepersona));
/////

let opc = parseInt(prompt("Que desea saber?\n 1- listado de profesion.\n 2- listado de Personas registradas\n 3-Personas por edad"))

switch (opc) {

    case 1:
        let personaid = parseInt(prompt("Ingrese un id para buscar a la persona: "));
        numCompras = parseInt(prompt("Cuantas compras realizo?"))
        if (personaid > 11) {
            alert("Ingrese un id valido ")
        }
        else {
            let compras;
            let profesion;

            for (let i = 1; i <= numCompras; i++) {
                profesion = String(prompt("ingrese profesion"))
                compras = parseFloat(prompt("ingrese compras " + profesion))
                arraydepersona.push({ profesion, compras });
            }
            console.log(lugar[nombreid - 1])
            suma = arraydepersona.map(item => item.compras).reduce((prev, curr) => prev + curr, 0);
            prom = suma / numCompras
        }
        if (prom >= 7) {
            console.log(" Compra mucho" + prom)
        }
        else {
            console.log("No ha comprado suficiente " + prom)
        }
        break;

    case 2:
        /*
        lugar.sort((a, b) => {
            if (a.nombre > b.nombre) {
                return 1;
            } else if (a.nombre < b.nombre) {
                retur -1;
            } else {
                return 0;
            }
        })
        */
        console.log(lugar.map((el) => el.nombre))
        break;

    case 3:
        let ed = parseInt(prompt("Ingrese una edad: "))
        const edad = lugar.filter((el) => el.edad == ed)
    
        if (edad.length == 0) {
            alert("No hay esa edad")
        }
        else {
            console.log("las personas con  " + ed + "son: ")
            console.log(edad)
        };
        break;
}

if (opc > 3) {
    alert ("Opcion no valida")
}


