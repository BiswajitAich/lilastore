function search() {
    let input = document.getElementById('search-box').value;
    input = input.toLowerCase();
    let products = document.getElementsByClassName('card');

    for (let i = 0; i < products.length; i++) {
        if (!products[i].innerHTML.toLowerCase().includes(input)) {
            products[i].style.display="none";
        }
        else {
            products[i].style.display="block";
        }
    }
}