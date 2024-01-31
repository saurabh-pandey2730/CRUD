import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'

import './App.css'
import Users from './User'
import CreateUser from './components/CreateUser'
import UpdateUser from './components/UpdateUser'

function App() {
  

  return (
    <div>
      <BrowserRouter>
       <Routes>
       <Route path='/' element={<Users/>}></Route>
       <Route path='/create' element={<CreateUser/>}></Route>
       <Route path='/update' element={<UpdateUser/>}></Route>


       </Routes>
      
      </BrowserRouter>
     
    </div>
  )
}

export default App
