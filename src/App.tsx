
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Button1 from './components/pages/Button_1'
import Button2 from './components/pages/Button_2';
import Button3 from './components/pages/Button_3';
import Button4 from './components/pages/Button_4';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Button1" element={<Button1/>} />
        <Route path="/Button2" element={<Button2/>} />
        <Route path="/Button3" element={<Button3/>} />
        <Route path="/Button4" element={<Button4/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
