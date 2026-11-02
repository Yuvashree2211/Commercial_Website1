# Ex02 Commercial Website
## Date: 02-11-2026

## AIM
To create a commercial website using CSS Flexbox.

## ALGORITHM
### STEP 1
Create an HTML file (index.html)

### STEP 2
Create a CSS file (style.css)

### STEP 3
Include a navigation bar with links to different sections.

### STEP 4
Add structured sections for Homepage, Products / Services, About Us, Contact Details and User Account.

### STEP 5
Include social media links at the footer with copyright information.

### STEP 6
Define global styles for fonts, colors, and layout.

### STEP 7
Style the header, navigation bar, and sections.

### STEP 8
Use Flexbox for layout design.

### STEP 9
Add hover effects and transitions for interactivity.

### STEP 10
Add Images and Media.

### STEP 11
Use optimized images for a professional look.

### STEP 12
Open the HTML file in a browser to check layout and functionality.

### STEP 13
Fix styling issues and refine content placement.

### STEP 14
Deploy the website.

### STEP 15
Upload to GitHub Pages for free hosting.

## PROGRAM
commerical.html
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Foodie Hub - delicious food, warm moments. Explore our menu and reserve your table.">
  <title>Foodie Hub | Delicious Food, Warm Moments</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<script src="script.js"></script>
