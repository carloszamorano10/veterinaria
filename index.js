const { registrar, leer } = require("./operaciones");

const argumentos = process.argv.slice(2);

const operacion = argumentos[0];

if (operacion === "registrar") {
  const datosCita = {
    nombre: argumentos[1],
    edad: parseInt(argumentos[2]),
    tipo: argumentos[3],
    color: argumentos[4],
    enfermedad: argumentos[5],
  };

  registrar(datosCita);
}

if (operacion === "leer") {
  leer();
}
