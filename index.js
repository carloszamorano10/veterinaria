const fs = require("fs")
const {registrar, leer} = require("./operaciones")

const escribirArchivoOP = ()=>{
    fs.writeFileSync("operaciones.js", "operaciones", "utf-8")
    return
}

const escribirArchivoCitas = ()=>{
    fs.writeFileSync("citas.json", "citas", "utf-8")
    return
}

const argumentos = process.argv.slice(2);

const operacion = argumentos[0]

if(operacion === "registrar"){
registrar(nombre, edad, animal, color, enfermedad)
}

if(operacion === "leer"){
leer()
}
