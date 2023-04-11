import './App.css';
import Index from './index/Index'
import { BrowserRouter, Routes ,Route } from 'react-router-dom'
import Mainpage from './Main/Mainpage';



function App() {
  return (
<BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />}/>
      <Route path="/MainPage" element={<Mainpage />}/>
    </Routes>
</BrowserRouter>
  )
}

export default App;
