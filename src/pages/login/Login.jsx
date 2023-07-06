import React,{useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';
const Login = () => {
    //const passwordRef = useRef(null); //used on click events mostly
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    useEffect(()=> {
        console.log(email);
    },[email]);

    const navigate = useNavigate();
    return (
        <div className="loginContainer">
            <h1>My Todo List</h1>
            <form onSubmit={(e) =>{
                e.preventDefault();
                //setEmail('');
                //setPassword('');
                if(email === "admin@gmail.com" && password === "admin"){
                    alert('Successfully Logged In');
                    navigate('/my-list');
                }
                else{
                    alert('Login not Successful');
                }
            }}>
                <label htmlFor="email">Email {email}</label>
                <input type="email" name="email" value={email} onChange={(e) => {setEmail(e.target.value)}} id="email" />
                {/* {passwordRef.current?.value} */}
                <label htmlFor="password">Password {password}</label> 
                {/* ref={passwordRef} */}
                <input onChange={(e) => {setPassword(e.target.value)}} value={password} type="password" name="password" id="password" />
                <button>Login / Registration</button>
            </form>
        </div>
    );
}

export default Login;



//HOOKS
//useState => State Management without delay
//useEffect => jese hi DOM ma koi effect hoga
//useRef => DOM.queryselector ka alternative
////////////////////////////////////////////
//useMemo
//useCallback