const monitor = document.getElementById("monitor");
const button = document.getElementById("button");


let getNum;
let lastNum;
let displyNum = 0;
let nums =[];
let disNums =[];
let symbol = ['+','/','*','-','.',];

function sumNum(){
  if(lastNum == '='){
    if(symbol.includes(getNum)){
    }else{
      disNums = [];
      monitor.textContent = 0;
      displyNum = 0;
      lastNum ="";
    }}
  disNums.push(getNum);
  displyNum = disNums.join('');
  if(isNaN(displyNum) && displyNum.length>17){
    displyNum = displyNum.toString();
    displyNum = displyNum.slice(0,17);
    displyNum = Number(displyNum);
    }
  monitor.textContent = displyNum;
  lastNum = getNum;
  if(displyNum === 0){
    disNums.length = 0;
  }
};

/*global $*/
  $('[id=button]').click(function(){
    getNum = $(this).val();
    
    if(symbol.includes(getNum)){
      if(symbol.includes(lastNum)){
        disNums = disNums.slice(0,-1);
          sumNum();
      }else if(displyNum == 0){
        if(getNum !== "-"){
          disNums.push(0);
        }
          sumNum();
      }else{
          sumNum();      
      }
      
    }else if(getNum=="="){
      disNums.unshift('(');
      disNums.push(')','*10000000000000');
      displyNum = disNums.join('');
      displyNum = Function('return('+displyNum+');')();
      if(Number.isInteger(displyNum)){
        displyNum = Math.round(displyNum);
        }
      displyNum = displyNum / 10000000000000;
      displyNum = displyNum.toString();
      displyNum = displyNum.slice(0,17);
      displyNum = Number(displyNum);
      monitor.textContent = displyNum;
      disNums =[];
      if(displyNum == 0){}else{
       disNums.push(displyNum);}
      lastNum = getNum;
  
    }else if(getNum=="AC"){
      disNums = [];
      monitor.textContent = 0;
      displyNum = 0;
      lastNum ="";
      
    }else if(getNum == "0"||getNum == "00"){
      if(displyNum == 0){
      }else{
         sumNum();
      }
    }else{
    sumNum();
    }
    
  });

  
