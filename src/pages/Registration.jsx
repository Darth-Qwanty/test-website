import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import bcrypt from "bcryptjs-react";




function Registration(){
    const[user,setUser] = useState("");
    const [email, setEmail] = useState("");
    const [pass1, setPass1] = useState("");
    const [pass2,setPass2] = useState("");
    const [error,setError] = useState("");
    const [msg,setMsg] = useState("");
    const [disabledbtn, setDisabledbtn] = useState(true)


    const navigate= useNavigate();



    useEffect(()=>{
        setTimeout(function(){
            setMsg("");
        },5000);
    },[msg]);

    const handleInputChange = (e, type) =>{
        switch(type){
            case "user":
                setError("");
                setUser(e.target.value);
                if(e.target.value===""){
                    setError("Username has left blank!")
                }
                break;
            case "email":
                setError("");
                setEmail(e.target.value);
                if(e.target.value===""){
                    setError("Email has left blank!")
                }
                break;
            case "pass1":
                setError("");
                setPass1(e.target.value);
                if(e.target.value===""){
                    setError("Create?Enter a password!")
                }
                break;
            case "pass2":
                setError("");
                setPass2(e.target.value);
                if(e.target.value===""){
                    setError("Comfirm the password!")
                }
                else if(e.target.value !==pass1){
                    setError("Password doesn't match")
                }
                break;
            default:
        }
    }

    function handleSubmit(){
        if(user !==""&& email !=="" && pass1 !=="" && pass2 !==""){
            var url = "http://localhost/php-api/new_register_system.php";
            var headers ={
                "Accept" : "application/json",
                "Content-Type":"application/json"
            };

            const hashedPassword = bcrypt.hashSync(pass2,10);
            console.log(hashedPassword)
            var Data ={
                user: user,
                email: email,
                pass: hashedPassword
            }
            fetch(url,{
                method: "POST",
                headers: headers,
                body: JSON.stringify(Data)
            }).then((response)=> response.json())
            .then((response)=>{
                setMsg(response[0].result);
                console.log(response[0].result)
                if(response[0].result === "You have registered successfully!"){
                    setUser("");
                    setEmail("");
                    setPass1("");
                    setPass2("");
                    navigate("/login")
                }

            }).catch((err)=>{
                setError(err);
                console.log(err);
            });
        }
        else{
            setError("All fields are required!");
        }
    }

    function checkPassword(){
        if(pass1.length <8){
            setError("Password is less that 8 characters")
            setDisabledbtn(true);
        }else{
            setDisabledbtn(false)
        }
    }

    return(
        <>
        <div className="Container">
                <div className="form">

                    <p>
                        {
                            msg !=="" ?
                            <span className="success">{msg}</span> :
                            <span className="error">{error}</span>
                        }
                    </p>

                    <label className="InputLabel">Username</label>
                    <input
                        type="text"
                        name = 'user'
                        value={user}
                        onChange={(e)=> handleInputChange(e, "user")}
                
                    />

                    <label className="InputLabel">Email</label>
                    <input
                        type="email"
                        name = 'email'
                        value = {email}
                        onChange={(e)=> handleInputChange(e, "email")}
                
                    />

                    <label className="InputLabel">Password</label>
                    <input
                        type="password"
                        name = 'pass1'
                        value={pass1}
                        onChange={(e)=> handleInputChange(e, "pass1")}
                        onBlur={checkPassword}
                    />

                    <label className="InputLabel">Confirm Password</label>
                    <input
                        type="password"
                        name = 'pass2'
                        value={pass2}
                        onBlur={checkPassword}
                        onChange={(e)=> handleInputChange(e, "pass2")}
                    />
                    <div>
                        <p className="suggestion_text">Already registered?</p>
                        <Link to="/login" className="link">Login</Link>
                    </div>
                    <input
                        disabled={disabledbtn}
                        type="submit"
                        defaultValue="Submit"
                        className="button"
                        onClick={handleSubmit}
                    />
                </div>
            </div>
        </>
    );
}

export default Registration;