//jshint esversion:6

let allo;
let c;
let regularAllocation = 0;
let regularAllocationPlusOne = 0;
let neededAllocations = 0;
let neededPlusOneAllocations = 0;
let warningMessage = "";


function submitT(){
  //input
  allo = document.getElementById("allocation").value;
  c = document.getElementById("count").value;
//calculations
//todo: add column for alloMinusOne

  let roughCalc;
  if(allo ==0 || c==0){
    roughCalc =0;
  } else{
    roughCalc = allo/c;
  }
  let rebuiltAllo;
  if (c<=0){
    rebuiltAllo = allo;
  } else{
    rebuiltAllo = roughCalc.toFixed(2);
  }
  let rebuiltAlloTwo = rebuiltAllo*c;
  let remainder = allo-rebuiltAlloTwo;
  remainder = remainder.toFixed(2);
//  output
  let alloPlusOneCount=0;
  let alloCount=0;
  let alloPlusOne=0;

  //alloPlusOneCount creator
  if(c <=0){
    alloPlusOneCount =0;
  }else{
    alloPlusOneCount = remainder*100;
    alloPlusOneCount = alloPlusOneCount.toFixed(0);
    alloPlusOneCount = alloPlusOneCount *-1;
  }

  //alloPlusOne creator
   if (remainder == 0||c ==0){
    alloPlusOne =0;
  } else if (remainder<0){
    alloPlusOne = Number(rebuiltAllo)-0.01;
    alloPlusOne= alloPlusOne.toFixed(2);
  }else{
    alloPlusOne = Number(rebuiltAllo)+0.01;
    alloPlusOne= alloPlusOne.toFixed(2);
  }

  //alloCount creator
  if(alloPlusOneCount==0){
    alloCount = c;
  } else{
    if(alloPlusOneCount <0){
      alloPlusOneCount = alloPlusOneCount *-1;
    }
    alloCount = c-alloPlusOneCount;
    alloCount = alloCount.toFixed(0);
  }


let f =rebuiltAllo*alloCount;
let g = alloPlusOne*alloPlusOneCount;
let e = Number(f.toFixed(2))+Number(g.toFixed(2));


  if(alloPlusOne == 0 && alloPlusOneCount >0 || rebuiltAllo ==0 & alloCount >0 ){
    warningMessage = "Warning: the cost cannot be properly spread by this program.";
  } else if (allo <0 && c<0){
      warningMessage ="Ok, are you just messing with me?";
  } else if (allo< 0){
    warningMessage ="Sorry, negative money is not a real thing.";
  } else if (c<0){
    warningMessage = "How would that even work?";
  }else{
     warningMessage ="";
  }


//create error messages
  document.getElementById("regularAllocation").innerHTML =rebuiltAllo;
  document.getElementById("regularAllocationPlusOne").innerHTML=alloPlusOne;
  document.getElementById("neededPlusOneAllocations").innerHTML = alloPlusOneCount;
  document.getElementById("neededAllocations").innerHTML = alloCount;
  document.getElementById("warningMessage").innerHTML = warningMessage;

}
