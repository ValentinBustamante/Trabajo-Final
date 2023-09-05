let nombre ="valentin"; 
let apellido = "bustamante";
console.log(nombre+" "+apellido);

let solicitud = prompt("¡Hola! Introduce tu nombre porfavor");

if (solicitud === "") {
    prompt("Por favor, introduce un nombre.");
} else {
    alert("Hola " + solicitud + ". ¡Bienvenido a la página POP84 Jeans!");
}

const compra = document.getElementById("compra");

compra.addEventListener("click", function() {
    alert("Gracias por su compra en POP84 Jeans, vuelva pronto ;)");
});
