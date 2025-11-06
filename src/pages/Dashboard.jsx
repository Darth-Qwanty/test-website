
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


function Dashboard(){
  const naviget = useNavigate();

  
  const fetchUser = async() =>{
    const user = localStorage.getItem("user");

    if (!user){
      naviget("/login");
    } else{
      const userName = document.getElementById('user');
      if(userName){
        userName.innerText = user;
      }
    }
  }

  useEffect(()=>{
        fetchUser()
  })


  function logOutSubmit(){
    localStorage.clear()
    naviget("/login")
  }




    return(
      <div>
        This is user dashboard. 
        <h2>Welcome, <span id="user"></span></h2>
        <button className="button" onClick={logOutSubmit}>Logout</button>
      </div>
 
    );
}

export default Dashboard;