import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";



async function fetchUsers(firstNameSearched) {
  let url = 'http://localhost:3000/api/v1/users'
  if (firstNameSearched) {
    url = `http://localhost:3000/api/v1/users?firstname=${firstNameSearched}`
  }
  const response = await axios.get(url)
  console.log(response.status);

  return response.data
}


export default function UsersView() {

  const [users, setUsers] = useState([])

  const [firstnameValue, setFirstnameValue] = useState('');
  const [urlSearchParams, setUrlSearchParams] = useSearchParams();

  const handleFirstNAmeValueSearched = (e) => {
    setFirstnameValue(e.target.value)
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // console.log(actualValue);
    setUrlSearchParams(new URLSearchParams(`firstname=${firstnameValue}`))

    fetchUsers(firstnameValue)
      .then((usersDto) => {
        setUsers(usersDto)
      })
      .catch((err) => {
        console.log(err);

      })
  }


  useEffect(() => {

    const firstNameSearched = urlSearchParams.get('firstname')
    fetchUsers(firstNameSearched)
      .then((usersDto) => {
        console.log(usersDto)
        setUsers(usersDto)
      })
      .catch((err) => {
        console.log(err);

      })
  }, [])

  return (
    <>
      <Navbar></Navbar>
      <header>
        <h1>I nostri utenti</h1>
      </header>
      <main>

        <section>
          <h2>Cerca un utente per nome</h2>
          <form onSubmit={handleSearchSubmit}>
            <input type="text" placeholder="Cerca il nome dell'utente da cercare" value={firstnameValue} onChange={handleFirstNAmeValueSearched} />
            <button>Search</button>
          </form>
        </section>

        <section>
          <ul>
            {
              users.map((user) => {
                return (
                  <li key={user.id}><Link to={`/users/${user.id}`}>{user.firstname} {user.lastname}</Link></li>
                )
              })
            }
          </ul>
        </section>
      </main>
    </>
  )
}