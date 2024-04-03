import { useState } from 'react'
import './App.css'
import Home from './Home'
import SignUpForm from './SignUpForm'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  const [page, setPage] = useState(false)

  return(
    <div >
        <Home  setPage={setPage} page={page}></Home>
        {page ? <SignUpForm setPage={setPage} page={page} ></SignUpForm> : ``}
    </div>
  )
}

export default App
