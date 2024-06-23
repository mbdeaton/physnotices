import logo from "./logo.svg";
import "./App.css";

function AppBar() {
  return (
    <header className="app-bar">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-name">Physics Notices</h1>
    </header>
  );
}

export default AppBar;
