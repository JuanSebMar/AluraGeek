document
  .getElementById("productForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Obtener valores de los inputs
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const imageUrl = document.getElementById("imageUrl").value;

    // Crear una nueva tarjeta de producto
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    // Insertar el contenido de la tarjeta
    productCard.innerHTML = `
      <img src="${imageUrl}" alt="${name}" />
      <h2>${name}</h2>
      <p>Precio: $${price}</p>
    `;

    // Añadir la tarjeta al contenedor de productos
    const productsContainer = document.getElementById("products_container");
    productsContainer.appendChild(productCard);

    // Limpiar el formulario
    document.getElementById("productForm").reset();
  });
