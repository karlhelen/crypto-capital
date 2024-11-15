import React from 'react';

export default function Home() {

  const services = [
    {
      id: 1,
      name: "Milk",
      prices: ["Static", "Dynamic", "SPA/PWA/EDA"],
      imgUrl: "./Web-App.jpg",
      url: "/milk"
    },
    {
      id: 2,
      name: "Honey",
      prices: ["Android", "iOS", "App Gallery"],
      imgUrl: "./Mobile-App.png",
      url: "/honey"
    }
  ];

  return (
    <main className="Container">

      <div className="Overview">
        <div className="Banner text-center">
          <h1>Crypto Capital</h1>
        </div>
        
      </div>
        
    </main>
  );
}