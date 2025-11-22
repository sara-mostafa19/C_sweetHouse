const products = [
  {
    id: 1,
    image: "../../imgs/60aa8b2251d6c237ba7dba4799cef76fc3eb4fb6.png",
    name: "تورته اوريو-ميني",
    price: "12",
  },
  {
    id: 2,
    image: "../../imgs/60aa8b2251d6c237ba7dba4799cef76fc3eb4fb6.png",
    name: "تورته اوريو-ميني",
    price: "12",
  },
  {
    id: 3,
    image: "../../imgs/60aa8b2251d6c237ba7dba4799cef76fc3eb4fb6.png",
    name: "تورته اوريو-ميني",
    price: "12",
  },
  {
    id: 4,
    image: "../../imgs/60aa8b2251d6c237ba7dba4799cef76fc3eb4fb6.png",
    name: "تورته اوريو-ميني",
    price: "12",
  },
  {
    id: 5,
    image: "../../imgs/60aa8b2251d6c237ba7dba4799cef76fc3eb4fb6.png",
    name: "تورته اوريو-ميني",
    price: "12",
  },
  {
    id: 6,
    image: "../../imgs/60aa8b2251d6c237ba7dba4799cef76fc3eb4fb6.png",
    name: "تورته اوريو-ميني",
    price: "12",
  },
  {
    id: 7,
    image: "../../imgs/60aa8b2251d6c237ba7dba4799cef76fc3eb4fb6.png",
    name: "تورته اوريو-ميني",
    price: "12",
  },
  {
    id: 8,
    image: "../../imgs/60aa8b2251d6c237ba7dba4799cef76fc3eb4fb6.png",
    name: "تورته اوريو-ميني",
    price: "12",
  },
  {
    id: 9,
    image: "../../imgs/60aa8b2251d6c237ba7dba4799cef76fc3eb4fb6.png",
    name: "تورته اوريو-ميني",
    price: "12",
  },
  {
    id: 10,
    image: "../../imgs/60aa8b2251d6c237ba7dba4799cef76fc3eb4fb6.png",
    name: "تورته اوريو-ميني",
    price: "12",
  },
  {
    id: 11,
    image: "../../imgs/60aa8b2251d6c237ba7dba4799cef76fc3eb4fb6.png",
    name: "تورته اوريو-ميني",
    price: "12",
  },
  {
    id: 12,
    image: "../../imgs/60aa8b2251d6c237ba7dba4799cef76fc3eb4fb6.png",
    name: "تورته اوريو-ميني",
    price: "12",
  },
  {
    id: 13,
    image: "../../imgs/60aa8b2251d6c237ba7dba4799cef76fc3eb4fb6.png",
    name: "تورته اوريو-ميني",
    price: "12",
  },
  {
    id: 14,
    image: "../../imgs/60aa8b2251d6c237ba7dba4799cef76fc3eb4fb6.png",
    name: "تورته اوريو-ميني",
    price: "12",
  },
  {
    id: 15,
    image: "../../imgs/60aa8b2251d6c237ba7dba4799cef76fc3eb4fb6.png",
    name: "تورته اوريو-ميني",
    price: "12",
  },
];

function createProductCard(product) {
  return `
    <div class="product-card position-relative text-center p-2" data-id="${product.id}">
      <i class="fa-regular fa-heart position-absolute m-3 fs-5"></i>
      <img src="${product.image}" alt="${product.name}" 
           class="img-fluid mb-3 rounded-4" width="200">
      
      <div class="d-flex justify-content-between align-items-center px-4">
        <p class="fw-bold mb-1">${product.name}</p>
        <i class="fa-solid fa-magnifying-glass-plus"></i>
      </div>

      <p class="text-muted mb-2">${product.price} ريال</p>

      <button class="btn btn-add y-u-bluetxt">
        <i class="fa-solid fa-bag-shopping y-u-pinkClr me-2"></i> 
        إضافة إلى السلة
      </button>
    </div>
  `;
}

const productsGrid = document.getElementById("productsGrid");
if (productsGrid) {
  productsGrid.innerHTML = products.map(createProductCard).join("");

  document.querySelectorAll(".product-card").forEach((card) => {
    card.addEventListener("click", () => {
      const id = card.getAttribute("data-id");
      window.location.href = `../singleProduct/layout.html?id=${id}`;
    });
  });
}

const productDetails = document.getElementById("productDetails");
if (productDetails) {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));
  const product = products.find((p) => p.id === id);

  if (product) {
    productDetails.innerHTML = `
      <div class="text-center">
        <img src="${product.image}" alt="${product.name}" class="img-fluid mb-3" width="250">
        <h2 class="mb-2">${product.name}</h2>
        <p class="mb-2">${product.description}</p>
        <p class="fs-4 mb-3">${product.price} ر.س</p>
        <button class="btn y-u-beigeColor rounded-5">
          <i class="fa-solid fa-bag-shopping ms-2"></i>اضافة الي السلة
        </button>
      </div>
    `;
  } else {
    productDetails.innerHTML = `<p class="text-danger">⚠ المنتج غير موجود</p>`;
  }
}
