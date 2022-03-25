import React,{useState} from "react"
export default function Calc(){
    const [num1, setNum1] = useState(0)
    const [opcode, setOpcode] = useState("")
    const [num2, setNum2] = useState(0)
    const [result, setResult] = useState(0)
    const sum = () => {
        return setResult(Number(num1) + Number(num2))
    }
    const sub = () => {
        return setResult(Number(num1) - Number(num2))
    }
    const mul = () => {
        return setResult(Number(num1) * Number(num2))
    }
    const div = () => {
        return setResult(Number(num1) / Number(num2))
    }
    return <>
    <h1>계산기</h1>
    <div>
    <label><b>num1</b></label>
    <input id="num1" type="" /><br/>
    <label htmlFor=""><b>opcode</b></label>
    <select name="" id="">
        <option value="">+</option>
        <option value="">-</option>
        <option value="">*</option>
        <option value="">/</option>
        <option value="">%</option>
    </select>
    <br/>
    <label htmlFor=""><b>num2</b></label>
    <input id="num2" tpye=""/><br/>
    <button onClick={() => {setNum1(document.getElementById('num1').value)}}>num1 결정</button>
    <button onClick={() => {setNum2(document.getElementById('num2').value)}}>num2 결정</button><br/>
    <button onClick={() => {sum()}}>덧셈 실행</button>
    <button onClick={() => {sub()}}>뺄셈 실행</button><br/>
    <button onClick={() => {mul()}}>곱셈 실행</button>
    <button onClick={() => {div()}}>나눗셈 실행</button>
    <div>계산 결과: {result}</div>
    </div>
    </>
}