<body>
  <div class="announcement">Freshly made, happily served. <span>Open daily · 11:00 AM – 11:00 PM</span></div>
  <header class="site-header">
    <a class="brand" href="#home"><span class="brand-mark">F</span><span>foodie<span class="brand-accent">hub.</span><small>GOOD FOOD. GOOD MOOD.</small></span></a>
    <button class="menu-toggle" id="menuToggle" aria-label="Open navigation" aria-expanded="false">☰</button>
    <nav id="mainNav">
      <a href="#home" class="nav-link active">Home</a>
      <a href="#about" class="nav-link">Our Story</a>
      <a href="#menu" class="nav-link">Menu</a>
      <a href="#reviews" class="nav-link">Reviews</a>
      <a href="#contact" class="nav-link">Contact</a>
      <a href="#reservation" class="nav-book">Book a Table <span>↗</span></a>
    </nav>
  </header>

  <main>
    <section class="hero" id="home">
      <div class="hero-shade"></div>
      <div class="hero-content">
        <div class="eyebrow"><span></span> WELCOME TO FOODIE HUB</div>
        <h1>Good food.<br><em>Great</em> moments.</h1>
        <p>Fresh ingredients, bold flavours and a little bit of magic in every bite. Your table is waiting.</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="#menu">Explore Menu <span>↗</span></a>
          <a class="btn btn-outline" href="#reservation">Reserve a Table</a>
        </div>
        <div class="hero-note"><span class="stars">★★★★★</span> <b>4.9/5</b> <span>· Loved by food lovers</span></div>
      </div>
      <div class="hero-tag"><b>MADE WITH LOVE</b><span>Served with joy ✦</span></div>
      <a class="scroll-cue" href="#about">SCROLL TO DISCOVER <span>↓</span></a>
    </section>

    <section class="quick-info">
      <div><span class="info-icon">✦</span><p><b>Fresh ingredients</b><small>Quality in every bite</small></p></div>
      <div><span class="info-icon">♨</span><p><b>Made to order</b><small>Always fresh, always tasty</small></p></div>
      <div><span class="info-icon">♡</span><p><b>Made with love</b><small>For moments worth sharing</small></p></div>
      <div><span class="info-icon">✧</span><p><b>Great experience</b><small>Good food, good company</small></p></div>
    </section>

    <section class="section about-section" id="about">
      <div class="about-image">
        <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1000&q=85" alt="Warmly lit restaurant dining table">
        <div class="image-stamp"><b>100%</b><span>GOOD<br>VIBES</span></div>
      </div>
      <div class="about-copy">
        <div class="eyebrow dark"><span></span> A LITTLE ABOUT US</div>
        <h2>More than a meal.<br><em>It's a feeling.</em></h2>
        <p class="lead">At Foodie Hub, we believe the best memories are made around a table.</p>
        <p>We bring together fresh ingredients, comforting favourites and exciting flavours to make every visit special. Whether it's a quick lunch, a family dinner or a celebration with friends, there's always a place for you here.</p>
        <a class="text-link" href="#contact">Get to know us <span>↗</span></a>
        <div class="about-stats"><div><b>Fresh</b><small>Every single day</small></div><div><b>Local</b><small>Thoughtfully sourced</small></div><div><b>Happy</b><small>Always our goal</small></div></div>
      </div>
    </section>

    <section class="menu-section section" id="menu">
      <div class="section-heading">
        <div><div class="eyebrow"><span></span> TASTY BY NATURE</div><h2>Our <em>favourites</em></h2><p>Made fresh. Served with a smile. Pick your next craving.</p></div>
        <a class="text-link desktop-link" href="#reservation">Visit us today <span>↗</span></a>
      </div>
      <div class="filters" id="filters">
        <button class="filter active" data-category="All">All items</button>
        <button class="filter" data-category="Starters">Starters</button>
        <button class="filter" data-category="Mains">Mains</button>
        <button class="filter" data-category="Pizza">Pizza</button>
        <button class="filter" data-category="Desserts">Desserts</button>
        <button class="filter" data-category="Drinks">Drinks</button>
      </div>
      <div class="menu-grid" id="menuGrid">
        <article class="food-card" data-category="Starters"><div class="food-photo"><img src="https://images.unsplash.com/photo-1541014741259-de529411b96a?auto=format&fit=crop&w=700&q=80" alt="Crispy golden fries"><span class="food-label">POPULAR</span></div><div class="food-details"><div><h3>Loaded Crispy Fries</h3><p>Golden fries, herbs & house sauce</p></div><div class="food-bottom"><b>₹189</b><button class="add-btn" data-name="Loaded Crispy Fries" data-price="189" aria-label="Add Loaded Crispy Fries">+</button></div></div></article>
        <article class="food-card" data-category="Mains"><div class="food-photo"><img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80" alt="Classic cheeseburger"><span class="food-label">CHEF'S PICK</span></div><div class="food-details"><div><h3>Double chicken Burger</h3><p>Juicy patty, cheese & fresh greens</p></div><div class="food-bottom"><b>₹249</b><button class="add-btn" data-name="Classic Hub Burger" data-price="299" aria-label="Add Classic Hub Burger">+</button></div></div></article>
        <article class="food-card" data-category="Pizza"><div class="food-photo"><img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=700&q=80" alt="Freshly baked pizza"></div><div class="food-details"><div><h3>Garden Fresh Pizza</h3><p>Garden veggies, mozzarella & basil</p></div><div class="food-bottom"><b>₹349</b><button class="add-btn" data-name="Garden Fresh Pizza" data-price="349" aria-label="Add Garden Fresh Pizza">+</button></div></div></article>
        <article class="food-card" data-category="Starters"><div class="food-photo"><img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=700&q=80" alt="Freshly prepared cheesy food"></div><div class="food-details"><div><h3>Cheesy Garlic Bread</h3><p>Toasted bread, garlic butter & cheese</p></div><div class="food-bottom"><b>₹159</b><button class="add-btn" data-name="Cheesy Garlic Bread" data-price="159" aria-label="Add Cheesy Garlic Bread">+</button></div></div></article>
        <article class="food-card" data-category="Desserts"><div class="food-photo"><img src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=700&q=80" alt="Chocolate ice cream dessert"><span class="food-label">SWEET TREAT</span></div><div class="food-details"><div><h3>Chocolate Sundae</h3><p>Rich chocolate, ice cream & crunch</p></div><div class="food-bottom"><b>₹179</b><button class="add-btn" data-name="Chocolate Sundae" data-price="179" aria-label="Add Chocolate Sundae">+</button></div></div></article>
        <article class="food-card" data-category="Drinks"><div class="food-photo"><img src="https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=700&q=80" alt="Refreshing fruit drink"></div><div class="food-details"><div><h3>Berry Bliss Cooler</h3><p>Refreshing berries, citrus & sparkle</p></div><div class="food-bottom"><b>₹139</b><button class="add-btn" data-name="Berry Bliss Cooler" data-price="139" aria-label="Add Berry Bliss Cooler">+</button></div></div></article>
      </div>
      <p class="menu-disclaimer">Menu and prices are sample details. Please confirm availability with the restaurant.</p>
    </section>

    <section class="special">
      <div class="special-content"><div class="eyebrow"><span></span> A LITTLE EXTRA HAPPINESS</div><h2>Make room for<br><em>something special.</em></h2><p>Good food tastes even better when shared. Bring your favourite people and make a moment of it.</p><a href="#reservation" class="btn btn-primary">Plan your visit <span>↗</span></a></div>
      <div class="special-image"><img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1000&q=85" alt="Friends sharing a meal at a restaurant"></div>
    </section>

    <section class="section reviews-section" id="reviews">
      <div class="section-heading"><div><div class="eyebrow dark"><span></span> WORD ON THE TABLE</div><h2>Good food, <em>good words.</em></h2><p>A little love from our happy guests.</p></div><div class="review-score"><b>4.9</b><span>★★★★★</span><small>Guest rating</small></div></div>
      <div class="review-grid">
        <blockquote><div class="stars">★★★★★</div><p>“Such a lovely place! The food was fresh, the flavours were amazing and the staff made us feel right at home.”</p><footer><span class="avatar">A</span><span><b>Ananya R.</b><small>Food lover</small></span></footer></blockquote>
        <blockquote><div class="stars">★★★★★</div><p>“Great ambience and delicious food. Perfect spot to catch up with friends. Definitely coming back!”</p><footer><span class="avatar">K</span><span><b>Karthik S.</b><small>Happy guest</small></span></footer></blockquote>
        <blockquote><div class="stars">★★★★★</div><p>“Loved the menu and the warm service. The desserts were a lovely finish to our evening.”</p><footer><span class="avatar">M</span><span><b>Meera P.</b><small>Regular guest</small></span></footer></blockquote>
      </div>
      <p class="menu-disclaimer">Sample testimonials shown for website preview.</p>
    </section>

    <section class="reservation-section" id="reservation">
      <div class="reservation-photo"><img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1100&q=85" alt="Restaurant interior ready for dinner"></div>
      <div class="reservation-panel"><div class="eyebrow"><span></span> YOUR TABLE IS WAITING</div><h2>Let's make<br><em>it a date.</em></h2><p>Planning a meal with your favourite people? Send us a reservation request.</p>
        <form id="bookingForm">
          <div class="form-row"><label>Your name<input name="name" type="text" placeholder="Full name" required></label><label>Phone number<input name="phone" type="tel" placeholder="Your phone number" pattern="[0-9+\-\s]{8,15}" required></label></div>
          <div class="form-row"><label>Date<input name="date" type="date" id="bookingDate" required></label><label>Time<select name="time" required><option value="">Choose a time</option><option>11:00 AM</option><option>12:00 PM</option><option>1:00 PM</option><option>2:00 PM</option><option>6:00 PM</option><option>7:00 PM</option><option>8:00 PM</option><option>9:00 PM</option></select></label></div>
          <label>Number of guests<select name="guests" required><option value="">Select guests</option><option>1 Guest</option><option>2 Guests</option><option>3 Guests</option><option>4 Guests</option><option>5 Guests</option><option>6 Guests</option><option>7+ Guests</option></select></label>
          <button class="btn btn-primary submit-btn" type="submit">Request a Table <span>↗</span></button>
          <p class="form-note">This demo form shows a confirmation on this page. Connect a booking service to receive real reservations.</p>
        </form>
        <div class="form-success" id="formSuccess" role="status">✓ Your request is ready! Please call the restaurant to confirm your booking.</div>
      </div>
    </section>

    <section class="contact-section section" id="contact">
      <div><div class="eyebrow dark"><span></span> COME SAY HELLO</div><h2>Find your way<br><em>to flavour.</em></h2><p>Good food is closer than you think. Drop by and make yourself at home.</p></div>
      <div class="contact-details"><div><span>VISIT US</span><b>Foodie Hub, Your Street,<br>Your City, Tamil Nadu</b></div><div><span>CALL US</span><b>+91 98765 43210</b></div><div><span>OPENING HOURS</span><b>Every day · 11 AM – 11 PM</b></div><a class="text-link" href="https://maps.google.com/?q=restaurants+near+me" target="_blank" rel="noopener">Find us on the map ↗</a></div>
    </section>
  </main>

  <footer class="footer">
    <a class="brand footer-brand" href="#home"><span class="brand-mark">F</span><span>foodie<span class="brand-accent">hub.</span><small>GOOD FOOD. GOOD MOOD.</small></span></a>
    <p>Made for food, made for moments.</p>
    <div class="footer-links"><a href="#home">Home</a><a href="#menu">Menu</a><a href="#reservation">Reservations</a><a href="#contact">Contact</a></div>
    <small>© <span id="year"></span> Foodie Hub. All rights reserved.</small>
  </footer>

  <button class="cart-fab" id="cartButton" aria-label="View order cart">🛍 <span id="cartCount">0</span></button>
  <div class="cart-panel" id="cartPanel" aria-label="Your order" aria-hidden="true">
    <div class="cart-head"><h3>Your order</h3><button id="closeCart" aria-label="Close cart">×</button></div>
    <div id="cartItems" class="cart-items"><p class="empty-cart">Your cart is waiting for something tasty.</p></div>
    <div class="cart-total"><span>Total</span><b id="cartTotal">₹0</b></div>
    <button class="btn btn-primary cart-checkout" id="checkoutButton">Continue</button>
    <small class="cart-note">Demo cart only — no payment is collected.</small>
  </div>
  <div class="toast" id="toast" role="status"></div>
  <script src="script.js"></script>
