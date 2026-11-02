
// =====================================
// FOODIE HUB - COMPLETE JAVASCRIPT
// =====================================

// 1. FOOTER YEAR
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// 2. MOBILE NAVIGATION
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", function () {
        mainNav.classList.toggle("open");

        const isOpen = mainNav.classList.contains("open");
        menuToggle.setAttribute("aria-expanded", isOpen);
    });

    document.querySelectorAll(".nav-link, .nav-book").forEach(link => {
        link.addEventListener("click", function () {
            mainNav.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });
}


// 3. MENU CATEGORY FILTER
const filterButtons = document.querySelectorAll(".filter");
const foodCards = document.querySelectorAll(".food-card");

filterButtons.forEach(button => {
    button.addEventListener("click", function () {

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        this.classList.add("active");

        const category = this.dataset.category;

        foodCards.forEach(card => {
            if (
                category === "All" ||
                card.dataset.category === category
            ) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        });
    });
});


// 4. SHOPPING CART
let cart = [];

const cartButton = document.getElementById("cartButton");
const cartPanel = document.getElementById("cartPanel");
const closeCart = document.getElementById("closeCart");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");
const checkoutButton = document.getElementById("checkoutButton");


// OPEN CART
if (cartButton && cartPanel) {
    cartButton.addEventListener("click", function () {
        cartPanel.classList.add("open");
        cartPanel.setAttribute("aria-hidden", "false");
    });
}


// CLOSE CART
if (closeCart && cartPanel) {
    closeCart.addEventListener("click", function () {
        cartPanel.classList.remove("open");
        cartPanel.setAttribute("aria-hidden", "true");
    });
}


// 5. ADD FOOD TO CART
document.querySelectorAll(".add-btn").forEach(button => {

    button.addEventListener("click", function () {

        const name = this.dataset.name;
        const price = Number(this.dataset.price);

        if (!name || !Number.isFinite(price) || price <= 0) {
            showToast("Food details are incorrect!");
            return;
        }

        const existingItem = cart.find(item => item.name === name);

        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({
                name: name,
                price: price,
                quantity: 1
            });
        }

        updateCart();

        showToast(name + " added to cart!");
    });

});


// 6. UPDATE CART
function updateCart() {

    if (!cartItems || !cartCount || !cartTotal) {
        return;
    }

    cartItems.innerHTML = "";

    let total = 0;
    let count = 0;

    if (cart.length === 0) {
        cartItems.innerHTML =
            '<p class="empty-cart">Your cart is waiting for something tasty.</p>';
    }

    cart.forEach((item, index) => {

        const itemTotal = item.price * item.quantity;

        total += itemTotal;
        count += item.quantity;

        const cartLine = document.createElement("div");
        cartLine.className = "cart-line";

        cartLine.innerHTML = `
            <div class="cart-line-info">
                <strong>${escapeHTML(item.name)}</strong>
                <span>₹${item.price} × ${item.quantity}</span>
                <b>₹${itemTotal}</b>
            </div>

            <div class="cart-controls">
                <button type="button" data-index="${index}"
                    data-action="decrease">−</button>

                <span>${item.quantity}</span>

                <button type="button" data-index="${index}"
                    data-action="increase">+</button>

                <button type="button" data-index="${index}"
                    data-action="remove">×</button>
            </div>
        `;

        cartItems.appendChild(cartLine);
    });

    cartCount.textContent = count;
    cartTotal.textContent = "₹" + total;
}


// 7. CART QUANTITY AND REMOVE BUTTONS
if (cartItems) {

    cartItems.addEventListener("click", function (event) {

        const button = event.target.closest("button[data-action]");

        if (!button) return;

        const index = Number(button.dataset.index);
        const action = button.dataset.action;

        if (!cart[index]) return;

        if (action === "increase") {
            cart[index].quantity++;
        }

        if (action === "decrease") {
            cart[index].quantity--;

            if (cart[index].quantity <= 0) {
                cart.splice(index, 1);
            }
        }

        if (action === "remove") {
            cart.splice(index, 1);
        }

        updateCart();
    });
}


// 8. CHECKOUT
if (checkoutButton) {

    checkoutButton.addEventListener("click", function () {

        if (cart.length === 0) {
            showToast("Your cart is empty!");
            return;
        }

        let total = 0;

        cart.forEach(item => {
            total += item.price * item.quantity;
        });

        alert(
            "Thank you for choosing Foodie Hub!\n\n" +
            "Items: " + cart.reduce((sum, item) => sum + item.quantity, 0) +
            "\nTotal Amount: ₹" + total +
            "\n\nThis is a demo checkout. No payment is collected."
        );
    });
}


// 9. TOAST MESSAGE
function showToast(message) {

    const toast = document.getElementById("toast");

    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(window.toastTimer);

    window.toastTimer = setTimeout(function () {
        toast.classList.remove("show");
    }, 2500);
}


// 10. SAFE FOOD NAME DISPLAY
function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, function (character) {
        const characters = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        };

        return characters[character];
    });
}


// 11. RESERVATION FORM
const bookingForm = document.getElementById("bookingForm");
const formSuccess = document.getElementById("formSuccess");
const bookingDate = document.getElementById("bookingDate");

if (bookingDate) {
    const today = new Date();
    const localDate = new Date(
        today.getTime() - today.getTimezoneOffset() * 60000
    ).toISOString().split("T")[0];

    bookingDate.min = localDate;
}

if (bookingForm && formSuccess) {

    bookingForm.addEventListener("submit", function (event) {

        event.preventDefault();

        if (!bookingForm.reportValidity()) {
            return;
        }

        formSuccess.style.display = "block";
        bookingForm.reset();

        showToast("Reservation request submitted!");
    });
}


// 12. INITIAL CART DISPLAY
updateCart();

console.log("Foodie Hub website loaded successfully!");
