"use client";

import Link from "next/link";
import Form from "next/form";
import { useState } from "react";
import { CreateAdmin } from "../lib/firestore"

export default function Signup() {

  const [ email, setEmail ] = useState("");
  const [ name, setName ] = useState("");

  return (
    <div>
      <div><h1>Sign Up</h1></div>
      <div>
        <Form action={CreateAdmin}>
          <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
          <input type="text" name="password" value={name} onChange={(e) => setName(e.target.value)} placeholder="Password" required />
          <button type="submit">Submit</button>
        </Form>
      </div>
      <div>Already have an account? Login <span><Link href="/login">here</Link></span></div>
    </div>
  )
}