</body>
</html>

```
script.js
```

// SHOPPING CART
let cart = [];

const cartPanel = document.getElementById("cartPanel");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");


// ADD FOOD TO CART
document.querySelectorAll(".add-btn").forEach(button => {

    button.addEventListener("click", () => {

        let name = button.dataset.name;
        let price = Number(button.dataset.price);

        let existingItem = cart.find(item => item.name === name);

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

        alert(name + " added to cart!");
    });

});


// UPDATE CART
function updateCart() {

    cartItems.innerHTML = "";

    let total = 0;
    let count = 0;

    if (cart.length === 0) {

        cartItems.innerHTML =
            "<p class='empty-cart'>Your cart is empty!</p>";

    }

    cart.forEach((item, index) => {

        let itemTotal = item.price * item.quantity;

        total += itemTotal;
        count += item.quantity;

        cartItems.innerHTML += `
            <div class="cart-line">

                <div>
                    <b>${item.name}</b>
                    <br>
                    <small>₹${item.price} × ${item.quantity}</small>
                </div>

                <div>
                    <button onclick="changeQuantity(${index}, -1)">−</button>

                    ${item.quantity}

                    <button onclick="changeQuantity(${index}, 1)">+</button>

                    <button onclick="removeItem(${index})">🗑</button>
                </div>

                <b>₹${itemTotal}</b>

            </div>
        `;

    });

    cartCount.textContent = count;
    cartTotal.textContent = "₹" + total;

}


