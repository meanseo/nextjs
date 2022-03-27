import React, { useState } from "react";

export default function Grade (){
    const [name,setName] = useState('')    
    const [kor, setKor] = useState(0)
    const [eng, setEng] = useState(0)
    const [math, setMath] = useState(0)
    const [result, setResult] = useState('')

    const sum =(kor,eng,math)=> {
        return Number(kor) + Number(eng) + Number(math)
    }

    const avg =(kor,eng,math)=> {
        return Number(sum(kor, eng, math)) / 3
    }

    const pass =(kor,eng,math)=>{
        return avg(kor,eng,math) >= 60 ? 'pass': 'Non-pass'
    }

    const res = ()=>{
        let name = (document.getElementById('name')).value
        let kor = (document.getElementById('kor')).value
        let eng = (document.getElementById('eng')).value
        let math = (document.getElementById('math')).value
        setName(name)
        setKor(kor)
        setEng(eng)
        setMath(math)
        setResult(pass(kor,eng,math))
    }

    return(<>
        <h1>성적표</h1>

        <div>
        <label><b>이름</b></label>
        <input id="name"/><br/>

        <label htmlFor=""><b>국어 점수</b></label>
        <input id="kor"/><br/>

        <label htmlFor=""><b>영어 점수</b></label>
        <input id="eng"/><br/>

        <label htmlFor=""><b>수학 점수</b></label>
        <input id="math"/><br/>

        <button onClick={()=>{res()}}>execute</button>
        <div>합계: {sum(kor,eng,math)} 평균: {avg(kor,eng,math)} 합격여부: {result} </div>
        </div>
        </>

    )
}