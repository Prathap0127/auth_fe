import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './component/Dashboard';
import Login from './component/Login';
export const url = 'https://express-gen-auth.onrender.com'


function App() {
  // let navigate = useNavigate()
  return <div>
<BrowserRouter>
<Routes>
  <Route path='/login' element={<Login/>}/>
  <Route path='/dashboard' element={<Dashboard/>} />
  <Route path='*' element={<Navigate to={'/login'}/>}/>
</Routes>
</BrowserRouter>


  </div>
}

export default App;
