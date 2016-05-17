module.exports = function(deal){

    var expensive = 0;

    deal.forEach(function(price){

        if(price > expensive){

          expensive = price;
        }
    })
    console.log(expensive);

    return  expensive;
  }