// CHANGE FOOD QUANTITY
function changeQuantity(index, amount) {

    cart[index].quantity += amount;

    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }

    updateCart();

}


// REMOVE FOOD ITEM
function removeItem(index) {

    cart.splice(index, 1);

    updateCart();

}


// OPEN CART
document.getElementById("cartButton").addEventListener("click", () => {

    cartPanel.classList.toggle("open");

    cartPanel.setAttribute(
        "aria-hidden",
        String(!cartPanel.classList.contains("open"))
    );

});


// CLOSE CART
document.getElementById("closeCart").addEventListener("click", () => {

    cartPanel.classList.remove("open");

    cartPanel.setAttribute("aria-hidden", "true");

});


// CHECKOUT
document.getElementById("checkoutButton").addEventListener("click", () => {

    if (cart.length === 0) {

        alert("Please select your food first!");

    } else {

        let message = "Your Selected Food:\n\n";

        cart.forEach(item => {

            message += item.name +
                " × " + item.quantity +
                " = ₹" + (item.price * item.quantity) + "\n";

        });

        let total = cart.reduce(
            (sum, item) => sum + item.price * item.quantity, 0
        );

        message += "\nTotal Amount: ₹" + total;

        alert(message);

    }

});


// INITIAL CART DISPLAY
updateCart();

```

## OUTPUT
![alt text](<Screenshot 2026-11-02 161424.png>)
![alt text](<Screenshot 2026-11-02 161506.png>)
## RESULT
The program for creating commercial website using CSS Flexbox is executed successfully.
