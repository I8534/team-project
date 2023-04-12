import './App.css';
import Index from './index/Index'
import { BrowserRouter, Routes ,Route } from 'react-router-dom'
import Mainpage from './Main/Mainpage';
import GesifanJunche from './Main/Box4/GesifanJunche';
import CctvBig from './Main/Box5/CctvBig';
import Join from './Login/Join'
import Login from './Login/Login'
import Register from './Login/Register'



function App() {
  return (
<BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />}/>
      <Route path="/MainPage" element={<Mainpage />}/>
      <Route path="/GesifanJunche" element={<GesifanJunche />}/>
      <Route path="/CctvBig" element={<CctvBig />}/>
      <Route path="/Login" element={<Login />} />
      <Route path="/Join" element={<Join />} />
      <Route path="/Register" element={<Register />} />
    </Routes>
</BrowserRouter>
  )
}

export default App;
