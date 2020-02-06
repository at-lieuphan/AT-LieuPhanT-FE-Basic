var arrCart = [];
if (!localStorage.getItem('cart')) {
  localStorage.setItem('cart', JSON.stringify(arrCart));
}
else {
  arrCart = JSON.parse(localStorage.getItem('cart'));
}

var $box = document.getElementById('js-product-list');
var $tempLi;
var $tempImg;
var $tempContent;
var $tempH4;
var $tempButton;
var $tempSpan1;
var $tempSpan2;
var lengthProducts = products.length;
function listproduct(){
  for (var i = 0; i < lengthProducts; i++) {
    $tempLi = document.createElement('li');
    $tempLi.setAttribute('class', 'product-item');
  
    $tempImg = document.createElement('img');
    $tempImg.setAttribute('src', './images/' + products[i].imgProduct);
    $tempImg.setAttribute('class', 'product-card-img');
    $tempLi.appendChild($tempImg);
  
    $tempDiv = document.createElement('div');
    $tempDiv.setAttribute('class', 'product-card-content');
  
    $tempH4 = document.createElement('h4');
    $tempContent = document.createTextNode(products[i].titleProduct);
    $tempH4.setAttribute('class', 'product-card-title');
    $tempH4.appendChild($tempContent);
    $tempDiv.appendChild($tempH4);
  
    $tempSpan1 = document.createElement('span');
    $tempContent = document.createTextNode(products[i].descriptionProduct);
    $tempSpan1.setAttribute('class', 'product-card-description');
    $tempSpan1.appendChild($tempContent);
    $tempDiv.appendChild($tempSpan1);
  
    $tempBr = document.createElement('br');
    $tempDiv.appendChild($tempBr);
    $tempSpan2 = document.createElement('span');
    $tempContent = document.createTextNode('Price: $' + products[i].price);
    $tempSpan2.setAttribute('class', 'product-card-price');
    $tempSpan2.appendChild($tempContent);
    $tempDiv.appendChild($tempSpan2);
  
    $tempButton = document.createElement('button');
    $tempButton.setAttribute('id','pro-' + products[i].id);
    $tempButton.setAttribute('class', 'btn-add-to-cart');
    $tempButton.addEventListener('click', addCart, false);
    $tempContent = document.createTextNode('ADD TO CART');
    $tempButton.appendChild($tempContent);
  
    $tempDiv.appendChild($tempButton);
    $tempLi.appendChild($tempDiv);
    $box.appendChild($tempLi);
  }
}

function addCart() {
  var quantity = 1;
  var index;
  var idBtn = event.currentTarget.id;
  for (var i = 0; i < lengthProducts; i++) {
    if (idBtn === 'pro-' + products[i].id) {
      index = countProduct(arrCart, products[i]);
      console.log(index);
      if (index !== -1) {
        arrCart[index].quantity += quantity;
        console.log(arrCart[index]);
      }
      else {
        var product = products[i];
        arrCart.push({product, quantity});
        console.log('length' + arrCart.length);
      }
      localStorage.setItem('cart', JSON.stringify(arrCart));
    }
  }
  document.getElementById('js-icon-amount').innerHTML = arrCart.length;
}

function countProduct(arrCart, pro) {
  var index = -1;
  var lengthArrCart = arrCart.length;
  for (var j = 0; j < lengthArrCart; j++) {
    if (pro.id === arrCart[j].product.id) {
      index = j;
    }
  }
  return index;
}
listproduct();
