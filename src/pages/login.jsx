import React, { useState } from 'react';
import { redirect } from 'react-router-dom';
import { collection, getDocs } from "firebase/firestore";

export function Login() {

  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ users, setUsers ] = useState([]);
  // const [ user, setUser ] = useState({});

  const getUser = async () => {

    await getDocs(collection(db, "users"))
      .then((querySnapshot)=>{              
        const newData = querySnapshot.docs
          .map((doc) => ({...doc.data(), id:doc.id }));
        setUsers(newData);                
        console.log(users, newData);
    })
  }

  return (
    <div>
      <div><h1>Login</h1></div>
      <form>
        <input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
        <input type="password" name="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
        <Submit />
      </form>
    </div>
  )
}

export function Submit() {
  
  function Login(e) {
    e.preventDefault();

    redirect("/signup");
  }
  
  return (
    <button type="submit" onClick={Login}>Login</button>
  )
}