const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let park1;

  beforeEach(function () {
  dinosaur1 =   new Dinosaur("Pachycephalosaurus", "leaves", 10)
  dinosaur2 =   new Dinosaur("Pachycephalosaurus", "fruit", 5)
  dinosaur3 =   new Dinosaur("Dreadnoughtus", "meat", 15)
  park1 = new Park("Gauresec", 5, [dinosaur1, dinosaur2, dinosaur3])
  })

  it('should have a name', function(){
    assert.strictEqual(park1.name, "Gauresec")
  });

  it('should have a ticket price', function(){
    assert.strictEqual(park1.ticketPrice, 5)
  });

  it('should have collection of dinosaurs', function(){
    assert.strictEqual(park1.collectionOfDinosaur.length, 3)
  });


  it('should be able to add a dinosaur to its collection', function(){
    dinosaur4 = new Dinosaur("animal", "leaf", 4)
    park1.add_dinosaur(dinosaur4)
    assert.strictEqual(park1.collectionOfDinosaur.length, 4)
  });

  // it('should be able to remove a dinosaur from its collection', function(){
  //   park1.remove_dinosaur(dinosaur3)
  //   assert.strictEqual(2, park1.collectionOfDinosaur.length)
  // });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    assert.strictEqual(park1.dinosaur_attracts_most_visitors(), dinosaur3)
  });

  // it('should be able to find all dinosaurs of a particular species', function(){
  //   assert.strictEqual(park1.find_dinosaur_of_same_species(dinosaur1), [dinosaur1, dinosaur2])
  // });

  // it('total_number_of_visitors_per_day', function(){
  //   assert.strictEqual(park1.total_number_of_visitors_per_day(), 30)
  // });

  // it('total_number_of_visitors_per_year', function(){
  //   assert.strictEqual(park1.total_number_of_visitors_per_year(), 10950)
  // });

  // it('total_income_from_visitors', function(){
  //   assert.strictEqual(park1.total_income_from_visitors(), 54,750)
  // });

  // it('should be able to remove all dinosaurs of a particular species');

});
