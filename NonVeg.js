// Select the modal and its content elements
// const modalProductName = document.getElementById('modalProductName');
// const modalProductDescription = document.getElementById('modalProductDescription');
let modal_image = document.getElementById("modal_image")
let modal_name = document.getElementById("modal_name")

// Function to open the modal and set dynamic content
document.querySelectorAll('.inside-menu-card-link').forEach(button => {
    button.addEventListener('click', function() {
        const product = this.closest('.product');  // Find the closest product div
        // const productName = product.getAttribute('data-product-name');
        // const productDescription = product.getAttribute('data-product-description');
        let image_address = product.querySelector('img').getAttribute('src');
        let product_name = product.querySelector('h1').textContent;

        // Set modal content dynamically
        // modalProductName.textContent = productName;
        // modalProductDescription.textContent = productDescription;
        modal_name.textContent = product_name;
        modal_image.src = image_address;
    });
});