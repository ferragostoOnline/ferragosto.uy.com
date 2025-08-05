const urlParams = new URLSearchParams(window.location.search);
  const productoId = urlParams.get('id');

  // Ejemplo de datos (en un caso real esto puede venir de una base de datos o archivo JSON)
  const productos = {
    1: {
      nombre: "lino",
      precio: "$169 – $395",
      descripcion: "Pistacho c/cascara y salados."
    },
    2:{
      nombre: "sesamo integral",
      precio: "$169 – $395",
      descripcion: "Pistacho c/cascara y salados."
    },
    // otros productos...
  };

  const producto = productos[productoId];

  if (producto) {
    document.getElementById("nombreProducto").textContent = producto.nombre;
    document.getElementById("precioProducto").textContent = producto.precio;
    document.getElementById("descripcionProducto").textContent = producto.descripcion;
  } else {
    document.body.innerHTML = "<p>Producto no encontrado</p>";
  }

  