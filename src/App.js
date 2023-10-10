import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import About from "./components/About";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [text, setText] = useState("Enable Dark Theme");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 4000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "#4f72be";
      setText("Disable Dark Theme");
      showAlert("Dark Mode Enabled !", "success");
    } else {
      setMode("light");
      document.body.style.background = "white";
      setText("Enable Dark Theme");
      showAlert("Ligh Mode Enabled !", "success");
    }
  };
  return (
    <>
      <Navbar
        title="TextUtil"
        about="About Us"
        mode={mode}
        text={text}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} showAlert={showAlert} />
      <TextForm heading="Eneter Your text" mode={mode} showAlert={showAlert} />
      {/* <BrowserRouter>
          <Routes> */}
            {/* <Route path="/" element={<TextForm heading="Eneter Your text" mode={mode} showAlert={showAlert} />}></Route> */}
            {/* <Route path="/about" element={<About mode={mode} />}></Route> */}
          {/* </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
