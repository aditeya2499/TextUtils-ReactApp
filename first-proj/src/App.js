import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Dark from './Components/Dark';
import React, {useState} from 'react'
import Alerts from './Components/Alerts';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";


// React me ham apni site ke lie jo components banate hai use ham ek function ke roop me dete hai aur us funtion me ham
// jsx return karwa dete hai
// jsx- Consider karo ki ye HTML hai java script ki functionalities ke saath
// jsx me kuch changes hai jaise div ki class ko ham classname karke likhenge kyuki class java script me rserved keyword hai
//jsx me ham starting me sirf ek component hi return kar sakte hai aur agai do karne hai to wrap karke <> </> aise krne honge
// {} Iss bracket ke andar koi bi cheez aayegi usse java script consider kara jayega
// css change karne ke lia app.css hai aur ham koi bi stylesheet import kar sakte hai.

function App() {

  const[alert, setAlert] = useState(null);

  const showAlert = (alertMessage, type) => {
    setAlert({
      alertMessage: alertMessage,
      type: type
    })
    setTimeout(
      () => {
        setAlert(null);
      }, 2000
    )
  }

  const[mode, setMode] = useState('light')
  const toggleMode = () => {
    if(mode==='light') {
      setMode('dark')
      document.body.style.backgroundColor = '#041E42'
      showAlert('Dark Mode was enabled.','success')
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light Mode was enabled.','success')
    }
  }
  
  return (
    <Router>
    <>
      <Navbar title="TextUtilsWithProps" about="About" mode={mode} toggleMode={toggleMode}></Navbar>
      <Alerts alert={alert}></Alerts>
      <div className="container">
      {/* <Textform heading="Enter Text to Analyze" mode={mode} showAlert={showAlert}></Textform> */}
      {/* <Dark/> */}
      <Routes>
          <Route exact path="/about" element={<Dark/>}/>
          <Route exact path="/Home" element={<Textform/>}/>
          <Route exact path="/" element={<Textform heading="Enter Text to Analyze" mode={mode} showAlert={showAlert}></Textform>}/>
        </Routes>
      </div>
    </>
    </Router>
  );
}

export default App;
