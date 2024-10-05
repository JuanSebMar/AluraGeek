const productForm = document.getElementById("productForm");
const productList = document.getElementById("product_list");

function renderProducts() {
  productList.innerHTML = "";
  const products = JSON.parse(localStorage.getItem("products")) || [];
  products.map((product, index) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}">
            <h3>${product.name}</h3>
            <div>
              <p>Precio: $${product.price}.00</p>
              <button class="delete-btn" data-index="${index}">
                <img src="assets/basuraIcon.png" alt="Eliminar" >
              </button>
            </div>
         
        `;

    productList.appendChild(productCard);
  });
}

productForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const imageUrl = document.getElementById("imageUrl").value;

  const product = { name, price, imageUrl };

  const products = JSON.parse(localStorage.getItem("products")) || [];
  products.push(product);

  localStorage.setItem("products", JSON.stringify(products));

  // Limpiar el formulario
  productForm.reset();

  // Volver a renderizar los productos
  renderProducts();
});

productList.addEventListener("click", (event) => {
  if (
    event.target.classList.contains("delete-btn") ||
    event.target.closest(".delete-btn")
  ) {
    const index = event.target.getAttribute("data-index");

    let products = JSON.parse(localStorage.getItem("products")) || [];
    products.splice(index, 1);

    localStorage.setItem("products", JSON.stringify(products));

    renderProducts();
  }
});

window.addEventListener("DOMContentLoaded", renderProducts);
