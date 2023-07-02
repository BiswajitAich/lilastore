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
  
