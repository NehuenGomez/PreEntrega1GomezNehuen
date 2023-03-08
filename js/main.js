let mensajePrecio = ""
let continuar = true

const mensajeInicial = "Bienvenid@, ingresá el número correspondiente al servicio que quieras adquirir: \n" +
                        "1) Robot led \n" +
                        "2) Iluminación y maquinarias \n" +
                        "3) Estructura truss"

function consultarPrecios() {
    let seleccion = prompt(mensajeInicial).trim()
    if(seleccion !== "1" && seleccion !== "2" && seleccion !== "3") {
        alert("Por favor, ingresá un número válido")
        return
    } 
    else{
         switch(seleccion){
        case "1":
            mensajePrecio = "El servicio de Robot led cuesta $ 20000"
            break
        case "2":
            mensajePrecio = "El servicio de alquiler de iluminación y maquinarias cuesta $ 15000"
            break
        case "3":
            mensajePrecio = "El servicio de alquiler de estructura truss cuesta $ 10000"
            break
        default:
            console.error("Algo salió mal, este mensaje no debería ser visible")
    }
    alert(mensajePrecio)
    }
}

function preguntarPrecios() {
    while(continuar){
        consultarPrecios()
        continuar = confirm("¿Deseas conocer el valor de otro servicio?")
    }
}