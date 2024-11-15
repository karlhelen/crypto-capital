import React, { useState } from 'react';
import { redirect } from 'react-router-dom';
// import { createUser } from '../lib/firestore';
import { collection, getDocs } from "firebase/firestore";

export function Signup() {

  const [ email, setEmail ] = useState("");
  const [ name, setName ] = useState("");
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
      <div><h1>Sign Up</h1></div>
      <form>
        <input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
        <input type="name" name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} /><br />
        <input type="password" name="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
        <Submit />
      </form>
    </div>
  );
}

export function Submit() {
  
  function AddUser(e) {
    e.preventDefault();

    redirect("/login");
  }
  
  return (
    <button type="submit" onClick={AddUser}>Sign up</button>
  )
}