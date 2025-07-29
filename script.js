document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            id: 1,
            name: "Linux/Unix Training",
            price: 4999,
            category: "Linux",
        },
        {
            id: 2,
            name: "Digital Marketing Course",
            price: 5999,
            category: "Marketing",
        },
        {
            id: 3,
            name: "ASP.NET Development",
            price: 3999,
            category: "Development",
        },
        {
            id: 4,
            name: "Blue Prism RPA",
            price: 2999,
            category: "Automation",
        },
    ];

    const cart = [];

    const productGrid = document.querySelector('.product-grid');

    function renderProducts() {
        productGrid.innerHTML = products.map(product => `
            <div class="product-card">
                <div class="product-info">
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-description">Price: ₹${product.price}</p>
                    <button class="add-to-cart" data-id="${product.id}">ADD TO CART</button>
                </div>
            </div>
        `).join('');
        addEventListeners();
    }

    function addEventListeners() {
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', (e) => {
                const id = parseInt(e.target.dataset.id);
                addToCart(id);
            });
        });
    }

    function addToCart(id) {
        const product = products.find(p => p.id === id);
        const cartItem = cart.find(item => item.id === id);
        if (cartItem) {
            cartItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        console.log(cart);
    }

    renderProducts();
});
