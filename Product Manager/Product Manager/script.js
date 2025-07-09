const productList = document.getElementById("product-list");
const form = document.getElementById("product-form");
const title = document.getElementById("title");
const category = document.getElementById("category");
const price = document.getElementById("price");
const image = document.getElementById("image");

const filterCategory = document.getElementById("filter-category");
const sortLowHigh = document.getElementById("sort-low-high");
const sortHighLow = document.getElementById("sort-high-low");

const submit = document.getElementById("submit");

// Update inputs
const updatePitchIdInput = document.getElementById("update-id");
const updatePitchTitleInput = document.getElementById("update-title");
const updatePitchImageInput = document.getElementById("update-image");
const updatePitchCategoryInput = document.getElementById("update-category");
const updatePitchPriceInput = document.getElementById("update-price");
const updatePitchBtn = document.getElementById("update-pitch");

const updatePricePitchId = document.getElementById("update-id");
const updatePricePitchPrice = document.getElementById("update-price");
const updatePricePitchPriceButton = document.getElementById("update-price-pitch");

let globalData = [];

// Fetch and Render Data
function fetchData() {
    fetch("http://localhost:3000/products")
        .then(res => res.json())
        .then(data => {
            globalData = data;
            renderCards(data);
        })
        .catch(err => console.log(err));
}
fetchData();

function renderCards(data) {
    const html = data.map(el => card(el)).join("");
    productList.innerHTML = html;
}

function card(product) {
    return `
    <div class="card">
      <img src="${product.image}"  alt="${product.title}">
      <h3>${product.title}</h3>
      <p>Category: ${product.category}</p>
      <p>Price: ₹${product.price}</p>
      <button class="delete-btn" data-id="${product.id}">Delete</button>
      <a href="#" class="card-link" data-id="${product.id}">Edit</a>
      <a href="#" class="edit-price-btn" data-id="${product.id}">Edit Price</a>
    </div>
  `;
}

// Add Product
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newProduct = {
        title: title.value,
        category: category.value,
        price: Number(price.value),
        image: image.value,
        founder: "" // Optional default
    };

    fetch("http://localhost:3000/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct)
    })
        .then(res => res.json())
        .then(data => {
            alert("Product added!");
            form.reset();
            fetchData();
        })
        .catch(err => console.log(err));
});

// Delete & Edit (Price/All) Logic
document.addEventListener("click", (e) => {
    const id = e.target.dataset.id;

    // Delete
    if (e.target.classList.contains("delete-btn")) {
        fetch(`http://localhost:3000/products/${id}`, { method: "DELETE" })
            .then(() => {
                alert("Product deleted");
                fetchData();
            })
            .catch(err => console.log(err));
    }

    // Edit full
    if (e.target.classList.contains("card-link")) {
        e.preventDefault();
        fetch(`http://localhost:3000/products/${id}`)
            .then(res => res.json())
            .then(data => {
                updatePitchIdInput.value = data.id;
                updatePitchTitleInput.value = data.title;
                updatePitchImageInput.value = data.image;
                updatePitchCategoryInput.value = data.category;
                updatePitchfounderInput.value = data.founder || "";
                updatePitchPriceInput.value = data.price;
            });
    }

    // Edit price
    if (e.target.classList.contains("edit-price-btn")) {
        e.preventDefault();
        fetch(`http://localhost:3000/products/${id}`)
            .then(res => res.json())
            .then(data => {
                updatePricePitchId.value = data.id;
                updatePricePitchPrice.value = data.price;
            });
    }
});

// Update Price Only
updatePricePitchPriceButton.addEventListener("click", () => {
    const id = updatePricePitchId.value;
    const updatedPrice = Number(updatePricePitchPrice.value);

    fetch(`http://localhost:3000/products/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ price: updatedPrice })
    })
        .then(res => res.json())
        .then(() => {
            alert("Price updated!");
            fetchData();
        })
        .catch(err => console.log(err));
});

// Update All Fields
updatePitchBtn.addEventListener("click", () => {
    const id = updatePitchIdInput.value;
    const updatedData = {
        title: updatePitchTitleInput.value,
        image: updatePitchImageInput.value,
        category: updatePitchCategoryInput.value,

        price: Number(updatePitchPriceInput.value)
    };

    fetch(`http://localhost:3000/products/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData)
    })
        .then(res => res.json())
        .then(() => {
            alert("All fields updated!");
            fetchData();
        })
        .catch(err => console.log(err));
});

// Filter by Category
filterCategory.addEventListener("change", () => {
    const selected = filterCategory.value;
    const filtered = selected ? globalData.filter(p => p.category === selected) : globalData;
    renderCards(filtered);
});

// Sort Low to High
sortLowHigh.addEventListener("click", () => {
    const sorted = [...globalData].sort((a, b) => a.price - b.price);
    renderCards(sorted);
});

// Sort High to Low
sortHighLow.addEventListener("click", () => {
    const sorted = [...globalData].sort((a, b) => b.price - a.price);
    renderCards(sorted);
});