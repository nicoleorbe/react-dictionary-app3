import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="app-header text-center mt-5">
        <h1>
          <strong>Dictionary</strong>
        </h1>
      </header>
      <div>
        <main>
          <Dictionary />
        </main>
      </div>
      <footer className="footer text-center">
        <p>
          {" "}
          Built by <span className="brand-name">Nicole Orbe</span> and lots of
          <span className="footer-icon" role="img" aria-label="coffee">
            ☕
          </span>{" "}
          and is{" "}
          <a
            href="https://github.com/nicoleorbe/react-weatherapp"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://react-weatherapp.thenicoleorbe.com/"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
