module.exports = function(deal){

    var cheaper = 1000;

    deal.forEach(function(price){

        if(price < cheaper ){

          cheaper = price;
        }
    })
    console.log(cheaper);

    return cheaper;
  }
