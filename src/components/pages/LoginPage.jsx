import { useState } from "react";

function LoginPage() {
  // state
  const [prenom, setPrenom] = useState("");

  // comportements
  const handleClick = () => {
    alert(`Bonjour ${prenom}`);
    setPrenom("");
  };

  // render
  return (
    <div>
      <h1>Bienvenue chez nous !</h1>
      <h2>Connectez-vous</h2>
      <form>
        <input required type="text" placeholder="Entrez votre prénom..." />
        <button onClick={handleClick}>Accéder à votre espace</button>
      </form>
    </div>
  );
}

export default LoginPage;
