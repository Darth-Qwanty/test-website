import { useState, useEffect } from "react";
import { data, useNavigate, Link } from "react-router-dom";
import { useLayoutEffect } from "react";




function Login_copy(){
    
        
    let naviget = useNavigate();
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const [error, setError] = useState("");
    const [msg, setMsg] = useState("");

    useEffect(()=>{
        setTimeout(function(){
            setMsg("");
        },5000)
    }, [msg])


    const handleInputChange = (e, type) =>{
        switch(type){
            case "user":
                setError("");
                setUser(e.target.value);
                if(e.target.value === ""){
                    setError("No username");
                }
                break;
            case "pass":
                setError("");
                setPass(e.target.value);
                if(e.target.value === ""){
                    setError("No password");
                }
                break;
            default:
        }
    }


    function loginSubmit(){
        if(user !==""&& pass !==""){
            try{
                var url = "http://localhost/php-api/login_sys_pokemon.php";
                var headers = {
                    "Accept" : "application/json",
                    "Content-type":"application/json"
                };
                //const hashedPassword = bcrypt.hashSync(pass,10);
                var Data ={
                    user : user,
                    pass: pass
                };
                try{
                    fetch(url,{
                        method: "POST",
                        headers: headers,
                        body: JSON.stringify(Data)
                    }).then((response) => {
                        if(response.status === 401){
                            setError("Invalid password or username");
                        }
                        else{
                            var values = response.json()
                            values.then(response=>{
                                console.log(response[0].result)
                                localStorage.setItem('user',response[0].result)
                            })
                            naviget("/dashboard")
                            //setTimeout(naviget("/session"))
                        }
                    }).catch((err)=>{
                        setError(err);
                        console.log(err);
                    })
                }catch(error){
                    console.log(error)
                    setError("Internal server error, try again later")
                }
            }catch (error){
                console.log(error);
                setError("Internal server error, try again later")
            }
        }
        else{
            setError("All fields must be filled!")
        }
    }


    return(
        <div className="Container">
            <div className="form">
                <p>
                    {
                        error !== "" ?
                        <span className="error">{error}</span>:
                        <span className="success">{msg}</span>

                    }
                </p>
                <label className="InputLabel">Username</label>
                <input 
                    type="text" 
                    value={user}
                    onChange={(e)=> handleInputChange(e, "user")}
                />

                <label className="InputLabel">Password</label>
                <input 
                    type="password"
                    value={pass}
                    onChange={(e)=> handleInputChange(e, "pass")}
                />
                <div>
                    <p className="suggestion_text">Don't have an account</p>
                    <Link to="/register" className="link">Register</Link>
                </div>
                <input 
                    type="submit"
                    defaultValue="Login"
                    className="button"
                    onClick={loginSubmit}
                />
            </div> 
        </div>
 
    );
}

export default Login_copy;