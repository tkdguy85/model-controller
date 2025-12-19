import './css/App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ModelControllerPage from './pages/ModelControllerPage.jsx'

function App() {
  return (
    <div>
      <main className='main-content'>
        <Routes>
          <Route path='/' element={ <Home /> }/>
          <Route path='/controls' element={<ModelControllerPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
