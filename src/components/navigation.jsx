import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {

  return (
    <div>
      <Link to="/"><p>Home</p></Link>
      <Link to="/coins"><p>Coins</p></Link>
      <Link to="/web3"><p>Web3</p></Link>
      <Link to="/contacts"><p>Contacts</p></Link>
    </div>       
  )
}