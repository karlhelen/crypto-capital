import Link from "next/link";

export default function Navigation() {

  return (
    <div className="nav-links">
      <Link href="/">Home</Link>
      <Link href="/currencies">Currencies</Link>
      <Link href="/login">Login</Link>
      <Link href="/sign-up">Sign Up</Link>
    </div>
  )
}