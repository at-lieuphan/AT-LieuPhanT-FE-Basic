var dataCart = JSON.parse(localStorage.getItem('cart'));
console.log(dataCart);
var $ItemCart = document.getElementById('js-card');
var subTotal, count, subTotal, idCart, priceCart;
function listCart() {
    for (var i = 0, leng = dataCart.length; i < leng; i++) {
        idCart = i + 1;
        count = parseInt(dataCart[i].quantity);
        priceCart = parseInt(dataCart[i].product.price);
        subTotal = count * priceCart;
        $ItemCart.innerHTML += "<tr id =\"jsRow' " + idCart + " \">\n      <td> " + idCart + "</td>\n      <td> " + dataCart[i].product.titleProduct + " </td>\n      <td><img class=\"img-cart-item\" src=\"images/" + dataCart[i].product.imgProduct + "\"></td>\n      <td class=\"td-quantity\">" + dataCart[i].quantity + " </td>\n      <td> &#36; " + dataCart[i].product.price + "</td>\n      <td>\t&#36; " + count * priceCart + " </td>\n      <td><button class=\"js-btn-delete\" id = \"del-" + dataCart[i].product.id + "\">\n      <img class=\"img-delete\" src=\"images/download-removebg-preview.png\" alt=\"\"></button></td>\n      </tr>";
    }
    document.getElementById('js-total').innerHTML = '&#36;' + sumTotal();
}
function sumTotal() {
    var sum = 0;
    for (var j = 0, leng = dataCart.length; j < leng; j++) {
        sum += parseInt(dataCart[j].quantity) * parseInt(dataCart[j].product.price);
    }
    return sum;
}
listCart();
function deleteCart(event) {
    var idDel = event.currentTarget.id;
    console.log(idDel);
    var message = confirm("Do you want delete this product?");
    if (message === true) {
        for (var k = 0, leng = dataCart.length; k < leng; k++) {
            if ('del-' + dataCart[k].product.id === idDel) {
                dataCart.splice(k, 1);
                console.log(dataCart);
                $ItemCart.innerHTML = [];
                localStorage.setItem('cart', JSON.stringify(dataCart));
                listCart();
                clickBtnDel();
                return true;
            }
        }
    }
    return false;
}
function clickBtnDel() {
    var del = document.getElementsByClassName('js-btn-delete');
    for (var l = 0, leng = del.length; l < leng; l++) {
        del[l].addEventListener('click', deleteCart, false);
    }
}
clickBtnDel();
