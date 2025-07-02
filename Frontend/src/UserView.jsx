import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


import Navbar from "./Navbar";

async function fetchUser(userId) {
  const response = await axios.get(`http://localhost:3000/api/v1/user/${userId}`)
  console.log(response.status);

  return response.data
}

export default function UserView() {


  const { id } = useParams()
  console.log(id)


  const [user, setUser] = useState([])


  useEffect(() => {
    fetchUser(id)
      .then((userDto) => {
        console.log(userDto)
        setUser(userDto)
      })
      .catch((err) => {
        console.log(err);

      })
  }, [])



  return (
    <>
      <Navbar />
      <main>
        <h1>Pagina dell'utente {user.firstname}</h1>
        <p>L'utente {user.firstname} {user.lastname} ha {user.age} anni</p>
        <img src={user.avatar} alt="" />

      </main>
    </>
  )
}