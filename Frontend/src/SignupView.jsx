import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function SignupView() {

  const [firstname, setFirstname] = useState()
  // const [lastname, setlastname] = useState('');
  // const [email, setEmailname] = useState('');

  const handleFirstNAmeValue = (e) => {
    setFirstname(e.target.value)
  }

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // const newUser = {
    //   firstname:
    // };

    //Todo: creo un nuovo utente nel server
    // toast.success("Success Notification !", {
    //   position: "bottom-center",
    // });


    // toast.error("Oh no", {
    //   position: "bottom-center",
    // });


    // toast.warning("Oh no", {
    //   position: "bottom-center",
    // });

    toast.info("Oh no", {
      position: "bottom-center",
    });

    navigate('/users')   //hook che forza la navigazione su un'altra pagina
  }

  return (
    <main>
      <section>
        <h2>Iscriviti</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Inserisci il tuo nome" value={firstname} onChange={handleFirstNAmeValue} />
          {/* <input type="text" placeholder="Inserisci il tuo cognome" />
          <input type="email" placeholder="Inserisci la tua email" /> */}
          <button>Iscriviti</button>
        </form>
      </section>
    </main>
  )
}