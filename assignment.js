// Convert Feet To Mile
function feetToMile(feet){
    if(feet<0){
        return "can't be negative";
    }
    return ((feet/5280).toPrecision(5));
}

let feet=25;
let mile=feetToMile(feet);
console.log("1.Distance converter");
console.log("Distance in miles",mile);

//Calculator how much wood is required 
function woodCalculator(chair,table,bed){
  if(chair>=0 && table>=0 && bed>=0){
     let totalWood=chair*1+table*3+bed*5;
     return totalWood;
  }
  else{
    return 0;
  }
}
const chair=4;
const table=3;
const bed=2;
let requiredWood=woodCalculator(chair,table,bed);
console.log("2.Wood counter")
if(requiredWood!=0){    
    console.log("Wood needed",requiredWood);
}
else{
    console.log("Numbers of chair,table and bed can't be negative");

}

//Calculate how many bricks has been used
function brickCalculator(totalFloorNumber){
    if(totalFloorNumber<=0){
        return 0;
    }
    else{
        if(totalFloorNumber>0 && totalFloorNumber<=10){
             let totalBrick=totalFloorNumber*15*1000;
            return totalBrick;
        }
        else if(totalFloorNumber>10 &&  totalFloorNumber<=20){
             let totalBrick=10*15*1000+(totalFloorNumber-10)*12*1000;
             return totalBrick;
        }
         else{
            let totalBrick=10*15*1000+10*12*1000+(totalFloorNumber-20)*10*1000;
             return totalBrick;
        }
    }

}
let totalFloorNumber=4;
let usedBrick=brickCalculator(totalFloorNumber);
console.log("3.Brick Counter")
if(usedBrick!=0){
   console.log(usedBrick);
}
else{
    console.log("Floor number of a building can't be negative or zero");
}

//Give the smallest name of an array
function tinyFriend(names){  
 if(names.length>0){
    let namesWithoutEmptyString=[];
    
    names.sort(function(a,b)
      {
        return a.length - b.length;
      });
    for (let i = 0; i < names.length; i++){
          if(names[i].length>0)
          {
            namesWithoutEmptyString.push(names[i]);
          }
    }
    let smallestNames=[];
    smallestNames.push(namesWithoutEmptyString[0]);
      
    for(let j=1;j<namesWithoutEmptyString.length;j++){   
          if(namesWithoutEmptyString[j].length==namesWithoutEmptyString[0].length)
          {
            smallestNames.push(namesWithoutEmptyString[j]);
          }
    }
    return smallestNames;
   } 
   else{
      return 0;
   }
}
let names=["Anika","","po","Ruby","Totha","Tamim","Ar"];
//let names=[];
let smallestName=tinyFriend(names);
console.log("4.Smallest name from an array")
if(smallestName!=0){
   console.log(smallestName);
}
else{
    console.log("Array is empty");
}



