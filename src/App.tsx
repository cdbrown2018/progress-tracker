import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { GoogleLogin } from "@react-oauth/google";

function App() {
  return (
    <div className="App">
      <GoogleLogin
        onSuccess={console.log}
        onError={console.error}
        auto_select
        useOneTap
      />
    </div>
  );
}

export default App;
