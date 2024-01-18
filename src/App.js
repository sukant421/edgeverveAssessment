import logo from "./logo.svg";
import "./App.css";
import { Button } from "reactstrap";
import Topbar from "./navBar/NavBar";
import MainContent from "./mainComponent/MainContent";

function App() {
  return (
    <div>
      <Topbar />
      <MainContent />
    </div>
  );
}

export default App;
