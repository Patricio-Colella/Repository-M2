import React from 'react';

export function validate(input) {
  let errors = {};
  if (!input.username) {
    errors.username = 'Username is required';
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    errors.username = 'Username is invalid';
  }
  if (!input.password) {
    errors.password = 'Password is required';
  } else if (!/(?=.*[0-9])/.test(input.password)) {
    errors.password = 'Password is invalid';
  }
  return errors;
};


export default function  Form(ex) {
  const [input,setinput]=React.useState({username:"",password:""})
  const [error,seterror]=React.useState({})
  const handleInputChange = function(e) {
    setinput({...input,[e.target.name]: e.target.value});
    seterror(validate({...input,[e.target.name]: e.target.value}))
  }

  function fun(e){
    if(!error.username && !error.password && input.username && input.password){
      console.log(`nombre:${input.username}`);
      console.log(`contraseña:${input.password}`)
    }else{ 
      console.log("error")
    }
  }
  return (
    <div>
        <form onSubmit={(e)=>fun(e)}>
          <div>
            <label>Username:</label>
            <input className={error.username &&"danger"} type="text" name="username" value={input.username} onChange={handleInputChange}></input>
            {error.username && (
            <p className="danger">{error.username}</p>
            )}
          </div>
          <div>
            <label>Password:</label>
            <input className={error.password && "danger" } type="password" name="password" value={input.password} onChange={handleInputChange}></input>
            {error.password && (
            <p className="danger">{error.password}</p>
            )}
          </div>
          <input type="submit" value="submit">
          </input>
        </form>
    </div>
  )
}

