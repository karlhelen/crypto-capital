import React from 'react';
import HomePage from './pages/home';
import LoginPage from './pages/login';
import SignupPage from './pages/signup'; 
import Header from './components/header';
import Footer from './components/footer';

export function Home() {

  return (
    <div className="Home">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export function Coins() {

  return (
    <div className="Coins">
      
    </div>
  );
}

export function Web3() {

  return (
    <div className="Web3">
      
    </div>
  );
}

export function Contacts() {

  return (
    <div className="Contacts">
      
    </div>
  );
}

export function Login() {

  return (
    <div>
      <LoginPage />
    </div>
  );
}

export function Signup() {

  return (
    <div>
      <SignupPage />
    </div>  
  );
}