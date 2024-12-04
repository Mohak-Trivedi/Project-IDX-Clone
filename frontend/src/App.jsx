import { pingApi } from "../apis/ping";
import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    pingApi();
  }, []);
  return <>Hello</>;
}

export default App;
