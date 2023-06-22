function search() {
    let input = document.getElementById('search-box').value;
    input = input.toLowerCase();
    let products = document.getElementsByClassName('card');
    let noResults = document.getElementById('no-results');

    let slider = document.querySelector(".slider");

    let hasResults = false;
    for (let i = 0; i < products.length; i++) {
        if (!products[i].innerHTML.toLowerCase().includes(input)) {
            products[i].style.display = "none";
        }
        else {
            products[i].style.display = "block";
            hasResults = true;
        }
    }

    if (!hasResults) {
        noResults.style.display = "block";
        slider.style.display = "none";
    } else {
        noResults.style.display = "none";
        slider.style.display = "block";
    }
}




// Get references to the buttons and product container
const preBtn = document.querySelector('.pre-btn');
const nxtBtn = document.querySelector('.nxt-btn');
const productContainer = document.querySelector('.product-container_slider');

// Define a variable to keep track of the current product index
let currentProductIndex = 0;

// Add click event listeners to the buttons
preBtn.addEventListener('click', () => {
  // Decrement the current product index
  currentProductIndex--;

  // If the index goes below 0, wrap around to the end
  if (currentProductIndex < 0) {
    currentProductIndex = productContainer.children.length - 1;
  }

  // Scroll the product container to the left to show the previous product
  productContainer.scrollTo({
    left: productContainer.children[currentProductIndex].offsetLeft,
    behavior: 'smooth'
  });
});

nxtBtn.addEventListener('click', () => {
  // Increment the current product index
  currentProductIndex++;

  // If the index goes past the end, wrap around to the beginning
  if (currentProductIndex >= productContainer.children.length) {
    currentProductIndex = 0;
  }

  // Scroll the product container to the left to show the next product
  productContainer.scrollTo({
    left: productContainer.children[currentProductIndex].offsetLeft,
    behavior: 'smooth'
  });
});
// Wait for the page to load
  document.addEventListener("DOMContentLoaded", function() {
    // Get the animation element
    var animationElement = document.querySelector(".starting-animation");
    
    // Listen for the end of the animation
    animationElement.addEventListener("animationend", function() {
      // Remove the animation element from the DOM
      animationElement.parentNode.removeChild(animationElement);
    });
  });

$(window).scroll(function() {
  var scrollTop = $(this).scrollTop();
  $('body').css('background-position', 'center ' + (-scrollTop / 4) + 'px');
});



