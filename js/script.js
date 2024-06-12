document.addEventListener('DOMContentLoaded', () => {
    const cartCount = document.getElementById('cart-count');
    const cart = [];
    const products = [
        {
            id: '1',
            title: 'Product 1',
            price: 10.00,
            description: 'This is a great product.',
            image: 'images/product1.jpg'
        },
        {
            id: '2',
            title: 'Product 2',
            price: 20.00,
            description: 'This is another great product.',
            image: 'images/product2.jpg'
        }
        // Add more products as needed
    ];

    document.querySelectorAll('.product button').forEach(button => {
        button.addEventListener('click', event => {
            const productId = event.target.closest('.product').getAttribute('data-id');
            if (event.target.textContent === 'Add to Cart') {
                addToCart(productId);
            } else if (event.target.textContent === 'View Details') {
                viewDetails(productId);
            }
        });
    });

    const modal = document.getElementById('product-modal');
    const closeModalButton = document.querySelector('.close-button');

    closeModalButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.onclick = event => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };

    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        if (product) {
            cart.push(product);
            cartCount.textContent = cart.length;
            alert('Added to cart!');
        }
    }

    function viewDetails(productId) {
        const product = products.find(p => p.id === productId);
        if (product) {
            document.getElementById('modal-img').src = product.image;
            document.getElementById('modal-title').textContent = product.title;
            document.getElementById('modal-price').textContent = `$${product.price.toFixed(2)}`;
            document.getElementById('modal-description').textContent = product.description;
            modal.style.display = 'block';
        }
    }
});
