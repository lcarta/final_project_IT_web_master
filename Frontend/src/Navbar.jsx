import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



export default function Navbar() {



  return (
    <>
      <nav>
        <Link to='/'>Torna alla Home</Link>
        <Link to='/about'>Scopri chi siamo</Link>
        <Link to='/users'>I nostri utenti</Link>
        <Link to='/signup'>Iscriviti</Link>
      </nav>
    </>
  )
}