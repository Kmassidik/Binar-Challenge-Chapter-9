import './App.scss';
import 'boxicons/css/boxicons.min.css';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { AppLayout } from './components';
import { 
  FirebaseGameSuit,
  FirebaseGameSuitTable,
  Home,
  Register,
  Profile,
  Blank,
  Login
} from './pages'



function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route path='/' element={<AppLayout />}>
                    <Route index element={<Home />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/started' element={<Blank />} />
                    <Route path='/calendar' element={<Blank />} />
                    <Route path='/order' element={<Blank />} />
                </Route>
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
        <Route path='/gameSuit' element={<FirebaseGameSuit/>}/>
        <Route path='/gameSuitTable' element={<FirebaseGameSuitTable/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App;
