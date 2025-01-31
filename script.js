document.addEventListener("DOMContentLoaded", () => {
    const imagenes = document.querySelectorAll("#imagenes img");
    let index = 0;

    function cambiarImagen() {
       
        imagenes.forEach((img) => img.classList.remove("visible"));

        imagenes[index].classList.add("visible");

    
        index = (index + 1) % imagenes.length;
    }

    setInterval(cambiarImagen, 3000);

    cambiarImagen();
});
