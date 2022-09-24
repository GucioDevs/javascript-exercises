const findTheOldest = function(people) {
   const sortedByAge = people.sort(function(a,b){
    const aAge = (a.hasOwnProperty('yearOfDeath')) ? a.yearOfDeath - a.yearOfBirth : 2022 - a.yearOfBirth;
    const bAge = (b.hasOwnProperty('yearOfDeath')) ? b.yearOfDeath - b.yearOfBirth : 2022 - b.yearOfBirth;
    if(aAge > bAge){
        return -1;
    }else{
        return 1;
    }
   }); 

   return sortedByAge[0];

};

// Do not edit below this line
module.exports = findTheOldest;
