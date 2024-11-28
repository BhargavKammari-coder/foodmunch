// Select the modal and its content elements
const modalProductName = document.getElementById('modalProductName');
const modalProductDescription = document.getElementById('modalProductDescription');
let popup = document.getElementById("popup");
// Function to open the modal and set dynamic content
document.querySelectorAll('.inside-menu-card-link').forEach(button => {
    button.addEventListener('click', function() {
        const product = this.closest('.product');  // Find the closest product div
        const productName = product.getAttribute('data-product-name');
        const productDescription = product.getAttribute('data-product-description');
        let image_address = querySelector('img').getAttribute('src');

        // Set modal content dynamically
        modalProductName.textContent = productName;
        modalProductDescription.textContent = productDescription;
    });
});



function openPopup(){
    popup.classList.add("open-popup");
    
}
function closePopup(){
    popup.classList.remove("open-popup");
}