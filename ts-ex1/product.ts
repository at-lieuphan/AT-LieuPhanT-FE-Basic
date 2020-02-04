var arrCart: Array<Product> = [] ;
if (!localStorage.getItem('cart')) {
    localStorage.setItem('cart', JSON.stringify(arrCart));
}
 else {
   arrCart = JSON.parse(localStorage.getItem('cart'));
}

function listProduct(){
  var $box: string = document.getElementById('js-product-list');
  for(var i: number = 0, leng = products.length; i < leng; i++) {
    $box.innerHTML += `<li class="product-item">
    <img src="./images/${products[i].imgProduct}" class="product-card-img">
    <div class="product-card-content"><h4 class="product-card-title">${products[i].titleProduct}</h4>
    <span class="product-card-description">${products[i].descriptionProduct}</span><br>
    <span class="product-card-price"> Price:${products[i].price}</span>
    <button id="pro-${products[i].id}" class="btn-add-to-cart">ADD TO CART</button> 
    </div>`;
  }
}
listProduct();

function addCart(event){
  var quantity: number = 1;
  var index: number;
  var product: Product;
  // var idBtn: string;
  var idAdd: string = event.currentTarget.id;
  for (var i = 0, leng = products.length; i < leng; i++){
    if(idAdd === 'pro-' + products[i].id) {
      index = countCart(arrCart, products[i]);
      if(index !== -1){
        arrCart[index].quantity += quantity;
      }
      else {
        console.log(products[i]);
        product = products[i];
        arrCart.push({product, quantity});
        }
      localStorage.setItem('cart', JSON.stringify(arrCart));
    }
  }
  document.getElementById('js-icon-amount').innerHTML = arrCart.length;
}

function countCart(arrCart:Array<Product>, pro: Product) {
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
  var add:string = document.getElementsByClassName('btn-add-to-cart');
  for(var j = 0, leng = add.length; j < leng; j++){
    add[j].addEventListener('click', addCart, false);
  }
}
clickAddCart();
