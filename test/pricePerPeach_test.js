var average = require('../average');
var expensiveDeal = require('../expensiveDeal');
var cheapestDeal = require('../cheapestDeal');
var pricePerPeach = require('../pricePerPeach');
assert = require('assert');

var newArrayOne = ["4.00", "4.50", "4.67", "3.40"];
var newArrayTwo = ["4.25","4.50","4.44"];

var deals1 = [
  {
    deal: "1 for R4",
    qty: 1,
    price: 4
  }, {
    deal: "2 for R9",
    qty: 2,
    price: 9
  }, {
    deal: "3 for R14",
    qty: 3,
    price: 14
  }, {
    deal: "5 for R17",
    qty: 5,
    price: 17
  }
]

var deals2 = [
  {
    deal: "4 for R17",
    qty: 4,
    price: 17
  }, {
    deal: "6 for R27",
    qty: 6,
    price: 27
  }, {
    deal: "9 for R40",
    qty: 9,
    price: 40
  }
]

describe('Peach', function(){
  it('it should give me price per peach', function(){
    assert.deepEqual(pricePerPeach(deals1),["4.00", "4.50", "4.67", "3.40"])
  })
  it('it should give me price per peach', function(){
    assert.deepEqual(pricePerPeach(deals2),["4.25","4.50","4.44"])
  })
  it('it should tell me the cheapest deal', function(){
    assert.equal(cheapestDeal(newArrayOne),3.40)
  })
  it('it should tell me the cheapest deal', function(){
    assert.equal(cheapestDeal(newArrayTwo),4.25)
  })
  it('it should tell me the expensive deal', function(){
    assert.equal(expensiveDeal(newArrayOne),4.67)
  })
  it('it should tell me the expensive deal', function(){
    assert.equal(expensiveDeal(newArrayTwo),4.50)
  })
  it('it should give me the average of all deals', function(){
    assert.equal(average(newArrayOne),4.1425)
  })
  it('it should give me the average of all deals', function(){
    assert.equal(average(newArrayTwo),4.3967)
  })
});
