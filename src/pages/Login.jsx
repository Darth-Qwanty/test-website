import { useState, useEffect } from "react";
import { data, useNavigate } from "react-router-dom";



function Login(){
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
            var url = "http://localhost/php-api/login_sys_pokemon.php";
            var headers = {
                "Accept" : "application/json",
                "Content-type":"application/json"
            };
            //const hashedPassword = bcrypt.hashSync(pass,10);
            console.log(pass)
            var Data ={
                user : user,
                pass: pass
            };
            fetch(url,{
                method: "POST",
                headers: headers,
                body: JSON.stringify(Data)
            }).then((response)=>response.json())
            .then((response) => {
                if(response[0].result === "Invalid username!" || response[0].result === "Invalid password! " ){
                    setError(response[0].result);
                }
                else{
                    //setMsg(response[0].result);
                    console.log(response[1].username)
                    //setTimeout(naviget("/session"))
                }
            }).catch((err)=>{
                setError(err);
                console.log(err);
            })
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
                <label>Username</label>
                <input 
                    type="text" 
                    value={user}
                    onChange={(e)=> handleInputChange(e, "user")}
                />

                <label>Password</label>
                <input 
                    type="password"
                    value={pass}
                    onChange={(e)=> handleInputChange(e, "pass")}
                />

                <label></label>
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

export default Login;