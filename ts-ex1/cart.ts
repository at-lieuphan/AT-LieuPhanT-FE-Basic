var dataCart: Array<Product> = JSON.parse(localStorage.getItem('cart'));
console.log(dataCart);
var $ItemCart: string = document.getElementById('js-card');
var subTotal, count, subTotal, idCart, priceCart: number;
function listCart() {
  for (var i: number = 0, leng: number = dataCart.length; i < leng; i++) {
    idCart = i + 1;
    count = parseInt(dataCart[i].quantity);
    priceCart = parseInt(dataCart[i].product.price);
    subTotal = count * priceCart;
    $ItemCart.innerHTML += `<tr id ="jsRow' ${idCart} ">
      <td> ${idCart}</td>
      <td> ${dataCart[i].product.titleProduct} </td>
      <td><img class="img-cart-item" src="images/${dataCart[i].product.imgProduct}"></td>
      <td class="td-quantity">${dataCart[i].quantity} </td>
      <td> &#36; ${dataCart[i].product.price}</td>
      <td>	&#36; ${count * priceCart} </td>
      <td><button class="js-btn-delete" id = "del-${dataCart[i].product.id}">
      <img class="img-delete" src="images/download-removebg-preview.png" alt=""></button></td>
      </tr>`;
  }
  document.getElementById('js-total').innerHTML = '&#36;' + sumTotal();
}

function sumTotal() {
  var sum:number = 0;
  for (var j:number = 0, leng:number = dataCart.length; j < leng; j++) {
    sum += parseInt(dataCart[j].quantity) * parseInt(dataCart[j].product.price);
  }
  return sum;
}
listCart();

function deleteCart(event) {
  var idDel:string = event.currentTarget.id;
  console.log(idDel);
  var message:any = confirm("Do you want delete this product?");
  if(message === true) {
    for(var k: number = 0, leng:number = dataCart.length; k < leng; k++) {
      if('del-' + dataCart[k].product.id === idDel) {
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
  var del: string = document.getElementsByClassName('js-btn-delete');
  for(var l: number = 0, leng: number = del.length; l < leng ; l++) {
    del[l].addEventListener('click', deleteCart, false);
  }
}
clickBtnDel();