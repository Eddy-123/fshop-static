import "./styles.css";

export default function App() {
  return (
    <div className="grid-container">
      <header className="header">
        <div className="brand">
          <a href="index.html">
            <img src="./images/logo.png" />
          </a>
        </div>
        <div className="header-links">
          <a href="cart.html">Panier</a>
          <a href="signin.html">Connexion</a>
        </div>
      </header>
      <main className="main">
        <ul>
          <li>Ensemble des produits</li>
          <li>Quelques produits</li>
        </ul>
      </main>
      <footer className="footer">All right reserved.</footer>
    </div>
  );
}
