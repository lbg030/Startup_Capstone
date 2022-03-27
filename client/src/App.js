import axios from "axios";
import { useEffect } from "react";
import "./App.css";
import Login from "./components/LoginForm";
import Test from "./components/Test";

function App() {
  return (
    <div>
      <Login />
      <Test />
    </div>
  );
}

export default App;
