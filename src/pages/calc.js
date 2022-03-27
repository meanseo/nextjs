import React,{useState} from "react"
export default function Calc(){
    const [num1, setNum1] = useState(0)
    const [opcode, setOpcode] = useState("")
    const [num2, setNum2] = useState(0)
    const [result, setResult] = useState(0)

    const calc =(num1,opcode,num2)=> {
        switch(opcode){
            case '+': return Number(num1) + Number(num2)   
            case '-': return Number(num1) - Number(num2)   
            case '*': return Number(num1) * Number(num2)   
            case '/': return Number(num1) / Number(num2)   
            case '%': return Number(num1) % Number(num2)   
        }            
    }
    const res =()=>{
        let num1 = (document.getElementById('num1')).value
        let opcode = (document.getElementById('opcode')).value  
        let num2 = (document.getElementById('num2')).value 
        setNum1(num1)
        setOpcode(opcode)
        setNum2(num2)
        setResult(calc(num1,opcode,num2))
    }
    return (
        <>
        <h1>계산기</h1>
        <div>
            <label><b>number1</b></label>
            <input id="num1"/><br/>
            <label><b>opcode</b></label>
            <select id="opcode">
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
                <option value="%">%</option>
            </select>
            <br/>
            <label><b>number2</b></label>
            <input id="num2"/><br/>
            <button onClick={()=>{res()}}>실행</button>
            <div> {num1} {opcode} {num2} = {result}</div>
    </div>
        
        </>
    )
}