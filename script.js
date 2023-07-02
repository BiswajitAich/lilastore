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











const menuBtn = document.querySelector('.menu');
const menuDiv = document.querySelector('.menuDiv');
const shareDivBtn = menuDiv.querySelector('dt:nth-child(1) button');
const shareDiv = menuDiv.querySelector('dd:nth-child(2)');
const followUsDivBtn = menuDiv.querySelector('dt:nth-child(3)');
const followUsDiv = menuDiv.querySelector('dd:nth-child(4)');
const btnAdd = menuDiv.querySelector('dt:nth-child(5)');






menuDiv.style.display = "none"
function menu() {
  if (menuDiv.style.display === "none") {
    menuDiv.style.display = "flex";
    menuBtn.style.transform = "rotateZ(90deg)";
    menuDiv.classList.remove("slide-out");
    menuDiv.classList.add("slide-in");
  } else {
    menuDiv.classList.remove("slide-in");
    menuDiv.classList.add("slide-out");
    setTimeout(() => {
      menuDiv.style.display = "none";
    }, 200); 
    menuBtn.style.transform = "rotateZ(0deg)";
  }
  menuBtn.style.transition = 'transform 0.5s ease';

}

shareDiv.style.display="none" ;
shareDivBtn.addEventListener("click", ()=>{
if(shareDiv.style.display==="none"){
  shareDiv.style.display="block" ;
}else  {
      shareDiv.style.display="none" ;
}
});


followUsDiv.style.display="none";
followUsDivBtn.addEventListener("click",()=>{
if(followUsDiv.style.display==="none")
  followUsDiv.style.display="block" ;
else followUsDiv.style.display="none";
});


function shareViaFacebook() {
  var websiteUrl = encodeURIComponent("https://biswajitaich.github.io/lilastore/");
  var fbShareUrl = "https://www.facebook.com/sharer/sharer.php?u=" + websiteUrl;

  window.open(fbShareUrl, "_blank");
}

function shareViaWhatsApp() {
      var message = "Check out this website: https://biswajitaich.github.io/lilastore/";
      var encodedMessage = encodeURIComponent(message);
      var whatsappURL = "https://wa.me/?text=" + encodedMessage;
      window.open(whatsappURL);
}

function shareViaInstagram() {
  var websiteUrl = "https://biswajitaich.github.io/lilastore/";
  // Create a temporary input element
  var tempInput = document.createElement("input");
  tempInput.value = websiteUrl;
  document.body.appendChild(tempInput);
  // Select and copy the website URL
  tempInput.select();
  tempInput.setSelectionRange(0, 1000);
  document.execCommand("copy");
  // Remove the temporary input element
  document.body.removeChild(tempInput);
  // Open Instagram website
  var instagramUrl = "https://www.instagram.com/";
  window.open(instagramUrl, "_blank");
}

function copyLink() {
  var websiteUrl = "https://biswajitaich.github.io/lilastore/";
  var tempInput = document.createElement("input");
  tempInput.value = websiteUrl;
  document.body.appendChild(tempInput);
  // Select and copy the website URL
  tempInput.select();
  tempInput.setSelectionRange(0, 1000);
  document.execCommand("copy");
  // Remove the temporary input element
  document.body.removeChild(tempInput);

  var noticeDiv = document.createElement("div");
  noticeDiv.innerText = "Link copied";
  noticeDiv.classList.add("notice");
  shareDiv.appendChild(noticeDiv);

  setTimeout(() => {
    shareDiv.removeChild(noticeDiv);
  }, 2000);
}



let deferredPrompt;
window.addEventListener("beforeinstallprompt",(e)=>{
  e.preventDefault();
  deferredPrompt=e;
  btnAdd.style.display="block"
});
btnAdd.addEventListener('click', (e) => {
  btnAdd.style.border = "5px solid green";
  setTimeout(() => {
    btnAdd.style.border = "none";
  }, 500);

  deferredPrompt.prompt();
  deferredPrompt.userChoice.then((choiceResult) => {
    deferredPrompt = null;
  });
});

//stop zooming effect 
document.addEventListener('touchmove', function (event) {
  if (event.touches.length > 1) {
    event.preventDefault();
  }
}, { passive: false });


