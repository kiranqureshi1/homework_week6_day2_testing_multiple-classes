const Park = function(name, ticketPrice, collectionOfDinosaur){
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.collectionOfDinosaur = collectionOfDinosaur;
};

Park.prototype.add_dinosaur = function(dinosaur){
  this.collectionOfDinosaur.push(dinosaur)
};

Park.prototype.remove_dinosaur = function(dinosaur){
  for( var i = 0; i < Park.length-1; i++){
   if ( this.collectionOfDinosaur[i] === dinosaur) {
     arr.splice(i, 1);
   };
};
};

Park.prototype.dinosaur_attracts_most_visitors = function(){
   let theMostVisitors = 0
   let popularDinosaur = 0
   for (var dinosaur of this.collectionOfDinosaur){
     if (dinosaur.guestsAttractedPerDay > theMostVisitors){
        theMostVisitors = dinosaur.guestsAttractedPerDay;
        popularDinosaur = dinosaur
     };
   };
    return popularDinosaur;
 };



Park.prototype.find_dinosaur_of_same_species = function(dinosaura){
  let sameDinosaurArray = [];
  for (var dinosaur of this.collectionOfDinosaur){
    if (dinosaur.species === dinosaura.species){
      sameDinosaurArray.push(dinosaur);
    };
  };
  return sameDinosaurArray;
};

Park.prototype.total_number_of_visitors_per_day = function(){
  let visitorsVisited = 0
  for (var dinosaur of this.collectionOfDinosaur){
    if (dinosaur.guestsAttractedPerDay > visitorsVisited){
      visitorsVisited += dinosaur.guestsAttractedPerDay
    };
  };
  return visitorsVisited;
};


Park.prototype.total_number_of_visitors_per_year = function(){
  // let total = total_number_of_visitors_per_day * 365
  // return total;
  let visitorsVisited = 0
  for (var dinosaur of this.collectionOfDinosaur){
    if (dinosaur.guestsAttractedPerDay > visitorsVisited){
      visitorsVisited += dinosaur.guestsAttractedPerDay
      var total = visitorsVisited * 365;
    };
  };
  return total
};
// };

Park.prototype.total_income_from_visitors = function(){
  total_number_of_visitors_per_year * this.ticketPrice
};

// for(var i = 0; i < Park.length; i++){
//   if (i.dinosaur.guestsAttractedPerDay > theMostVisitors){
//     let theMostVisitors = i.visitor
//     let popularDinosaur = i
//   };

module.exports = Park
