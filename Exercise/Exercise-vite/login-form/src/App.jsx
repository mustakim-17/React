import { useState } from 'react'
import './App.css'

function App () {
  const [showPassword,setShowPassword] = useState(true);

  function password () {
    if (showPassword) {
      setShowPassword(false);
    } else if (!showPassword) {
      setShowPassword(true);
    }
  }

  return(
    <>
      <p className = "greeting">Hello,welcome to my website</p>
      <div>
        <input placeholder="Email" className="input-form" />
      </div>
      <div>
        { showPassword 
          ? 
            <div>
              <input placeholder="Password"         
              className="input-form" type="text" />
              <button onClick = {password}>Hide</button>
            </div>
          :
            <div>
              <input placeholder="Password"         
              className="input-form" type="password" />
              <button onClick = {password}>Show</button>
            </div>
        }
      </div>
      <div className="button-div">
        <button className="login-btn">Login</button>
        <button>Sign up</button>
      </div>
    </>
  );
}

export default App
