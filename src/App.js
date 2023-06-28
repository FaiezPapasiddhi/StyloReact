
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/home/Home';
import Kids from './Components/Kids/Kids';
import Men from './Components/Men/Men';
import Women from './Components/Women/Women';
import Offer from './Components/Offers/Offer';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Women" element={<Women />} />
            <Route path="/Men" element={<Men />} />
            <Route path="/Kids" element={<Kids />} />
            <Route path="/Offer" element={<Offer />} />
       
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
