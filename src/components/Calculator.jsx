import "./style.css";
import React, { useState } from "react";

function Calculator() {
  const values = [
    "AC","<<","%","/",
    "7","8","9","X",
    "4","5","6","-",
    "1","2","3","+",
    "0",".","=",
  ];

  const [firstNum, setFirstNum] = useState(0);
  const [num, setNum] = useState(0);
  const [operator, setOperator] = useState();

  function clearCharacter() {
    if (num.length === 1 || num === 0) {
      setNum(0);
    } else {
      setNum(num.slice(0, -1));
    }
  }

  function changeValue(e) {
    let btn = e.target.value;


    if (btn === "AC") {
      setNum(0);
    } 
    else if (btn === "<<") {
        clearCharacter();
    }
    else if (num === 0){
      setNum(btn)
    }else{
      setNum(num+btn)

      if (num.length > 7){
        setNum(num)
      }

      if(btn === "%"){
        percent()
      }

      else if(btn === "/" || btn === "X" || btn === "-" || btn === "+"){
        setFirstNum(num)
        setNum(0)
        setOperator(btn)
      }

      else if (btn === "="){
        calc()
      }
    }
    
  }

  function calc (){
    if (operator === "/"){
      setNum(firstNum/num)
    }
    if (operator === "X"){
      setNum(firstNum*num)
    }
    if (operator === "-"){
      setNum(firstNum-num)
    }
    if (operator === "+"){
      setNum(parseFloat(firstNum)+parseFloat(num))
    }


  }

  function percent (){
    setNum(num/100);
  }

  const buttons = values.map((value) => (
    <button
      onClick={changeValue}
      value={value}
      id={"btn_" + values.indexOf(value)}
    >
      {value}
    </button>
  ));

  return (
    <div id="content">
      <div id="calculator">
        <div id="display-value">
          <h1>{num}</h1>
        </div>
        <div id="box-calculator">{buttons}</div>
      </div>
    </div>
  );
}

export default Calculator;
