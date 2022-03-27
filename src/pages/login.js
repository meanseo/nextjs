import React, {useState} from 'react';
export default function Login (){
    const [username,setUserName] = useState("")
    const [password,setPassword] = useState("")
    const res =()=>{
        let username = (document.getElementById('username')).value
        let password = (document.getElementById('password')).value
        setUserName(username)
        setPassword(password)
    }

    return <>
    <h1>로그인</h1>
    <form>
        <div>
        <label><b>Username</b></label>
        <input id='username'/><br/>
        <label><b>Password</b></label>
        <input id='password'/><br/>
        <button onClick={()=>{res()}}>Login</button><br/>
        </div>
        <div>
        {username}님, 로그인 성공
        </div>
    </form>
    </>
}