var Product = /** @class */ (function () {
  function Product(id, imgProduct, titleProduct, descriptionProduct, price) {
    this.id = id;
    this.imgProduct = imgProduct;
    this.titleProduct = titleProduct;
    this.descriptionProduct = descriptionProduct;
    this.price = price;
}
return Product;
}());
var product1 = new Product(1, '1.jpg', 'Traditional women\'s long dress, neck jars', 'Color red, handmade embroidery', 200);
var product2 = new Product(2, '3.jpg', 'Traditional women\'s long dress, neck jars', 'Color white, handmade embroidery', 270);
var product3 = new Product(3, '4.jpg', 'Traditional women\'s long dress, long hand', 'Color blue, handmade embroidery', 340);
var product4 = new Product(4, '8.png', 'Traditional women\'s long dress, long hand', 'Color blue, handmade embroidery', 340);
var product5 = new Product(5, '2.jpg', 'Traditional women\'s long dress, long hand', 'Color white, handmade embroidery', 280);
var product6 = new Product(6, '5.jpg', 'Innovative men\'s long dress 2', 'Color white, handmade embroidery', 370);
var product7 = new Product(7, '6.jpg', 'Innovative men\'s long dress 3', 'Color white, handmade embroidery', 330);
var product8 = new Product(8, '7.jpg', 'Innovative men\'s long dress 4', 'Color white, handmade embroidery', 400);
console.log(product1);
var products = [product1, product2, product3, product4, product5, product6, product7, product8];
console.log(products);
function countProCart(arrCart, a) {
arrCart = JSON.parse(localStorage.getItem('cart'));
    a = arrCart.length;
    console.log(a);
    document.getElementById('js-icon-amount').innerHTML = a;
}
countProCart();
