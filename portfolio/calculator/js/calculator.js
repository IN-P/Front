let input="";   //입력
let storage="";    //저장
let operand="";     //연산자

// btnDot .
// btnAdd +
// btnSubtract -
// btnMultiply *
// btnDivide /
// btnEnter =

//버튼 불러오기
const btn0 = document.querySelector(".btn0");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");
const btn5 = document.querySelector(".btn5");
const btn6 = document.querySelector(".btn6");
const btn7 = document.querySelector(".btn7");
const btn8 = document.querySelector(".btn8");
const btn9 = document.querySelector(".btn9");
const btnDot = document.querySelector(".btnDot");
const btnAdd = document.querySelector(".btnAdd");
const btnSubtract = document.querySelector(".btnSubtract");
const btnMultiply = document.querySelector(".btnMultiply");
const btnDivide = document.querySelector(".btnDivide");
const btnEnter = document.querySelector(".btnEnter");

//숫자 이벤트
btn0.addEventListener("click",()=>{input+="0";});
btn1.addEventListener("click",()=>{input+="1";});
btn2.addEventListener("click",()=>{input+="2";});
btn3.addEventListener("click",()=>{input+="3";});
btn4.addEventListener("click",()=>{input+="4";});
btn5.addEventListener("click",()=>{input+="5";});
btn6.addEventListener("click",()=>{input+="6";});
btn7.addEventListener("click",()=>{input+="7";});
btn8.addEventListener("click",()=>{input+="8";});
btn9.addEventListener("click",()=>{input+="9";});
btnDot.addEventListener("click",()=>{input+=".";});

//연산자 이벤트
btnAdd.addEventListener("click",()=>{
  operand="+";
  storage=input;
  input="";
});
btnSubtract.addEventListener("click",()=>{
  operand="-";
  storage=input;
  input="";
});
btnMultiply.addEventListener("click",()=>{
  operand="*";
  storage=input;
  input="";
});
btnDivide.addEventListener("click",()=>{
  operand="/";
  storage=input;
  input="";
});

//Enter 이벤트
btnEnter.addEventListener("click",()=>{
  let result=0;
  switch(operand){
    case "+": 
      result=parseFloat(storage)+parseFloat(input); 
      break;
    case "-": 
      result=parseFloat(storage)-parseFloat(input); 
      break;
    case "*": 
      result=parseFloat(storage)*parseFloat(input); 
      break;
    case "/": 
      result=parseFloat(storage)/parseFloat(input); 
      break;
    default:
      break;
  }
  console.log(`result : ${result}`);
  alert("result :"+result);
  //초기화
  input="";
  storage="";
  operand="";
});

