var arrCart = [];
if (!localStorage.getItem('cart')) {
    localStorage.setItem('cart', JSON.stringify(arrCart));
}
else {
    arrCart = JSON.parse(localStorage.getItem('cart'));
}
function listProduct() {
    var $box = document.getElementById('js-product-list');
    for (var i = 0, leng = products.length; i < leng; i++) {
        $box.innerHTML += "<li class=\"product-item\">\n    <img src=\"./images/" + products[i].imgProduct + "\" class=\"product-card-img\">\n    <div class=\"product-card-content\"><h4 class=\"product-card-title\">" + products[i].titleProduct + "</h4>\n    <span class=\"product-card-description\">" + products[i].descriptionProduct + "</span><br>\n    <span class=\"product-card-price\"> Price:" + products[i].price + "</span>\n    <button id=\"pro-" + products[i].id + "\" class=\"btn-add-to-cart\">ADD TO CART</button> \n    </div>";
    }
}
listProduct();
function addCart(event) {
    var quantity = 1;
    var index;
    var product;
    // var idBtn: string;
    var idAdd = event.currentTarget.id;
    for (var i = 0, leng = products.length; i < leng; i++) {
        if (idAdd === 'pro-' + products[i].id) {
            index = countCart(arrCart, products[i]);
            if (index !== -1) {
                arrCart[index].quantity += quantity;
            }
            else {
                console.log(products[i]);
                product = products[i];
                arrCart.push({ product: product, quantity: quantity });
            }
            localStorage.setItem('cart', JSON.stringify(arrCart));
        }
    }
    document.getElementById('js-icon-amount').innerHTML = arrCart.length;
}
function countCart(arrCart, pro) {
    var index = -1;
    for (var k = 0, leng = arrCart.length; k < leng; k++) {
        console.log(pro.id);
        console.log(arrCart);
        console.log(arrCart[k]);
        if (pro.id === arrCart[k].product.id) {
            index = k;
        }
    }
    return index;
}
function clickAddCart() {
    var add = document.getElementsByClassName('btn-add-to-cart');
    for (var j = 0, leng = add.length; j < leng; j++) {
        add[j].addEventListener('click', addCart, false);
    }
}
clickAddCart();
