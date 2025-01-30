"use client";

import Link from "next/link";
import Form from "next/form";
import { useState } from "react";
import { LoginAdmin } from "../lib/firestore";

export default function Login() {

  const [ email, setEmail ] = useState("");
  const [ name, setName ] = useState("");
    
    // const [ errorMessage, dispatch ] = useFormState(authenticateAdmin, undefined);
    /*
    useEffect(() => {
      const fetchUsers = async () => {
        const querySnap = awaitDocs(collection(db, "admin"));
        setItems(querySnap.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      }

      fetchUsers()
    }, [])
    */

  return (
    <div>
      <div><h1>Login</h1></div>
      <div>
        <Form action={LoginAdmin}>
          <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
          <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
          <button type="submit">Login</button>
        </Form>
      </div>
      <div><p>New user? Register an account <span><Link href="/sign-up">here</Link></span></p></div>
    </div>
  )
}