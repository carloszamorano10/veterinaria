const fs = requier("fs")



const registrar = ({nombre, edad, tipo, color, enfermedad})=>{ 
    const citas = []
    const datos = fs.readFileSync("citas.json", "utf-8")
    citas = JSON.parse(datos)

    const nuevaCita ={
        nombre,
        edad,
        tipo,
        color,
        enfermedad
    }
    citas.push(nuevaCita)

    fs.writeFileSync("citas.json", JSON.stringify(citas))
    
}


const leer = ()=>{
 const data = fs.readFileSync("citas.json", 'utf8')
 const citas = JSON.parse(data)
 if (citas.length === 0){
    console.log("no hay citas registradas")
   return
 }
 citas.forEach(cita => {
    console.log(cita.nombre)
    console.log(cita.edad)
    console.log(cita.tipo)
    console.log(cita.color)
    console.log(cita.enfermedad)
});

}

module.exports = {registrar, leer}