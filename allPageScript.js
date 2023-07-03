function handleNetworkChange() {
    var noInternetMessage = document.querySelector('.no-internet-body');
  
    if (navigator.onLine) {
      noInternetMessage.style.display = 'none';
    } else {
      noInternetMessage.style.display = 'block';
    }
  }
  
  window.addEventListener('load', function () {
    handleNetworkChange();
  });
  
  window.addEventListener('online', function () {
    handleNetworkChange();
  });
  



//stop zooming effect 
document.addEventListener('touchmove', function (event) {
  if (event.touches.length > 1) {
    event.preventDefault();
  }
}, { passive: false });
