var products = [];
var prices = [];

$("button").click(function() {
    var product = $(".itemName").val();
    products.push(product);
    $(".Total").text(" "+ + "!");
    var price = $ (".itemPrice").val();
    prices.push(price);
    console.log(products);
    console.log(prices);
});