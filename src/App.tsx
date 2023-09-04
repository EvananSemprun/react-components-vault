
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Button1 from './components/pages/Button_1'
import Button2 from './components/pages/Button_2';
import Login1 from './components/pages/Login1';
import Pdf from './components/pages/Pdfcreate';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Button1" element={<Button1/>} />
        <Route path="/Button2" element={<Button2/>} />
        <Route path="/Login1" element={<Login1/>} />
        <Route path="/Pdf" element={<Pdf/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
