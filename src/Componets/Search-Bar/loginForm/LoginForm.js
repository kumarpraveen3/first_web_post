import React, { useState } from "react";
import "./LoginForm.css";

const LoginForm = () => {

  const [userName, setusrename] = useState(null);
  const [password, setpassword] = useState(null);
  const [errorMassage, setErrorMassage] = useState(null);
  const [loading, setLoading]=useState(false)


  //  form 
  
  function setvalue(e, type) {
      if (type === "username") {
            setusrename(e.target.value);
      }
             if (type === "password") {
             setpassword(e.target.value);
    }
  }


  // username and password maching
 
  const hendlesubmit = () => {
    if (!userName) {
      setErrorMassage(" Please enter user name ");
      return;
    }
    if (!password) {
      setErrorMassage(" Please enter pssword ");
      return;
    }

    setLoading(true)
    setErrorMassage(null)
    setTimeout(() => {
      if (userName === "praveen" && password === "123456") {
        alert(" Form Match success ");
       
        }
        else {
          setErrorMassage(" Form Match not success ");
        }
        setLoading(false)
    }, 5000);

    
    
  };
 
     return (
           <  div className="Contener_login">
                     <div>
                        <h2>Login forms</h2>
                     </div>
              <div className="login-form-input">
                    <label htmlFor="username">Uesrname:-</label>
              <input
          type="text"
          id="username"
          onChange={(e) => {
            setvalue(e, "username");
          }}
        />
      </div>
      <div className="user-passward">
        <label htmlFor="passward">Passward:-</label>
        <input
          type="password"
          id="passward"
          onChange={(e) => {
            setvalue(e, "password");
          }}
        />
      </div>
      {errorMassage && <div className="error-Contener">{errorMassage}</div>}



            {
              loading 
              ?<div className="loading">Loading.....</div>
              : <div className="submit">
              <button onClick={hendlesubmit}>submit</button>
            </div>
            }
      
    </div>
  );
};
export default LoginForm;
