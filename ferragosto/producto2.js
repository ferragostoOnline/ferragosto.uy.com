const productos = {
  1: {
    nombre: "Lino",
    precio: "$169 – $395  50",
    descripcion: "Pistacho c/cáscara, salado.",
    imagen1: ""
  },
  2: {
    nombre: "Sesamo integral",
    precio: "$120 – $350",
    descripcion: "Nuez pelada natural.",
    imagen2: "sesamo integral blanco.webp"
  }
};

const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const producto = productos[id];

if (producto) {
  document.getElementById("nombre").textContent = producto.nombre;
  document.getElementById("precio").textContent = producto.precio;
  document.getElementById("descripcion").textContent = producto.descripcion;
  document.getElementById("imagen").src = producto.imagen;
  document.getElementById("imagen").alt = producto.nombre;
} else {
  document.body.innerHTML = "<h2>Producto no encontrado</h2>";
}
