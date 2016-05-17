module.exports = function(deal){
  var prices = [];
 deal.forEach(function(price){
 prc = price.price/ price.qty;
 prices.push(prc.toFixed(2));


});
console.log(prices);
return prices;
}
