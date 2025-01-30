import "../globals.css";
import Navigation from "./navigation";

export default function Header() {

  return (
    <div className="header">
      <div><h5>Crypto Capital</h5></div>
      <div><Navigation /></div>
    </div>
  )
}